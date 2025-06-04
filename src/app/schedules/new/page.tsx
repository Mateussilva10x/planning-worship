"use client";

import MainLayout from "@/components/layout/MainLayout";
import { useEffect, useState } from "react";

export default function ScheduleForm() {
  const [groups, setGroups] = useState([]);
  const [date, setDate] = useState("");
  const [groupId, setGroupId] = useState("");

  useEffect(() => {
    async function fetchGroups() {
      const res = await fetch("/api/groups");
      const data = await res.json();
      setGroups(data);
    }

    fetchGroups();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/schedules", {
      method: "POST",
      body: JSON.stringify({ date, groupId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Agendamento criado com sucesso!");
      setDate("");
      setGroupId("");
    } else {
      const { error } = await res.json();
      alert(`Erro: ${error}`);
    }
  }

  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <select
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
          required
          className="border p-2 rounded"
        >
          <option value="">Selecione um grupo</option>
          {groups.map((group: { id: string; name: string }) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Criar agendamento
        </button>
      </form>
    </MainLayout>
  );
}
