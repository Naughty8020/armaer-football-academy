"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface LineSectionProps {
  bgColor?: string;     // 背景色クラス（例: "bg-black"）
  textColor?: string;   // テキスト色クラス（例: "text-white"）
  subColor?: string;  
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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

export default function LineSection({
  bgColor = "bg-gray-800",
  textColor = "text-white",
  subColor = "text-gray-200",
}: LineSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="contact"
      className={`${bgColor} py-24 sm:py-32`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={`max-w-4xl mx-auto px-6 lg:px-8 text-center ${textColor}`}
      >
        {/* タイトル */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          お問い合わせ
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`mt-4 text-lg ${subColor}`}
        >
          ジュニア・Jr.ユースへのお問い合わせは
          <br />
          公式LINEからお願いいたします。
        </motion.p>

        {/* ボタンエリア */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://line.me/R/ti/p/@204fbyia" // ジュニア公式LINEのURL
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-green-500 px-6 py-3 text-white font-semibold shadow hover:bg-green-600 transition"
          >
            公式LINE ジュニア
          </a>

          <a
            href="https://line.me/R/ti/p/@387brwjo" // Jr.ユース公式LINEのURL
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-green-500 px-6 py-3 text-white font-semibold shadow hover:bg-green-600 transition"
          >
            公式LINE Jr.ユース
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
