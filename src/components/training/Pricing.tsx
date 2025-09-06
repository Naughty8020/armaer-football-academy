// components/Pricing.tsx
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
  
  export default function Pricing() {
    return (
<div className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-black">
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
                        <span className="font-medium">{plan.name} {plan.detail && `(${plan.detail})`}</span>
                        <span className="font-bold">{plan.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
  
        <section>
          <div className="bg-gray-100 shadow-lg rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold mb-4">会費</h2>
            <span className="font-bold text-lg">{membershipFee.name}：{membershipFee.price}</span>
          </div>
        </section>
      </div>
    );
  }
  