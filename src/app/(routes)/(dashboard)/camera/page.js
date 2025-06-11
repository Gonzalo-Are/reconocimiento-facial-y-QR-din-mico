// src/app/(routes)/camera/page.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function CameraPage() {
  const { user } = useUser()                // ID del usuario logueado
  const videoRef = useRef(null)
  const [status, setStatus] = useState('Conectando con la cámara…')

  /* 1. Pedir acceso a la cámara al montar el componente */
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setStatus('Apunta tu rostro y pulsa “Verificar”')
      })
      .catch(() => setStatus('No se pudo acceder a la cámara'))
  }, [])

  /* 2. Capturar imagen, enviarla al backend y decidir acceso */
  const verificar = async () => {
    const canvas = document.createElement('canvas')
    canvas.width  = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0)
    const blob = await new Promise(res => canvas.toBlob(res, 'image/jpeg'))

    const form = new FormData()
    form.append('file', blob, 'rostro.jpg')

    const r = await fetch('/api/biometria/verificar', { method: 'POST', body: form })
    const { acceso } = await r.json()

    if (acceso) {
      setStatus('✅ Acceso concedido')
      // Redirecciona a donde sea necesario
      // window.location.href = '/home'
    } else {
      setStatus('❌ No existe registro biométrico, redirigiendo…')
      // A página de registro biométrico
      setTimeout(() => window.location.href = '/biometria/registro', 1500)
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Verificación biométrica</h1>

      <p className="mb-4">{status}</p>

      <video ref={videoRef} className="w-full max-w-md rounded bg-black" />

      <div className="mt-4 flex gap-4">
        <button
          onClick={verificar}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Verificar
        </button>

        <Link href="/dashboard" className="px-4 py-2 bg-gray-200 rounded">
          Volver
        </Link>
      </div>
    </main>
  )
}
