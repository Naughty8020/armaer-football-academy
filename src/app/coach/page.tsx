// app/member/page.tsx など

import Image from "next/image";


import CoachListClient from "./CoachListClient";
import type { Member } from "@/lib/typs";

async function fetchCoaches(): Promise<Member[] | null> {
  try {
    const res = await fetch("https://armaer-football.microcms.io/api/v1/coach", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store", // 常に最新データ取得
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.contents as Member[];
  } catch (error) {
    console.error("Failed to fetch coaches:", error);
    return null;
  }
}

export default async function CoachPage() {
  const coaches = await fetchCoaches();

  if (!coaches) {
    return <p className="text-center text-red-500">コーチ情報の取得に失敗しました。</p>;
  }

  return <CoachListClient coaches={coaches} />;
}
