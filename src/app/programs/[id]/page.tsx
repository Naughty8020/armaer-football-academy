// src/app/program/[id]/page.tsx
import { notFound } from "next/navigation";

interface Program {
  id: string;
  title: string;
  contents?: string;
}

async function fetchProgram(id: string): Promise<Program | null> {
  const res = await fetch(
    `https://armaer-football.microcms.io/api/v1/programs/${id}`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function ProgramPage(props: {
  params: Promise<{ id: string }>; // ← Promise で受け取る
}) {
  const { id } = await props.params; // ← await が必須！

  const program = await fetchProgram(id);
  if (!program) notFound();

  return (
    <div>
      <h1>{program.title}</h1>
      {program.contents && <p>{program.contents}</p>}
    </div>
  );
}
