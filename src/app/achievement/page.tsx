import AchievementsClient from "./AchievementsClient";

type AchievementItem = {
  title: string;
  note?: string;
  country: string;
  category: string[]; 
};


async function fetchAchievement(): Promise<AchievementItem[]> {
  const res = await fetch("https://armaer-football.microcms.io/api/v1/achievement?limit=100", {
    headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch achievements: ${res.status}`);
  }

  const data = await res.json();
  
  return data.contents as AchievementItem[];
}

export default async function AchievementsPage() {
  const items = await fetchAchievement();

  return <AchievementsClient items={items} />;
}
