"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
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
      ease: [0, 0, 0.2, 1] 

    },
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 mt-12 sm:mt-20 mb-16 sm:mb-20 bg-gray-800"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={item}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4"
        >
          CONTACT
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-50 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed"
        >
          サッカーを始めたいけど不安…<br />
          もっと上手くなりたい！<br />
          その気持ちを全力でサポートします。<br />
          世界への挑戦はここから始まる。<br />
          まずはお気軽にお問い合わせください。
        </motion.p>

        <motion.div variants={item} className="inline-block">
          <Button
            href="/contact"
            className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-[rgb(241,84,84)] text-white rounded-2xl shadow hover:bg-[rgb(164,88,88)] transition"
          >
            お問い合わせはこちら
          </Button>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-4 text-xs sm:text-sm text-gray-200"
        >
          ※体験レッスンや料金のご相談も受け付けています
        </motion.p>
      </motion.div>
    </section>
  );
}
