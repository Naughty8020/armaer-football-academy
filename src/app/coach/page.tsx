import Image from "next/image";

interface Member {
  name: string;
  role: string;
  image: string;
  career: string;
  message: string;
}

const members: Member[] = [
  { 
    name: "谷　誠志朗", 
    role: "代表", 
    image: "/members/member1.jpg", 
    career: "元Jリーガー / 指導歴10年", 
    message: "子どもたちがサッカーを楽しみながら成長できる環境を大切にしています。" 
  },
  { 
    name: "伊藤　啓太", 
    role: "コーチ", 
    image: "/members/member2.jpg", 
    career: "全国大会出場経験", 
    message: "全力で楽しむことが一番の成長につながります！" 
  },
  { 
    name: "小森　凜音", 
    role: "コーチ", 
    image: "/members/member3.jpg", 
    career: "海外リーグ経験 / 指導歴5年", 
    message: "世界の基準を伝え、選手の可能性を広げます。" 
  },
  { 
    name: "竹添　光瑛", 
    role: "コーチ", 
    image: "/members/member4.jpg", 
    career: "U-18代表経験", 
    message: "一緒に夢を追いかけましょう！" 
  },
  { 
    name: "富士谷　慧正", 
    role: "コーチ", 
    image: "/members/member5.jpg", 
    career: "フィジカルトレーナー / 国際大会帯同経験", 
    message: "基礎体力を磨き、試合で本領を発揮できる身体を作ります。" 
  },
  { 
    name: "南　陽斗", 
    role: "ニート", 
    image: "/members/member6.jpg", 
    career: "関東リーグ優勝経験", 
    message: "仲間と一緒に楽しみながら、もっと上を目指していきます！" 
  },
];

export default function MemberPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">COACHES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.career}</p>
                <p className="text-gray-700 text-sm italic">“{member.message}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
