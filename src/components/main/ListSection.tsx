"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

export type CardItem = {
  id: string | number;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string; // 遷移先のパス
};

type Props = {
  items?: CardItem[];
  className?: string;
};

// アニメーション定義
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] },
  },
};

export default function ListSection({
  items = defaultItems,
  className = "",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`max-w-6xl mx-auto px-4 py-8 ${className}`}>
      <motion.h2
        variants={item}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-black text-2xl font-semibold mb-6 text-center"
        ref={ref}
      >
        armaerについて
      </motion.h2>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((itemData) => (
          <motion.article
            key={itemData.id}
            variants={item}
            className="bg-black rounded-2xl shadow-sm overflow-hidden flex flex-col"
          >
            <div className="relative w-full aspect-[16/9] bg-gray-900">
              <Image
                src={itemData.imageSrc}
                alt={itemData.imageAlt ?? itemData.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-lg font-medium mb-2">{itemData.title}</h3>
                <p className="text-sm text-gray-300">
                  ここに簡単な説明文が入ります。必要なら長さに合わせて改行されます。
                </p>
              </div>

              <div className="mt-4">
                {itemData.href ? (
                  <Link
                    href={itemData.href}
                    className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl border border-transparent shadow-sm text-sm font-medium transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 text-center bg-gray-700 hover:bg-gray-600"
                  >
                    詳細を見る
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl border border-transparent shadow-sm text-sm font-medium transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-700 hover:bg-gray-600"
                  >
                    詳細を見る
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

// デフォルトサンプルデータ
const defaultItems: CardItem[] = [
  {
    id: 1,
    title: "プログラム紹介",
    imageSrc: "/team.jpg",
    imageAlt: "プログラム",
    href: "/programs",
  },
  {
    id: 2,
    title: "トレーニングコース紹介",
    imageSrc: "/team2.jpeg",
    imageAlt: "サンプルBの説明",
    href: "/training",
  },
  {
    id: 3,
    title: "コーチ紹介",
    imageSrc: "/coaches.jpeg",
    imageAlt: "サンプルCの説明",
    href: "/coach",
  },
];
