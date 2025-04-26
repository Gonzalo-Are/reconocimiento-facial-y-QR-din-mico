// // src/app/api/ganerarQR/route.js
// import jwt from 'jsonwebtoken'
// import { NextResponse } from 'next/server'

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
//   )

//   return NextResponse.json({ token })
// }
