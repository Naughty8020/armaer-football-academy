// src/app/program/[id]/page.tsx
import { notFound } from "next/navigation";
import { TrainingItem } from "@/lib/training";

async function fetchProgram(id: string): Promise<TrainingItem | null> {
  const res = await fetch(
    `https://armaer-football.microcms.io/api/v1/training/${id}`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store", // SSR で最新データ取得
    }
  );
  if (!res.ok) return null;
  return res.json();
}
interface ProgramPageProps {
    params: Promise<{ id: string }>;
  }
  
  export default async function ProgramPage({ params }: ProgramPageProps) {
    const { id } = await params; // ← await 必須
    const program = await fetchProgram(id);
  
    if (!program) notFound();
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-black space-y-6">
        <h1 className="mt-20 text-3xl font-bold">{program.title}</h1>
  
        <div className="space-y-2">
          <p><strong>曜日:</strong> {program.day}</p>
          <p><strong>時間:</strong> {program.time}</p>
          <p><strong>場所:</strong> {program.location}</p>
          <p><strong>対象:</strong> {program.target}</p>
   
        </div>
      </div>
    );
  }
  