"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../ui/Button"

const images = [
  "/main-img/main1.jpeg",
  "/main-img/main2.jpg",
  "/main-img/main3.jpeg",
  "/main-img/main4.jpg"
]

export default function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // 5秒ごとに切り替え

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative bg-black">
    <div className="relative h-[90vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* 画像群 */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="サッカースクールのイメージ"
          fill
          className={`object-cover object-center absolute transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
  
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-white/20 z-10" />
  
      {/* テキストとボタン */}
      <div className="absolute inset-0 flex flex-col items-end justify-center p-4 sm:p-8 md:p-16 lg:p-20 z-20">
        <h2 className="text-[rgb(241,84,84)] text-2xl sm:text-3xl md:text-4xl font-bold text-right drop-shadow">
          ARMAER FOOTBALL ACADEMY
        </h2>
        <p className="text-white text-right mt-2 text-xs sm:text-sm md:text-base leading-snug drop-shadow">
          滋賀県近江八幡市を拠点に活動しているサッカースクール<br />
          対象は小学1年生から中学３年生まで
        </p>
      </div>
    </div>

    <section className="p-8 max-w-3xl mx-auto min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-center">


        <h3 className="text-xl text-white font-semibold mb-4">～ 世界への挑戦はここから ～</h3>
        <p className="mb-6 text-gray-100">
          サッカーのピッチで自分だけの武器を身に着け
          明確な夢を持てる選手の育成
        </p>

        <Button
          href="/training"
          className="bg-[rgb(241,84,84)] text-white px-4 py-2 max-w-58 rounded hover:bg-[rgb(164,88,88)] transition inline-block"
        >
          プログラム＆料金一覧へ
        </Button>
      </section>
    </main>
  )
}
