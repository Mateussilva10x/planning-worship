import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const schedules = await prisma.schedule.findMany({
      include: {
        group: true,
        participations: {
          include: {
            user: true,
          },
        },
      },
    });

    return NextResponse.json(schedules);
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, date, groupId } = body;

    if (!title || !date || !groupId) {
      return NextResponse.json(
        { error: "Data e grupo são obrigatórios" },
        { status: 400 }
      );
    }

    const newSchedule = await prisma.schedule.create({
      data: {
        date: new Date(date),
        group: {
          connect: {
            id: groupId,
          },
        },
      },
    });

    return NextResponse.json(newSchedule, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    return NextResponse.json(
      { error: "Erro ao criar agendamento" },
      { status: 500 }
    );
  }
}
