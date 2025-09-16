"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { TrainingItem } from "@/lib/training";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion"; // ← これを追加
interface TrainingListProps {
  classes: TrainingItem[];
}

// アニメーションの定義
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl px-3 py-1 text-xs font-medium bg-gray-300 text-black">
      {children}
    </span>
  );
}

export default function TrainingList({ classes }: TrainingListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredClasses = classes.filter((c) => {
    if (!searchQuery) return true;
    const queries = searchQuery.toLowerCase().split(" ").filter(Boolean);
    return queries.some((q) =>
      c.school?.toLowerCase().includes(q) ||
      c.target?.toLowerCase().includes(q) ||
      c.day?.toLowerCase().includes(q) ||
      c.title?.toLowerCase().includes(q) ||
      c.time?.toLowerCase().includes(q)
    );
  });

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-4 pb-20">
      {/* 検索バーのアニメーション追加 */}
      <motion.div
        variants={item}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="mb-6"
      >
        <input
          type="text"
          placeholder="学校・学年・曜日・タイトル・時間で検索（複数ワード可）"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 text-gray-950 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
        />
      </motion.div>

      {/* リスト全体にアニメーション */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {filteredClasses.map((c) => (
          <motion.div key={c.id} variants={item}>
            <Link href={`/training/${c.id}`} className="group block">
              <article
                tabIndex={0}
                className="rounded-2xl bg-gray-100 p-5 shadow-lg ring-1 ring-gray-300
                           transition-transform transform hover:scale-105 hover:ring-pink-400 hover:shadow-xl
                           focus:scale-105 focus:ring-pink-400 focus:shadow-xl
                           active:scale-105 active:shadow-xl cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3">
                  <Pill>{c.day}</Pill>
                  {c.location && (
                    <span className="text-xs text-gray-700">{c.title}</span>
                  )}
                </div>
                <h3 className="mt-2 text-gray-900 text-lg font-semibold leading-snug transition-colors">
                  {c.location}
                </h3>
                <p className="mt-1 text-sm text-gray-700">時間：{c.time}</p>
                <p className="mt-1 text-sm text-gray-700">対象：{c.target}</p>
                <p className="mt-1 text-sm text-blue-400">詳しくはクリック</p>
              </article>
            </Link>
          </motion.div>
        ))}

        {filteredClasses.length === 0 && (
          <motion.p
            variants={item}
            className="text-gray-900 text-center col-span-full"
          >
            該当するクラスはありません
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
