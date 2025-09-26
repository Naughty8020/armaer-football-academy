import { notFound } from "next/navigation";
import { ProgramsItem } from "@/lib/programs";
import ProgramClient from "./ProgramClient";

async function fetchProgram(id: string): Promise<ProgramsItem | null> {
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
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params; // ← await で取り出す
  const program = await fetchProgram(id);

  if (!program) notFound();

  return <ProgramClient program={program} />;
}
