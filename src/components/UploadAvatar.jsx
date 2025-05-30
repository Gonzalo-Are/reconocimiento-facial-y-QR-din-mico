"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function UploadAvatar() {
  const { user } = useUser();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !user) {
      setStatus("Falta archivo o sesión de usuario");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("userId", user.id);

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setStatus("¡Imagen subida con éxito!");
        console.log("Respuesta:", data);
      } else {
        const error = await res.json();
        setStatus("Error al subir: " + error.error);
      }
    } catch (err) {
      console.error("Error de red:", err);
      setStatus("Error de red");
    }
  };


  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
      <h3>Subir imagen de perfil</h3>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload} style={{ marginTop: "0.5rem" }} className="cursor-pointer ml-4 border rounded-md px-3 py-1">
        Subir
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
