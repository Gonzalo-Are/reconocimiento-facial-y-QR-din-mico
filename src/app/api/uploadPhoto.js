import { uploadToAzureBlob } from '@/lib/azureStorage';
import multer from 'multer';
import nextConnect from 'next-connect';

// Configura multer para recibir archivos
const upload = multer();

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Error subiendo imagen: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Método ${req.method} no permitido` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
  try {
    const file = req.file;
    const imageUrl = await uploadToAzureBlob(file);

    res.status(200).json({ url: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error subiendo imagen a Azure' });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Importante: Desactivar el bodyParser porque multer lo maneja
  },
};
