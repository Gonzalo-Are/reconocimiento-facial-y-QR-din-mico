import { NextResponse } from 'next/server';
import axios from 'axios';

const FACE_API_KEY = process.env.AZURE_FACE_KEY;
const FACE_API_ENDPOINT = process.env.AZURE_FACE_ENDPOINT;

export async function POST(req) {
  try {
    const { perfilUrl, imagenCamaraBase64 } = await req.json();

    console.log('📸 URL perfil recibida:', perfilUrl);
    console.log('📸 Imagen de cámara recibida (base64):', imagenCamaraBase64?.substring(0, 100));

    if (!perfilUrl || !imagenCamaraBase64) {
      throw new Error('Faltan datos necesarios para la verificación.');
    }

    let faceId1;
    try {
      const perfilResponse = await axios.post(
        `${FACE_API_ENDPOINT}/detect?returnFaceId=true`,
        { url: perfilUrl },
        {
          headers: {
            'Ocp-Apim-Subscription-Key': FACE_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );
      faceId1 = perfilResponse.data[0]?.faceId;
      console.log('🧠 faceId1 (perfil):', faceId1);
      if (!faceId1) throw new Error();
    } catch (err) {
      console.error('❌ Error detectando rostro en perfil:', err.response?.data || err.message);
      return NextResponse.json({ error: 'No se detectó rostro en la imagen de perfil.' }, { status: 400 });
    }

    let faceId2;
    try {
      const camaraBuffer = Buffer.from(
        imagenCamaraBase64.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      );

      const camaraResponse = await axios.post(
        `${FACE_API_ENDPOINT}/detect?returnFaceId=true`,
        camaraBuffer,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': FACE_API_KEY,
            'Content-Type': 'application/octet-stream',
          },
        }
      );

      faceId2 = camaraResponse.data[0]?.faceId;
      console.log('🧠 faceId2 (cámara):', faceId2);
      if (!faceId2) throw new Error();
    } catch (err) {
      console.error('❌ Error detectando rostro en cámara:', err.response?.data || err.message);
      return NextResponse.json({ error: 'No se detectó rostro en la imagen de cámara.' }, { status: 400 });
    }

    try {
      const verifyResponse = await axios.post(
        `${FACE_API_ENDPOINT}/verify`,
        { faceId1, faceId2 },
        {
          headers: {
            'Ocp-Apim-Subscription-Key': FACE_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      const result = verifyResponse.data;
      console.log('✅ Resultado verificación:', result);
      return NextResponse.json(result);
    } catch (err) {
      console.error('❌ Error en comparación facial:', err.response?.data || err.message);
      return NextResponse.json({ error: 'Error al verificar coincidencia entre rostros.' }, { status: 500 });
    }

  } catch (error) {
    console.error("❌ Error general en verificación:", error.message);
    return NextResponse.json({ error: error.message || "Error interno" }, { status: 500 });
  }
}
