// pages/TrainingAndPricing.tsx
import TrainingOverview from "@/components/training/TrainingOverview";
import TrainingList from "@/components/training/TrainingList";
import Pricing from "@/components/training/Pricing";
import { TrainingItem } from "@/lib/training";

async function fetchTraining(): Promise<TrainingItem[] | null> {
  try {
    const res = await fetch("https://armaer-football.microcms.io/api/v1/training", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store", 
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.contents as TrainingItem[];
  } catch (error) {
   
    return null;
  }
}

export default async function TrainingSection() {
  const classes = await fetchTraining();

  if (!classes) {
    return <p className="text-center text-red-500">トレーニング情報の取得に失敗しました。</p>;
  }

  return (
    <>
      <TrainingOverview />
      <TrainingList classes={classes} />
      <Pricing />
    </>
  );
}
