import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Key } from "react";
import { getSchedules } from "@/lib/api";

export default async function SchedulePage() {
  const schedules = await getSchedules();
  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Schedules</h1>
          <Button size="sm">+ Nova Escala</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedules.map(
            (schedule: {
              id: Key | null | undefined;
              group: { name: string };
              date: string | number | Date;
            }) => (
              <Card key={schedule.id}>
                <CardHeader>
                  <CardTitle>
                    {schedule.group?.name || "Grupo não identificado"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    📅 Date: {new Date(schedule.date).toLocaleDateString()}
                  </p>
                  <div className="pt-2">
                    <Link href={`/schedules/${schedule.id}`}>
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
}
