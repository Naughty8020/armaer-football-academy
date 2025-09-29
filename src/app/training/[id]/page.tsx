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

interface ProgramPageProps {
  params: Promise<{ id: string }>;
}


function extractMapUrl(html: string): string {
  const match = html.match(/href="([^"]+)"/);
  return match ? match[1] : "#";
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { id } = await params;
  const program = await fetchProgram(id);

  if (!program) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-black space-y-6">
      <h1 className="mt-20 text-3xl font-bold">{program.location}</h1>

      {/* 画像表示 */}
      {program.img && (
        <img
          src={program.img.url}
          alt={program.title}
          className="w-full h-auto rounded-md"
        />
      )}

      <div className="space-y-2">
      <h2 className="mt-4 text-2xl font-bold">{program.subtitle}</h2>



<p className="mb-7 ">{program.description}</p>
<div className="mb-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl w-full">
  <p><strong>曜日:</strong> {program.day}</p>
  <p><strong>時間:</strong> {program.time}</p>
  <p><strong>場所:</strong> {program.title}</p>
  <p><strong>対象:</strong> {program.target}</p>
</div>




      </div>

 
      {program.map && (
        <div className="mt-4">
          <a
            href={extractMapUrl(program.map)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-[rgb(241,84,84)] hover:bg-[rgb(164,88,88)] text-white font-semibold rounded transition"
          >
            Google Mapで見る
          </a>
        </div>
      )}
    </div>
  );
}
