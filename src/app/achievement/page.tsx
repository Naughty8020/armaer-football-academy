"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Head from "next/head";

// Next.js クライアントコンポーネントとして動作する ACHIEVEMENT ページ

type Item = {
  title: string;
  note?: string;
  country: string;
  category: "輩出" | "帯同";
};

const dispatched: Item[] = [
  { title: "FCバルセロナ エリートプログラム 遠征選手", country: "スペイン", category: "輩出" },
  { title: "マジョルカ TR エクスペリエンス 遠征参加選手", country: "スペイン", category: "輩出" },
  { title: "JAMON CUP 日本選抜選手", country: "スペイン", category: "輩出" },
  { title: "Iscar Cup 日本選抜選手", country: "スペイン", category: "輩出" },
  { title: "DONOSTI CUP 日本選抜選手", country: "スペイン", category: "輩出" },
  { title: "MIC 日本選抜選手", country: "スペイン", category: "輩出" },
  { title: "Costa de la Luz Cup 日本選抜選手", country: "スペイン", category: "輩出" },
  { title: "Celta Stage", country: "スペイン", category: "輩出" },
];

const accompanied: Item[] = [
  { title: "DONOSTI CUP", country: "スペイン", category: "帯同" },
  { title: "ELITE NEON CUP", country: "ギリシャ", category: "帯同" },
  { title: "Iscar Cup", country: "スペイン", category: "帯同" },
  { title: "Real Madrid World Challenge", country: "スペイン", category: "帯同" },
  { title: "LaLiga Camp 2022", country: "スペイン・日本", category: "帯同" },
  { title: "Celta Camp Japan 2023, 2024", country: "日本", category: "帯同" },
  { title: "Real Sociedad Camp Japan 2023", country: "日本", category: "帯同" },
  { title: "JAMON CUP", country: "スペイン", category: "帯同" },
  { title: "MIC7", country: "スペイン", category: "帯同" },
  { title: "MIC", country: "スペイン", category: "帯同" },
  { title: "Costa de la Luz Cup", country: "スペイン", category: "帯同" },
];

const all = [...dispatched, ...accompanied];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl px-3 py-1 text-xs font-medium bg-gray-300 text-black">
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-gray-100 p-5 shadow-sm ring-1 ring-gray-200 text-black">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-gray-700">{label}</div>
    </div>
  );
}

export default function AchievementsPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"輩出" | "帯同" | "すべて">("すべて");

  const filtered = useMemo(() => {
    const base = tab === "すべて" ? all : tab === "輩出" ? dispatched : accompanied;
    if (!query) return base;
    const q = query.toLowerCase();
    return base.filter((i) => `${i.title} ${i.country}`.toLowerCase().includes(q));
  }, [query, tab]);

  const countries = useMemo(() => {
    const set = new Set(all.map((i) => i.country));
    return Array.from(set);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>ACHIEVEMENT | 実績</title>
        <meta
          name="description"
          content="選手輩出実績と帯同実績の一覧。私たちは日本から世界へ、選手の未来の選択肢を広げます。"
        />
      </Head>

      <section className="relative mx-auto max-w-6xl px-4 pb-8 pt-14 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Pill>ACHIEVEMENT</Pill>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-black">
            選手輩出実績・帯同実績
          </h1>
          <p className="mt-4 text-gray-800">
            私たちはこれらで学んだことに満足することはありません。<br/>もっと多くのチームやリーグ、国から学び続け、
            日本から世界へと視野を広げ、<br/>選手の未来の選択肢を増やします。
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat label="輩出実績" value={dispatched.length} />
          <Stat label="帯同実績" value={accompanied.length} />
          <Stat label="実績に含まれる国" value={countries.length} />
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-between gap-3 sm:flex-row">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-gray-100 p-1 shadow-sm ring-1 ring-gray-300">
            {(["すべて", "輩出", "帯同"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${
                  tab === k ? "bg-gray-900 text-white" : "text-black hover:bg-gray-300"
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          <label className="group relative w-full sm:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="大会名や国名で検索…"
              className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none placeholder:text-gray-500 focus:border-gray-400 text-black"
            />
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((item, idx) => (
            <motion.article
              key={item.title + idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl bg-gray-100 p-5 shadow-sm ring-1 ring-gray-300 text-black"
            >
              <div className="flex items-center justify-between gap-3">
                <Pill>{item.category}</Pill>
                <span className="text-xs text-gray-700">{item.country}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-black">{item.title}</h3>
              {item.note && <p className="mt-1 text-sm text-gray-700">{item.note}</p>}
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-12 w-full max-w-7xl rounded-2xl bg-gray-100 p-6 text-black">
          <h4 className="text-lg font-semibold">さらに学び、さらに前へ</h4>
          <p className="mt-2 text-sm">
            私たちは現状に満足せず<br/>より多くの国・リーグ・文化から学び続けます。選手それぞれの可能性を最大化し、
            世界で戦える力を育みます。
          </p>
        </div>
      </section>
    </div>

  );
}
