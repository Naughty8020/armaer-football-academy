"use client";
import { FaFutbol, FaRunning, FaShieldAlt } from "react-icons/fa";
import React from "react";
import type { ProgramsItem } from "@/lib/programs";
import Link from "next/link";
interface Props {
  programs: ProgramsItem[];
}

export default function ProgramClient({ programs }: Props) {
  return (
    <section className="max-w-6xl mx-auto p-6 sm:p-10 text-black">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <img
          src="/team.jpg"
          alt="example"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
        />
      </div>
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          PROGRAM
        </h2>
        <p className="leading-relaxed">
        ARMAER では通常のスクール活動に加え選手が成長するのに必要な力を伸ばすために様々なプログラムを展開しております。通常のクラスだけでは得ることのできない体験を通して大きな成長への一歩をここから
        </p>
      </div>
    </div>
  
    {/* About */}
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-3">About</h3>
      <p className="leading-relaxed">
      単発クリニック、キャンプ、遠征など、通常のスクールに所属して頂いている選手達以外にも幅広く、ARMAERのトレーニングを体験頂くと共に、親元を離れ、宿泊を伴うプログラムでは、子ども達の自立性を養っていきます。
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      title: "単発クリニック", 
      body: "単発のクリニックでは、各回毎にテーマを決定し、トレーニングを実施して参ります。長期休暇期間には、各クラブと提携し、クリニックも開催。地域毎に課題を把握し、成長に適したトレーニングを実施していきます。", 
      image: "/programs/1.jpg" 
    },
    { 
      title: "ARMAER Camp", 
      body: "ARMAER Camp は夏、冬、春の長期休暇期間を利用し、開催している、強化トレーニングキャンプです。1泊2日の時間を用いて、ARMAER 育成で大切にしている4つの柱である、テクニック、フィジカル、戦術理解、メンタルに重点を置き、トレーニングを行っていきます。", 
      image: "/programs/2.jpg" 
    },
    { 
      title: "遠征", 
      body: "年に数回、セレクションにより選出された選手達でチームを結成し、県外遠征を行っております。選手間の競争を高め、選られれば、選抜選手であると言う責任感を持ち、県外の強豪チームとの闘いへ挑みます。選ばれなくとも、次のチャンスへ向けて奮起する。どちらに転ぼうが、選手達にとってまたとない成長の機会をご提供いたします。", 
      image: "/programs/3.jpg" 
    },
    { 
      title: "トレーニングマッチ/大会参加", 
      body: "学年毎定期的にトレーニングマッチや大会参加を通して、子ども達の成長やトレーニングの成果を確かめる場を設定しております。トレーニングだけでは見えない部分があり、対外試合の中でどれだけ力を発揮することができるかどうかを観察し、それ以降のトレーニングに課題を反映させていきます。", 
      image: "/programs/4.jpg" 
    },
    { 
      title: "大会", 
      body: "弊社がオーガナイザーを務める、CONQUISTA CUP (コンキスタカップ)は選手達に大会を戦う熱狂さ、プロさながらの雰囲気の中で戦うことによる緊張感など、日常の大会では味わうことのできない体験をご提供しております。国際大会さながらの熱戦をお楽しみ下さい。", 
      image: "/programs/5.jpg" 
    },
    { 
      title: "CONFERENCE", 
      body: "CONFERENCE /カンファレンスでは、各回ゲストをお迎えし、協議形式で進めていく、討論型ミーティングです。各部門でトップに登り詰めたゲストから生き様や、経験を聞き、子ども達や保護者様、コーチの皆様の人生に新たな学びを刻みます。", 
      image: "/programs/6.jpg" 
    },
  ].map((c) => (
    <article
      key={c.title}
      className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
    >
      <img
        src={c.image}
        alt={c.title}
        className="w-full h-55 object-cover"   // ← 写真を縦大きめに
      />
      <div className="p-6 text-center flex flex-col">
        <h4 className="text-xl font-medium mb-2">{c.title}</h4>
        <p className="text-gray-700 max-h-32 overflow-y-auto">{c.body}</p>
        {/* ↑ 文字が長いときはスクロールになる */}
      </div>
    </article>
  ))}
</div>


<div className="mt-10 space-y-4">
  <h4 className="text-xl font-semibold mb-3">プログラム一覧</h4>
  {programs && programs.length > 0 ? (
    <div className="space-y-4">
      {programs.map((program) => (
        <Link
          key={program.id}
          href={`/programs/${program.id}`} 
          className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          {program.title ?? "タイトルなし"}
        </Link>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">プログラムが見つかりませんでした。</p>
  )}
</div>
  </section>
  
  );
}
