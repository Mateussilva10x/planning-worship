import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const schedules = await prisma.schedule.findMany({
    include: {
      group: true,
    },
    orderBy: {
      date: "asc",
    },
  });

  return NextResponse.json(schedules);
}
