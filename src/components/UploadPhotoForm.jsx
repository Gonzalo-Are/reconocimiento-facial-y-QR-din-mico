"use client"
import { useState } from "react"

export default function UploadPhotoForm() {
  const [file, setFile]   = useState(null)
  const [status, setStatus] = useState("")

  function handleFileChange(e) {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
      setStatus("")
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!file) return setStatus("❗ Selecciona primero una imagen.")

    setStatus("🔄 Obteniendo URL…")
    const blobName = `user-${Date.now()}-${file.name}`
    const { uploadUrl } = await fetch(`/api/sas-upload?blobName=${blobName}`)
                              .then(r => r.json())

    setStatus("⏳ Subiendo…")
    const res2 = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob",
        "Content-Type": file.type || "application/octet-stream",
      },
      body: file,
    })
    if (!res2.ok) throw new Error(res2.statusText)

    setStatus("✅ Confirmando…")
    await fetch("/api/confirm-upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: uploadUrl.split("?")[0],
        name: blobName
      })
    })

    setStatus("🎉 ¡Foto subida!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm file:py-2 file:px-4 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Subir foto
      </button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  )
}
