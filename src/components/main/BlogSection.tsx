"use client";

import { SlNote } from "react-icons/sl";
import Button from "../ui/Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-white py-20 sm:py-28 lg:py-36"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        {/* 見出し */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4"
        >
          BLOG
        </motion.h2>

        {/* 説明文 */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed"
        >
          abema blog 更新中！
        </motion.p>

        {/* ボタン */}
        <motion.div variants={itemVariants} className="inline-block">
          <Button
            href="/contact"
            className="bg-[rgb(241,84,84)] text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[rgb(164,88,88)] transition inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow"
          >
            <SlNote className="text-lg sm:text-xl" />
            公式ブログを見る
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
