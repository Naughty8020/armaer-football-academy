import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white mt-15 mb-5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-relaxed mx-auto text-center">
          サッカーのピッチで自分だけの武器を身に着け  
          明確な夢を持てる選手の育成
        </h2>

        {/* flexで高さ揃える */}
        <div className="flex flex-col md:flex-row gap-7 items-stretch">
          
          {/* テキスト部分 */}
          <div className="flex-1 bg-white p-4 flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-6">
              サッカーをサッカーとして学べる場
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              ARMAER のスクール顧問アンバサダーは現レアルマドリード女子トップチーム
              ホセララ氏であり、世界トップの前線で活躍する指導者のメソッドの元
              世界最高基準のトレーニングを実施しております。
              <br /><br />
              サッカー選手の成長に必要な <br />
              技術 / フィジカル / 戦術理解 / メンタル <br />
              をトレーニングの中で落とし込んでいきます。
              <br /><br />
              ARMAERのコーチは全員が学生であり、現役選手として活躍するコーチや
              専門学生、国際大会帯同経験を持つコーチなどで構成されています。
              <br /><br />
              世界との差を知るコーチ陣が、サッカーのリアルを伝えていきます。
            </p>
          </div>

          {/* 画像部分 */}
          <div className="flex-1">
            <Image
              src="/main-big-img.jpg"
              alt="サッカーのトレーニング風景"
              width={800}
              height={600}
              className="w-full h-full rounded-1xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
