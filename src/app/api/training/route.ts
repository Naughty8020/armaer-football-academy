import { NextResponse } from "next/server";
import { fetchData } from "@/lib/fetchData";
import { TrainingItem } from "@/lib/training"; // ← 型も training 用に変える

export async function GET() {
  try {
    const trainings: TrainingItem[] = await fetchData<TrainingItem>("training");
    return NextResponse.json(trainings);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "トレーニングの取得に失敗しました" },
      { status: 500 }
    );
  }
}
