import Header from "@/components/header/Header";
import type { ProgramsItem } from "@/lib/programs";

async function fetchProgram(): Promise<ProgramsItem[] | null> {
  try {
    const res = await fetch("https://armaer-football.microcms.io/api/v1/programs", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store", // 常に最新データ取得
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.contents as ProgramsItem[];
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    return null;
  }
}

export default async function HeaderPage() {
  const programs = await fetchProgram();

  if (!programs) {
    return <p className="text-center text-red-500">プログラム情報の取得に失敗しました。</p>;
  }

  return <Header programs={programs} />;
}
