import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const groups = await prisma.group.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return NextResponse.json(groups);
}
