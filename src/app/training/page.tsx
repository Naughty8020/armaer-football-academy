// components/TrainingAndPricing.tsx
export default function TrainingAndPricing() {
    const pricingSections = [
      {
        title: "ジュニア",
        plans: [
          { name: "単発プラン", detail: "1回", price: "¥1,500" },
          { name: "継続プラン（週1回）", detail: "月額", price: "¥5,000" },
          { name: "継続プラン（週2回）", detail: "月額", price: "¥7,000" },
          { name: "継続プラン（週3回）", detail: "月額", price: "¥9,000" },
        ],
      },
      {
        title: "Jr．ユース",
        plans: [
          { name: "継続プラン（週1回）", detail: "月額", price: "¥5,000" },
          { name: "単発プラン", detail: "1回", price: "¥1,500" },
        ],
      },
    ];
  
    const membershipFee = { name: "年会費", price: "¥2,000" };
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* 上：テキストセクション（カードではない） */}
        <section className="px-4 sm:px-6 lg:px-8">
  <h1 className="text-xl sm:text-2xl font-bold mb-4 text-black">
    TREANING・PRICE
  </h1>
  <h2 className="text-lg sm:text-xl font-semibold mb-4 text-black">
    トレーニング概要
  </h2>

  <div className="max-w-prose mx-auto text-sm sm:text-base text-black leading-relaxed space-y-4">
    <p>
      当スクールのトレーニングは、現レアルマドリード女子トップチームコーチ
      ホセララ氏考案のメソッドにてトレーニングを実施しております。
      世界トップレベルの育成をご体感下さい。
    </p>

    <p>
      サッカー選手の基盤となる力は大きく４つあります。それは、
      技術 / フィジカル / 戦術理解 / メンタル です。
      この4つ無くして、サッカー選手としての成功はありません。
    </p>

    <p>
      これらをトレーニングの中で行い、選手の成長にフォーカスした
      トレーニングを構築していきます。
    </p>

    <p>
      この育成年代で必ず押さえておきたい、
      intelligence（賢さ）/ technic（技術）/ mental（精神性）。
      世界で活躍するトッププレーヤ―が必ず持ち合わせている力は
      サッカーをプレーする育成年代にも必要不可欠な力です。
    </p>

    <p>
      サッカー選手として第一線で活躍できる選手の育成。
      そして、子どもの無限の可能性を引き出す指導をご体感下さい。
    </p>
  </div>
</section>

        {/* 下：料金カード */}
        <h1 className="text-2xl font-bold mb-4 text-black">料金一覧</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {pricingSections.map((section) => (
            <div key={section.title} className="bg-gray-100 shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 text-black">{section.title}</h2>
              <ul className="space-y-3">
                {section.plans.map((plan) => (
                  <li key={plan.name} className="border border-gray-950 rounded-lg p-4">
                    <div className="flex justify-between items-center text-black">
                      <span className="font-medium">{plan.name} {plan.detail && `(${plan.detail})`}</span>
                      <span className="font-bold">{plan.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        {/* 下：会費カード */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4 text-black">会費</h2>
          <span className="font-bold text-lg text-black">{membershipFee.name}：{membershipFee.price}</span>
        </div>
      </div>
    );
  }
  