"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as any,
    },
  },
};

export default function TrainingOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="max-w-5xl mx-auto px-4 py-12 space-y-6 text-black"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h1 variants={item} className="text-xl sm:text-2xl font-bold mb-4">
          TRAINING・PRICE
        </motion.h1>

        <motion.h2 variants={item} className="text-lg sm:text-xl font-semibold mb-4">
          トレーニング概要
        </motion.h2>

        <motion.p variants={item}>
          現レアルマドリード女子トップチームコーチ
          ホセララ氏考案のメソッドによるトレーニングの実施
        </motion.p>

       

        <motion.p variants={item}>
          サッカー選手の基盤となる力は大きく４つあります。それは、{" "}
          <span className="font-bold">技術</span> /{" "}
          <span className="font-bold">フィジカル</span> /{" "}
          <span className="font-bold">戦術理解</span> /{" "}
          <span className="font-bold">メンタル</span> です。
        </motion.p>

        <motion.p variants={item}>
          この4つ無くして、サッカー選手としての成功はありません。
        </motion.p>

        <motion.p variants={item}>
          これらをトレーニングの中で行い、選手の成長にフォーカスしたトレーニングを構築していきます。
        </motion.p>

        <motion.p variants={item}>
          この育成年代で必ず押さえておきたい、{" "}
          <span className="font-bold">intelligence（賢さ）</span> /{" "}
          <span className="font-bold">technic（技術）</span> /{" "}
          <span className="font-bold">mental（精神性）</span>。
        </motion.p>

        <motion.p variants={item}>
          世界で活躍するトッププレーヤーが必ず持ち合わせている力は育成年代にも必要不可欠です。
        </motion.p>

        <motion.p variants={item}>
          サッカー選手として第一線で活躍できる選手の育成。  
          そして、子どもの無限の可能性を引き出す指導をご体感下さい。
        </motion.p>
      </motion.div>
    </section>
  );
}
