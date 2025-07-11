"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CameraPage() {
  const { user } = useUser(); // ID del usuario logueado
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Conectando con la cámara…");
  const [camaraDisponible, setCamaraDisponible] = useState(true);

  /* 1. Pedir acceso a la cámara al montar el componente */
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setStatus("Apunta tu rostro y pulsa “Verificar”");
        }
      })
      .catch(() => {
        setCamaraDisponible(false);
        setStatus("No se pudo acceder a la cámara");
      });
  }, []);

  /* 2. Capturar imagen, enviarla al backend y decidir acceso */
  const verificar = async () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const blob = await new Promise((res) => canvas.toBlob(res, "image/jpeg"));

    const form = new FormData();
    form.append("file", blob, "rostro.jpg");

    const r = await fetch("/api/biometria/verificar", {
      method: "POST",
      body: form,
    });
    const { acceso } = await r.json();

    if (acceso) {
      setStatus("✅ Acceso concedido");
      // Redirecciona a donde sea necesario
      // window.location.href = '/home'
    } else {
      setStatus("❌ No existe registro biométrico, redirigiendo…");
      // A página de registro biométrico
      setTimeout(() => (window.location.href = "/biometria/registro"), 1500);
    }
  };
  return (
    <div className="min-h-screen bg-[#0e1624] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
        Verificación biométrica
      </h1>
      <p className="text-sm text-gray-400 mb-6 text-center">{status}</p>

      {camaraDisponible ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full max-w-xs h-64 object-cover rounded-md shadow-lg aspect-video bg-black border border-gray-700"
        />
      ) : (
        <div className="w-full max-w-sm aspect-video bg-black rounded-md shadow-lg border border-gray-700 flex items-center justify-center text-white">
          <p className="text-center px-4">Cámara no disponible</p>
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={verificar}
          disabled={!camaraDisponible}
          className={`px-4 py-2 rounded text-white transition ${
            status.includes("No se pudo acceder")
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          Verificar
        </button>
        <Link href="/perfil">
          <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}
