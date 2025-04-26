'use client'

import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from './button'

export default function ProfilePhotoModal({ onComplete }) {
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Crear preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simplemente llamar a onComplete sin hacer validaciones ni cargar a Clerk
    if (onComplete) {
      onComplete()
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
              disabled={!preview}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => 
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => {
                      console.log("Undo action clicked")
                    },
                  },
                })
              }
            >
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}