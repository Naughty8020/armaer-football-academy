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
    {/* 上段: 左画像 右テキスト */}
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
          ARMAERでは通常のトレーニングに加え
          選手が成長するのに必要な力を伸ばすため
          様々なプログラムを行っています。
        </p>
      </div>
    </div>
  
    {/* About */}
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-3">About</h3>
      <p className="leading-relaxed">
        このセクションではサービスの詳細説明や理念、機能の要約などを書きます。
        文章は読みやすさを優先して段落を分け、強調したい箇所は太字やカラーブロックで示すと良いでしょう。
      </p>
    </div>
  
    {/* カード3つ */}


    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { title: "世界基準", body: "ARMAER のスクール顧問アンバサダーは現レアルマドリード女子トップチーム ホセララ氏であり、世界トップの前線で活躍する指導者のメソッドの元 世界最高基準のトレーニングを実施しております。", icon: FaFutbol },
    { title: "トップレベル", body: " サッカー選手を支えている４つの柱｛ 技術 / フィジカル / 戦術理解 / メンタル を軸にトレーニングを行っていきます。", icon: FaRunning },
    { title: "様々なコース", body: "サッカー選手の成長に必要な技術 / フィジカル / 戦術理解 / メンタルをトレーニングの中で落とし込んでいきます。", icon: FaShieldAlt },
  ].map((c) => {
    const IconComponent = c.icon;
    return (
      <article
        key={c.title}
        className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
      >
        <IconComponent className="text-6xl text-green-600 mb-4" />
        <h4 className="text-xl font-medium mb-2">{c.title}</h4>
        <p className="text-gray-700">{c.body}</p>
      </article>
    );
  })}
</div>
    {/* APIのプログラムリスト */}
   
{/* APIのプログラムリスト */}
<div className="mt-10 space-y-4">
  <h4 className="text-xl font-semibold mb-3">プログラム一覧</h4>
  {programs && programs.length > 0 ? (
    <div className="space-y-4">
      {programs.map((program) => (
        <Link
          key={program.id}
          href={`/programs/${program.id}`} // ここでIDページへリンク
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
