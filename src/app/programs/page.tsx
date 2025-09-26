// app/programs/page.tsx
import ProgramClient from "./ProgramClient";
import type { ProgramsItem } from "@/lib/programs";

async function fetchPrograms(): Promise<ProgramsItem[] | null> {
  try {
    const res = await fetch(
      "https://armaer-football.microcms.io/api/v1/programs",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.contents as ProgramsItem[];
  } catch {
    return null;
  }
}

export default async function Page() {
  const programs = await fetchPrograms();
  if (!programs) {
    return (
      <p className="text-center text-red-500">
        プログラム情報の取得に失敗しました。
      </p>
    );
  }
  return <ProgramClient programs={programs} />;
}
