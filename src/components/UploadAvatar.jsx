"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function UploadAvatar({ onAvatarUploaded }) {
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

        // Llamar al callback si existe para refrescar la vista
        if (onAvatarUploaded) {
          onAvatarUploaded();
        }
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
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Subir imagen de perfil</h3>
      <div className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          disabled={!file}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Subir
        </button>
        {status && (
          <p className={`text-sm ${status.includes('éxito') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
