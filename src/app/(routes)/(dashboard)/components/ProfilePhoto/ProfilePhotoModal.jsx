'use client'

import { Button } from '@/components/ui/button'
import { BlockBlobClient } from '@azure/storage-blob'
import { useUser } from '@clerk/nextjs'
import { useRef, useState } from 'react'

export default function ProfilePhotoModal({ onComplete }) {
  const { user } = useUser()
  const [preview, setPreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [file, setFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    setFile(selectedFile)
    
    // Crear preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result)
    }
    reader.readAsDataURL(selectedFile)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!file || !user) return
    
    try {
      setIsUploading(true)
      
      // URL base del contenedor en Azure Blob Storage (sin el SAS token)
      const containerBaseUrl = "https://facesstore123.blob.core.windows.net/faces"
      
      // SAS token (sin el '?' inicial porque lo agregaremos después)
      const sasToken = "sp=racw&st=2025-04-26T05:13:31Z&se=2025-05-03T13:13:31Z&spr=https&sv=2024-11-04&sr=c&sig=hM3uG9%2BJAPL0Bjk3r5HEXD1rWmIBTYugZpTS1lxuzz8%3D"
      
      // Nombre del archivo basado en el userId
      const blobName = `${user.id}.jpg`
      
      // Crear URL completa para el blob específico (para guardar en Clerk)
      const blobUrl = `${containerBaseUrl}/${blobName}`
      
      // Crear la URL del blob con el SAS token para la carga
      const blobUrlWithSas = `${containerBaseUrl}/${blobName}?${sasToken}`
      
      // Crear cliente para el blob usando la URL completa
      const blockBlobClient = new BlockBlobClient(blobUrlWithSas)
      
      // Subir el archivo con los headers correctos
      await blockBlobClient.uploadData(
        await file.arrayBuffer(),
        {
          blobHTTPHeaders: { 
blobContentType: file.type 
}
        }
      )
      
      // Guardar la URL en los metadatos públicos del usuario
      await user.update({
        publicMetadata: {
          ...user.publicMetadata,
          faceBlobUrl: blobUrl
        }
      })
      
      // Llamar al callback de éxito
      if (onComplete) {
        onComplete(blobUrl)
      }
    } catch (error) {
      console.error('Error al subir la imagen a Azure:', error)
      alert('Hubo un error a// l subir la imagen. Por favor, intenta de nuevo.')
    } finally {
     
      setIsuUlploading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sube una foto de tu rostro</h2>
        <p className="text-gray-600 mb-6">
          Para continuar, necesitamos una foto clara de tu rostro. Esta foto será utilizada para el reconocimiento facial.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
              id="profile-photo-input"
            />
            
            <div 
              className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors border-gray-300"
              onClick={() => fileInputRef.current.click()}
            >
              {preview ? (
                <div className="flex justify-center">
                  <img 
                    src={preview} 
                    alt="Vista previa" 
                    className="h-48 object-cover rounded"
                  />
                </div>
              ) : (
                <div className="py-8">
                  <p className="text-gray-500">Haz clic para seleccionar una foto</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!preview || isUploading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isUploading ? 'Subiendo...' : 'Continuar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}