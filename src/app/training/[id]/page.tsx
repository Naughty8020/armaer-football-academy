// src/app/training/[id]/page.tsx
import { notFound } from "next/navigation";
import { TrainingItem } from "@/lib/training";

async function fetchTraining(id: string): Promise<TrainingItem | null> {
  const res = await fetch(
    `https://armaer-football.microcms.io/api/v1/training/${id}`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function TrainingDetailPage({
  params,
}: {
  params: { id: string }; // ✅ Promiseではなく普通のオブジェクト
}) {
  const { id } = params;
  const training = await fetchTraining(id);

  if (!training) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-black space-y-8">
      <h1 className="mt-20 text-2xl font-bold">{training.title}</h1>
      <p>曜日: {training.day}</p>
      <p>時間: {training.time}</p>
      <p>対象: {training.target}</p>
      {training.location && <p>場所: {training.location}</p>}
      {training.school && <p>スクール: {training.school}</p>}
    </div>
  );
}
