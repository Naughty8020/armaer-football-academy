import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white mt-8 sm:mt-16 lg:mt-20 mb-6 sm:mb-12 py-8 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 見出し */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 leading-relaxed text-center">
          サッカーのピッチで自分だけの武器を身に着け明確な夢を持てる選手の育成
        </h2>

        {/* レイアウト: モバイルは縦並び, PCは横並び */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-stretch">
          
          {/* テキスト部分 */}
          <div className="flex-1 bg-white flex flex-col justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 font-medium">
              サッカーをサッカーとして学べる場
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-4 flex flex-col">
  <span>
    ARMAER のスクール顧問アンバサダーは現レアルマドリード女子トップチーム
    ホセララ氏であり、世界トップの前線で活躍する指導者のメソッドの元
    世界最高基準のトレーニングを実施しております。
  </span>
  <span>
    サッカー選手の成長に必要な <br />
    技術 / フィジカル / 戦術理解 / メンタル <br />
    をトレーニングの中で落とし込んでいきます。
  </span>
  <span>
    ARMAERのコーチは全員が学生であり、現役選手として活躍するコーチや
    専門学生、国際大会帯同経験を持つコーチなどで構成されています。
  </span>
  <span>
    世界との差を知るコーチ陣が、サッカーのリアルを伝えていきます。
  </span>
</p>

          </div>

          {/* 画像部分 */}
          <div className="flex-1">
            <div className="relative w-full h-48 sm:h-72 md:h-full">
              <Image
                src="/main-big-img.jpg"
                alt="サッカーのトレーニング風景"
                fill
                className="rounded-1xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
