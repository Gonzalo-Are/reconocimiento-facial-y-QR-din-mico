'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import ProfilePhotoModal from './ProfilePhotoModal'

export default function ProfilePhotoCheck({ children }) {
  const { isLoaded, user } = useUser()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Verificar si el usuario tiene la URL de la foto en los metadatos
    if (isLoaded && user) {
      const hasFacePhoto = user.publicMetadata?.faceBlobUrl
      
      if (!hasFacePhoto) {
        setShowModal(true)
      }
    }
  }, [isLoaded, user])

  const handlePhotoUploaded = (blobUrl) => {
    setShowModal(false)
    console.log('Foto subida exitosamente:', blobUrl)
  }

  if (!isLoaded) {
    return null // Esperar a que se cargue el usuario
  }

  return (
    <>
      {children}
      
      {showModal && (
        <ProfilePhotoModal onComplete={handlePhotoUploaded} />
      )}
    </>
  )
}