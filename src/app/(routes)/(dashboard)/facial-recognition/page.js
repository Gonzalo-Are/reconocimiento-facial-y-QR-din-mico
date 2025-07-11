"use client";

import AvatarDisplay from "@/components/AvatarDisplay";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function FacialRecognitionPage() {
  const { user } = useUser();
  const [imagePreview, setImagePreview] = useState(user?.imageUrl || "");
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show image preview
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload image to Azure
    setUploading(true);
    setStatus("Subiendo imagen a Azure...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json(); 

      setUploading(false);
      localStorage.setItem("urlPerfilAzure", data.url); 

      if (res.ok) {
        setStatus("✅ Imagen subida exitosamente");
        console.log("📦 URL en Azure:", data.url);

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

      <AvatarDisplay />
    </div>
  );
}
