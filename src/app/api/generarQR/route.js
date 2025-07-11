// // src/app/api/ganerarQR/route.js
// import { NextResponse } from 'next/server'
// import jwt from 'jsonwebtoken'

// export async function GET(request) {
//   const { searchParams } = new URL(request.url)
//   const userId = searchParams.get('userId')

//   if (!userId) {
//     return NextResponse.json({ error: 'Falta userId' }, { status: 400 })
//   }

//   // Genera un token que expira en 1 minuto
//   const token = jwt.sign(
//     { userId },
//     process.env.JWT_SECRET,
//     { expiresIn: '1m' }
//   )

//   return NextResponse.json({ token })
// }
//