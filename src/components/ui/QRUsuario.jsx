'use client'
import { useUser } from '@clerk/nextjs'
import { QRCodeCanvas } from 'qrcode.react'
import { useEffect, useState } from 'react'

export default function QRUsuario() {
  const { user } = useUser()
  const [token, setToken] = useState('')

  const fetchToken = async () => {
    if (!user) return
    const res = await fetch(`/api/generarQR?userId=${user.id}`)
    const { token } = await res.json()
    setToken(token)
  }

  useEffect(() => {
    fetchToken()                    
    const iv = setInterval(fetchToken, 60_000) 
    return () => clearInterval(iv)
  }, [user])

  if (!user) return <p>Cargando usuario…</p>

  return (
    <div className="p-4 border rounded">
      <h3 className="mb-2 font-semibold">Tu código QR (válido 1 min)</h3>
      {token
        ? <QRCodeCanvas value={token} />
        : <p>Generando QR…</p>
      }
    </div>
  )
}
