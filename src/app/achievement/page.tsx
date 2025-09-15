import AchievementsClient from "./AchievementsClient";

type AchievementItem = {
  title: string;
  note?: string;
  country: string;
  category: string[]; // ← ここを配列に変更
};


async function fetchAchievement(): Promise<AchievementItem[]> {
  const res = await fetch("https://armaer-football.microcms.io/api/v1/achievement", {
    headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
    cache: "no-store", // 常に最新取得
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch achievements: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data.contents as AchievementItem[];
}

export default async function AchievementsPage() {
  const items = await fetchAchievement();

  return <AchievementsClient items={items} />;
}
