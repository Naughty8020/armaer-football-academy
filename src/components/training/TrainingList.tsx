"use client";
import { useState } from "react";
import { TrainingItem } from "@/lib/training";

interface TrainingListProps {
  classes: TrainingItem[];
}

export default function TrainingList({ classes }: TrainingListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // 複数キーワードでどれか一つでもマッチ
  const filteredClasses = classes.filter((c) => {
    if (!searchQuery) return true; // 空なら全部表示

    const queries = searchQuery.toLowerCase().split(" ").filter(Boolean);

    return queries.some((q) =>
      c.school?.toLowerCase().includes(q) ||
      c.target?.toLowerCase().includes(q) ||
      c.day?.toLowerCase().includes(q) ||
      c.title?.toLowerCase().includes(q) ||
      c.time?.toLowerCase().includes(q)
    );
  });

  function Pill({ children }: { children: React.ReactNode }) {
    return (
      <span className="inline-flex items-center rounded-2xl px-3 py-1 text-xs font-medium bg-gray-300 text-black">
        {children}
      </span>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      {/* 検索バー */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="学校・学年・曜日・タイトル・時間で検索（複数ワード可）"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
        />
      </div>

      {/* クラス一覧 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredClasses.map((c) => (
          <article
            key={c.id}
            className="rounded-2xl bg-gray-100 p-5 shadow-sm ring-1 ring-gray-300"
          >
            <div className="flex items-center justify-between gap-3">
              <Pill>{c.day}</Pill>
              {c.location && (
                <span className="text-xs text-gray-700">{c.location}</span>
              )}
            </div>
            <h3 className="mt-2 text-lg font-semibold leading-snug">{c.title}</h3>
            <p className="mt-1 text-sm text-gray-700">時間：{c.time}</p>
            <p className="mt-1 text-sm text-gray-700">対象：{c.target}</p>
          
          </article>
        ))}

        {filteredClasses.length === 0 && (
          <p className="text-gray-900 text-center col-span-full">
            該当するクラスはありません
          </p>
        )}
      </div>
    </section>
  );
}
