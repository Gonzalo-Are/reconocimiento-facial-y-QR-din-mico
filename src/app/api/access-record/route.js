import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      userId,
      status,
      confidence,
      method = "FACIAL",
    } = await request.json();

    if (!userId || !status) {
      return NextResponse.json(
        { error: "userId y status son requeridos" },
        { status: 400 }
      );
    }

    const accessRecord = await prisma.accessRecord.create({
      data: {
        userId,
        status,
        confidence,
        method,
      },
    });

    return NextResponse.json({ success: true, record: accessRecord });
  } catch (error) {
    console.error("Error al guardar registro de acceso:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
