"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion"; // ← これを追加
// 料金データ
const pricingSections = [
  {
    title: "ジュニア",
    plans: [
      { name: "単発プラン", detail: "1回", price: "¥1,500" },
      { name: "継続プラン（週1回）", detail: "月額", price: "¥5,000" },
      { name: "継続プラン（週2回）", detail: "月額", price: "¥7,000" },
      { name: "継続プラン（週3回）", detail: "月額", price: "¥9,000" },
    ],
  },
  {
    title: "Jr．ユース",
    plans: [
      { name: "継続プラン（週1回）", detail: "月額", price: "¥5,000" },
      { name: "単発プラン", detail: "1回", price: "¥1,500" },
    ],
  },
];

const membershipFee = { name: "年会費", price: "¥2,000" };

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
  
export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-black">
      {/* 料金一覧セクション */}
      <motion.section
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h1 variants={item} className="text-2xl font-bold mb-4">
          料金一覧
        </motion.h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {pricingSections.map((section) => (
            <motion.div
              key={section.title}
              variants={item}
              className="bg-gray-100 shadow-lg rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.plans.map((plan) => (
                  <li key={plan.name} className="border border-gray-950 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {plan.name} {plan.detail && `(${plan.detail})`}
                      </span>
                      <span className="font-bold">{plan.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 会費セクション */}
      <motion.section
        variants={item}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4">会費</h2>
          <span className="font-bold text-lg">
            {membershipFee.name}：{membershipFee.price}
          </span>
        </div>
      </motion.section>
    </div>
  );
}
