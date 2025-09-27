"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
const container:Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item:Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6,   ease: [0, 0, 0.2, 1] } },
};

export default function AboutPage() {
  const refHero = useRef(null);
  const heroInView = useInView(refHero, { once: true, margin: "-100px" });

  const refAbout = useRef(null);
  const aboutInView = useInView(refAbout, { once: true, margin: "-100px" });

  const refServices = useRef(null);
  const servicesInView = useInView(refServices, { once: true, margin: "-100px" });

  const refSoccerSchool = useRef(null);
  const soccerSchoolInView = useInView(refSoccerSchool, { once: true, margin: "-100px" });

  return (
    <>
    
      <motion.section
        id="home"
        ref={refHero}
        variants={container}
        initial="hidden"
        animate={heroInView ? "show" : "hidden"}
        className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white"
      >
        <motion.div variants={item} className="md:w-4/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[rgb(55,76,144)] mb-4">
            MISSION
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            子ども達には無限の可能性があります。<br />
            そんな子ども達が持つ可能性を引き出すべく
            子ども達一人一人が
            サッカーに本気で向き合い
            ピッチで戦うための武器と将来の夢を明確に
            持つ事の出来る選手の育成を目指します。
          </p>
        </motion.div>
        <motion.div variants={item} className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/coaches.jpeg"
            alt="Profile Picture"
            className="w-160 h-64 sm:w-110 sm:h-80 bg-gray-300 object-cover"
          />
        </motion.div>
      </motion.section>


      <motion.section
        id="about"
        ref={refAbout}
        variants={container}
        initial="hidden"
        animate={aboutInView ? "show" : "hidden"}
        className="px-6 sm:px-10 md:px-16 py-12 bg-white"
      >
        <motion.h2 variants={item} className="text-3xl sm:text-4xl font-semibold mb-6 text-[rgb(55,76,144)]">
          ABOUT US
        </motion.h2>
        <motion.p variants={item} className="text-lg sm:text-xl font-medium text-gray-800">
          ARMAはスペイン語で”武器”という意味です。<br/>
          これは子ども達それぞれの武器を持って
          欲しいという願いから来ています。<br />
          最後についているERは武器になるのではなく
          武器をもつ”人”になってほしいという願い<br />
          そして、夢を追いかける、DREAMER から
          ER を取っています。
          これらから  ”ARMAER”と名付けました。
        </motion.p>
      </motion.section>

   
      <motion.section
        id="services"
        ref={refServices}
        variants={container}
        initial="hidden"
        animate={servicesInView ? "show" : "hidden"}
        className="px-6 sm:px-10 md:px-16 py-12 bg-white"
      >
        <motion.h2 variants={item} className="text-3xl sm:text-4xl font-semibold mb-6 text-[rgb(55,76,144)]">
          育成について
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={item} className="bg-blue-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <i className="fas fa-user-friends text-black text-3xl mb-4"></i>
            <h3 className="text-black text-2xl font-semibold pt-0 mb-2">人間性</h3>
            <p className="text-gray-800 text-base">
              人としての育成の部分においては
              「感謝」と「リスペクト」を持てる
              又、人として自立をし、何か起こった時に
              すぐに周りの大人に頼るのではなく
              自分自身や、仲間で解決していける
              「自立性」「人間性」を育てていきます。
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-red-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <i className="fas fa-futbol text-black text-3xl mb-4"></i>
            <h3 className="text-black text-2xl font-semibold pt-0 mb-2 ">スキル</h3>
            <p className="text-gray-800 text-base">
            サッカー選手を支える ４つの柱（技術 / フィジカル / 戦術理解 / メンタル） を軸に、基礎技術から実戦を想定したトレーニングを行い、

選手一人ひとりが目指す舞台で活躍できるよう、今の成長と未来でのパフォーマンスを見据えた育成を行います。
            </p>
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        ref={refSoccerSchool}
        variants={container}
        initial="hidden"
        animate={soccerSchoolInView ? "show" : "hidden"}
        className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-12 bg-white text-black text-center"
      >
        <motion.h2 variants={item} className="text-3xl font-semibold mb-4">Soccer School</motion.h2>
        <motion.p variants={item} className="text-gray-800 max-w-2xl">
          サッカーのピッチで自分だけの武器と
          明確な将来の夢を持てるサッカー選手の育成
        </motion.p>

        <motion.h3 variants={item} className="text-2xl font-semibold mt-6">営業時間</motion.h3>
        <motion.p variants={item} className="text-gray-800">毎週月曜日～金曜日 午前9：00～午後17：00</motion.p>

        <motion.h3 variants={item} className="text-2xl font-semibold mt-6">連絡先</motion.h3>
        <motion.p variants={item} className="text-gray-800">armaerfa@gmail.com</motion.p>
      </motion.section>
    </>
  );
}
