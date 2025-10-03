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
                ARMAER のスクール顧問アンバサダーはレアルマドリートップチームコーチ ホセララ氏であり、世界トップの最前線で活躍する指導者の育成メソッドの元、世界最高基準にトレーニングを実施しております。
                </motion.span>
                <motion.span variants={item}>
                より具体的に説明すると、当アカデミー設立時より大切にして来た、サッカー選手の成長に必要な4つの要素であるテクニック/フィジカル/戦術理解/メンタルをトレーニングの中で落とし込んでいきます。
                </motion.span>
                <motion.span variants={item}>
                コーチ、アナリスト、選手、国際大会帯同、様々な立場や、経験を持つ指導者が、ホセララ氏指導の元、より強固なサッカー理解を習得し、子ども達の進路実現に向け、全力でサポートを行っております。
                </motion.span>
                {/* <motion.span variants={item}>
                  世界との差を知るコーチ陣が、サッカーのリアルを伝えていきます。
                </motion.span> */}
              </motion.div>
            </motion.div>


<motion.div
  variants={item}
  className="flex-1"
>
<div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
  <Image
    src="/top.jpg"
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
