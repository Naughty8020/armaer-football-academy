// src/app/program/[id]/page.tsx
import { notFound } from "next/navigation";
import { TrainingItem } from "@/lib/training";



async function fetchProgram(id: string): Promise<TrainingItem | null> {
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

export default async function ProgramPage({
    params,
  }: {
    params: { id: string }; // ✅ correct type
  }) {
    const { id } = params; // ✅ just destructure, no await
    const program = await fetchProgram(id);
  
    if (!program) notFound();
  
    console.log(program);
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-black space-y-8">
        <h1 className="mt-20 text-2xl font-bold">{program. title}</h1> {/* ⚠️ notice your typo: titile → title */}
        <p>曜日: {program.day}</p>
        <p>時間: {program.time}</p>
        <p>対象: {program.target}</p>
        <p>場所: {program.location}</p>
      </div>
    );
  }
  