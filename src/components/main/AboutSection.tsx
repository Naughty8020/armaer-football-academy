"use client";

import Image from "next/image";
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
      ease: [0, 0, 0.2, 1],
    },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white mt-8 sm:mt-16 lg:mt-20 mb-6 sm:mb-12 py-8 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
     
          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 leading-relaxed text-center"
          >
            サッカーのピッチで自分だけの武器を身に着け明確な夢を持てる選手の育成
          </motion.h2>

        
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-stretch">
            
      
            <motion.div
              className="flex-1 bg-white flex flex-col justify-center"
              variants={container}
            >
              <motion.p
                variants={item}
                className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 font-medium"
              >
                サッカーをサッカーとして学べる場
              </motion.p>

              <motion.div
                variants={container}
                className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-4 flex flex-col"
              >
                <motion.span variants={item}>
                  ARMAER のスクール顧問アンバサダーは現レアルマドリード女子トップチーム
                  ホセララ氏であり、世界トップの前線で活躍する指導者のメソッドの元
                  世界最高基準のトレーニングを実施しております。
                </motion.span>
                <motion.span variants={item}>
                  サッカー選手の成長に必要な <br />
                  技術 / フィジカル / 戦術理解 / メンタル <br />
                  をトレーニングの中で落とし込んでいきます。
                </motion.span>
                <motion.span variants={item}>
                  ARMAERのコーチは全員が学生であり、現役選手として活躍するコーチや
                  専門学生、国際大会帯同経験を持つコーチなどで構成されています。
                </motion.span>
                <motion.span variants={item}>
                  世界との差を知るコーチ陣が、サッカーのリアルを伝えていきます。
                </motion.span>
              </motion.div>
            </motion.div>


<motion.div
  variants={item}
  className="flex-1"
>
  <div className="relative w-full h-48 sm:h-72 md:h-full">
    <Image
      src="/main-big-img.jpg"
      alt="サッカーのトレーニング風景"
      fill
      className="rounded-1xl shadow-lg object-cover"
      priority
    />
  </div>
</motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
