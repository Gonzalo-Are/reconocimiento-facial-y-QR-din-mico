import { NextResponse } from 'next/server';
import { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions, SASProtocol, StorageSharedKeyCredential } from "@azure/storage-blob";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const blobName = searchParams.get('blobName');

  if (!blobName) {
    return NextResponse.json({ error: "Falta el nombre del blob" }, { status: 400 });
  }

  const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
  const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || "fotos-usuarios";

  if (!accountName || !accountKey) {
    return NextResponse.json({ error: "Faltan configuraciones de Azure Storage" }, { status: 500 });
  }

  const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
  const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlockBlobClient(blobName);

  const expiresOn = new Date(new Date().valueOf() + 3600 * 1000);
  const sasToken = generateBlobSASQueryParameters(
    {
      containerName,
      blobName,
      expiresOn,
      permissions: BlobSASPermissions.parse("cw"),
      protocol: SASProtocol.Https,
    },
    sharedKeyCredential
  ).toString();

  const uploadUrl = `${blobClient.url}?${sasToken}`;

  return NextResponse.json({ uploadUrl });
}
