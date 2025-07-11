import { uploadImageToAzure } from "@/lib/azure";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId es requerido" },
        { status: 400 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { avatarUrl: true },
    });

    return NextResponse.json({
      avatarUrl: profile?.avatarUrl || null,
    });
  } catch (error) {
    console.error("[GET PROFILE ERROR]", error);
    return NextResponse.json(
      { error: "Error al obtener el perfil" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("avatar");
    const userId = formData.get("userId");

    // Basic validation
    if (!file || !userId) {
      return NextResponse.json(
        { error: "Faltan datos requeridos (avatar o userId)" },
        { status: 400 }
      );
    }

    // Extract file details
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = file.type;
    const extension = file.name.split(".").pop();
    const filename = `avatar-${userId}.${extension}`;

    // Upload image to Azure Blob Storage
    const url = await uploadImageToAzure(filename, buffer, contentType);

    // Update or create profile in database
    const profile = await prisma.profile.upsert({
      where: { userId },
      update: { avatarUrl: url },
      create: { userId, avatarUrl: url },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.error("[UPLOAD ERROR]", error);
    return NextResponse.json(
      { error: "Error al subir la imagen o guardar en base de datos" },
      { status: 500 }
    );
  }
}
