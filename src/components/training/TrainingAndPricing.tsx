import { fetchData } from "@/lib/fetchData";
import { TrainingItem } from "@/lib/training";
import TrainingList from "./TrainingList";

export default async function TrainingAndPricing() {
  const classes: TrainingItem[] = await fetchData<TrainingItem>("training");

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
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-black">
      {/* トレーニング概要 */}
      <section>
        <h1 className="text-xl sm:text-2xl font-bold mb-4">TRAINING・PRICE</h1>
        <h2 className="text-lg sm:text-xl font-semibold mb-4">トレーニング概要</h2>
        <p className="mb-2">
          当スクールのトレーニングは、現レアルマドリード女子トップチームコーチ
          ホセララ氏考案のメソッドにてトレーニングを実施しております。
        </p>
        <p className="mb-2">世界トップレベルの育成をご体感下さい。</p>
        <p className="mb-2">
          サッカー選手の基盤となる力は大きく４つあります。それは、技術 / フィジカル / 戦術理解 / メンタル です。
        </p>
        <p className="mb-2">この4つ無くして、サッカー選手としての成功はありません。</p>
        <p className="mb-2">
          これらをトレーニングの中で行い、選手の成長にフォーカスしたトレーニングを構築していきます。
        </p>
        <p className="mb-2">
          この育成年代で必ず押さえておきたい、intelligence（賢さ）/ technic（技術）/ mental（精神性）。
        </p>
        <p className="mb-2">
          世界で活躍するトッププレーヤ―が必ず持ち合わせている力は育成年代にも必要不可欠です。
        </p>
        <p className="mb-2">
          サッカー選手として第一線で活躍できる選手の育成。そして、子どもの無限の可能性を引き出す指導をご体感下さい。
        </p>
      </section>

      {/* 学校・対象者フィルター付きクラス一覧 */}
      <TrainingList classes={classes} />

      {/* 料金一覧 */}
      <section>
        <h1 className="text-2xl font-bold mb-4">料金一覧</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {pricingSections.map((section) => (
            <div key={section.title} className="bg-gray-100 shadow-lg rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.plans.map((plan) => (
                  <li key={plan.name} className="border border-gray-950 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {plan.name} {plan.detail && `(${plan.detail})`}
                      </span>
                      <span className="font-bold">{plan.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 会費 */}
      <section>
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4">会費</h2>
          <span className="font-bold text-lg">
            {membershipFee.name}：{membershipFee.price}
          </span>
        </div>
      </section>
    </div>
  );
}
