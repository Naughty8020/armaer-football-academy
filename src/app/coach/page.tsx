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
    career: `【経　歴】
２０１９年－２０２２年 滋賀YMCA
２０２１年－２０２２年 八幡商業高等学校サッカー部
２０２２年～ ARMAER FOOTBALL ACADEMY
２０２３年 Real Sosiedad Camp Japan 招聘
２０２４年 CeltaCampJapan 招聘 Celta stage Spain 通訳
MIC７（ベスト16）　監督
２０２５年 MIC（決勝トーナメント進出）監督

【帯同歴】
Donosti cup スペイン
Elite neon cup ギリシャ
Iscar cup スペイン
Real Madrid WC スペイン
La liga camp2022 日本
JAMON CUP スペイン
Costa de la luz スペイン`,
    message: "これまで、幅広い年代の選手たちへの指導、国際大会や世界トップクラスの指導者の指導を見る中で育成年代の子ども達に必要な力、そしてワールドクラスのサッカーとはどのようなものなのか、何が求められるのか、そして世界の子ども達にあって、日本の子ども達にない力を自分の目で見てきました。そうした経験から学んできたものを子ども達に伝えていきます。" 
  },
  { 
    name: "伊藤　啓太", 
    role: "小学生担当", 
    image: "/members/member2.jpg", 
    career: "【選手歴】愛知ホワイトスターズ MIO東近江 八幡商業高校 びわこ成蹊大学", 
    message: "選手一人一人の個性や考え方を消さないように、楽しくかつ真剣に指導します。" 
  },
  { 
    name: "小森　凜音", 
    role: "中学生担当", 
    image: "/members/member3.jpg", 
    career: "選手歴】玉園FC MIO東近江 八幡商業高校（C）", 
    message: "選手たちに常に選択肢を与え、自己決定力を延ばす指導をします。" 
  },
  { 
    name: "竹添　光瑛", 
    role: "桐原校担当", 
    image: "/members/member4.jpg", 
    career: "【選手歴】野洲JFC MIO琵琶湖 滋賀水口高校（C）", 
    message: "私はサッカーを通して自分自身がサッカー選手としてはもちろん、人としても大きく成長したと強く実感しています。それを子ども達に伝え、バトンを渡し、今後の人生に何か良い影響を与えれるような指導者を目指します。" 
  },
  { 
    name: "富士谷　慧正", 
    role: "水曜日担当", 
    image: "/members/member5.jpg", 
    career: "【選手歴】滋賀YMCA（C）近江兄弟社中学校【指導歴】滋賀YMCA", 
    message: "体力/技術の向上に加え、実践的な戦術指導、そして今後スポーツを続けていくための身体づくりと人間の育成を行います。具体的にサッカーだけが出来る子どもではなくその他の部分も通ずる身体の使い方/身体能力の育成と挨拶/コミュニケーション力/片付けなどといった人として当たり前のことが出来る選手の育成を目指します。" 
  },
  { 
    name: "南　陽斗", 
    role: "水曜日担当", 
    image: "/members/member6.jpg", 
    career: "桐原JFC /MIO東近江（C）/八幡商業高校", 
    message: "サッカーでも社会でも、自ら考え行動できる人材が求められています。そこで私は、考える力を養う選手の育成に力を入れます。子どもたちが自ら頭を使い、考えながら取り組む練習メニューを実施し、考えることを習慣化。最終的には、自然に思考し行動できる選手を育てることを目指します。" 
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
              <div className="p-6 flex flex-col items-center text-center space-y-3">
                <h3 className="text-lg sm:text-xl text-black font-semibold">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
                <p
                  className="text-xs sm:text-sm text-gray-500 leading-relaxed whitespace-pre-line"
                >
                  {member.career}
                </p>
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed">“{member.message}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




