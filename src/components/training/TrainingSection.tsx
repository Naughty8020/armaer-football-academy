// pages/TrainingAndPricing.tsx
import TrainingOverview from "@/components/training/TrainingOverview";
import TrainingList from "@/components/training/TrainingList";
import Pricing from "@/components/training/Pricing";
import { fetchData } from "@/lib/fetchData";
import { TrainingItem } from "@/lib/training";

export default async function TrainingSection() {
  const classes: TrainingItem[] = await fetchData<TrainingItem>("training");

  return (
    <>
      <TrainingOverview />
      <TrainingList classes={classes} />
      <Pricing />
    </>
  );
}
