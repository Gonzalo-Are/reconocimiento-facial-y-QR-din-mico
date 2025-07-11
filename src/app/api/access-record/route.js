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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    let whereClause = {};
    if (userId) {
      whereClause.userId = userId;
    }

    const accessRecords = await prisma.accessRecord.findMany({
      where: whereClause,
      orderBy: {
        timestamp: "desc",
      },
    });

    return NextResponse.json({ success: true, records: accessRecords });
  } catch (error) {
    console.error("Error al obtener registros de acceso:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
