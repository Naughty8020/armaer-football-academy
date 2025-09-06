import { NextResponse } from "next/server";
import { fetchData } from "@/lib/fetchData";
import { ProgramsItem } from "@/lib/programs";

export async function GET() {
  try {
    const programs: ProgramsItem[] = await fetchData<ProgramsItem>("programs");
    return NextResponse.json(programs);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "プログラムの取得に失敗しました" }, { status: 500 });
  }
}