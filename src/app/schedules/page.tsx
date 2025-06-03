import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MainLayout from "@/components/layout/MainLayout"

const mockSchedules = [
  {
    id: "1",
    name: "Domingo de Louvor",
    date: "2025-06-09",
    team: "Equipe A",
  },
  {
    id: "2",
    name: "Culto de Quarta",
    date: "2025-06-12",
    team: "Equipe B",
  },
]

export default function SchedulePage() {
  return (
    <MainLayout>
      <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Schedules</h1>
        <Button size="sm">+ Nova Escala</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSchedules.map((schedule) => (
          <Card key={schedule.id}>
            <CardHeader>
              <CardTitle>{schedule.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">📅 Date: {schedule.date}</p>
              <p className="text-sm">👥 Team: {schedule.team}</p>
              <div className="pt-2">
                <Link href={`/schedules/${schedule.id}`}>
                  <Button variant="outline" size="sm">Ver detalhes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </MainLayout>
  )
}
