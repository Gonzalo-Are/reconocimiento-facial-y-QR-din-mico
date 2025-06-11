import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { extraerEmbeddings, distancia } from '@/lib/biometria'

export async function POST(req) {
  const { userId } = auth()
  const form = await req.formData()
  const file = form.get('file')
  const bytes = Buffer.from(await file.arrayBuffer())

  const embedding = await extraerEmbeddings(bytes)
  const registro  = await prisma.faceData.findUnique({ where: { userId } })

  if (!registro) {
    return NextResponse.json({ acceso: false })
  }

  const d = distancia(embedding, registro.embedding)
  return NextResponse.json({ acceso: d < 0.5 })
}
