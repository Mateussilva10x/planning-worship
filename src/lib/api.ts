// src/lib/api.ts
export async function getSchedules() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Ajuste conforme ambiente
  const res = await fetch(`${baseUrl}/api/schedules`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Erro ao buscar os agendamentos");
  }

  return res.json();
}
