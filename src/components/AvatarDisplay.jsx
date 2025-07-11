"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import UploadAvatar from "./UploadAvatar";

export default function AvatarDisplay() {
  const { user } = useUser();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.id) {
      fetchAvatar();
    }
  }, [user?.id]);

  const fetchAvatar = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/profile?userId=${user.id}`);
      const data = await response.json();

      if (response.ok) {
        setAvatarUrl(data.avatarUrl);
      } else {
        setError(data.error || "Error al obtener el avatar");
      }
    } catch (err) {
      console.error("Error al obtener avatar:", err);
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  // Callback to refresh avatar after upload
  const handleAvatarUploaded = () => {
    fetchAvatar();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-500">Cargando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={fetchAvatar}
          className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (avatarUrl) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src={avatarUrl}
              alt="Avatar del usuario"
              fill
              className="object-cover rounded-full border-4 border-gray-200 shadow-lg"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 text-center">
            Tu foto de perfil actual
          </p>
        </div>
      </div>
    );
  }

  // If no avatar is set, show upload option
  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Aún no tienes una foto de perfil. Sube una imagen para personalizarla.
      </p>
      <UploadAvatar onAvatarUploaded={handleAvatarUploaded} />
    </div>
  );
}
