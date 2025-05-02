'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import ProfilePhotoModal from './ProfilePhotoModal'

export default function ProfilePhotoCheck({ children }) {
  const { isLoaded, user } = useUser()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Simplemente mostrar el modal al iniciar sesión por primera vez
    // Sin validaciones adicionales
    if (isLoaded && user) {
      // Podemos usar localStorage para verificar si ya mostró el modal
      const hasShownPhotoModal = localStorage.getItem('hasShownPhotoModal')
      
      if (!hasShownPhotoModal) {
        setShowModal(true)
      }
    }
  }, [isLoaded, user])

  const handlePhotoUploaded = () => {
    // Guardar en localStorage que ya se mostró el modal
    localStorage.setItem('hasShownPhotoModal', 'true')
    setShowModal(false)
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