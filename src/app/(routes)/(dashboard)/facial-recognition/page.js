"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

export default function FacialRecognitionPage() {
  const { user } = useUser();
  const [imagePreview, setImagePreview] = useState(user?.imageUrl || "");
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Mostrar preview
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);

    // 2. Subir a Azure
    setUploading(true);
    setStatus("Subiendo imagen a Azure...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json(); // ✅ esta línea es obligatoria

      setUploading(false);
      localStorage.setItem("urlPerfilAzure", data.url); // ✅ ahora sí funciona

      if (res.ok) {
        setStatus("✅ Imagen subida exitosamente");
        console.log("📦 URL en Azure:", data.url);

        // OPCIONAL: actualizar imagen global en Clerk
        // await user.update({ imageUrl: data.url });
      } else {
        throw new Error(data.error || "Error al subir imagen");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error al subir imagen");
    } finally {
      setUploading(false);
    }
    localStorage.setItem("urlPerfilAzure", data.url);
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 text-center">
      <h1 className="text-2xl font-bold mb-6">Foto de Perfil</h1>

      <Image
        src={imagePreview}
        alt="Foto actual"
        className="w-40 h-40 mx-auto rounded-full object-cover border shadow mb-4"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
      />
      <p className="mt-4 text-sm text-gray-600">{status}</p>
    </div>
  );
}
