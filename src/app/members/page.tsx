import Image from "next/image";

interface Member {
  name: string;
  role: string;
  image: string;
}

const members: Member[] = [
  { name: "山田 太郎", role: "コーチ", image: "/members/member1.jpg" },
  { name: "佐藤 花子", role: "選手", image: "/members/member2.jpg" },
  { name: "鈴木 一郎", role: "コーチ", image: "/members/member3.jpg" },
  { name: "田中 美咲", role: "選手", image: "/members/member4.jpg" },
  // 必要に応じて増やす
];

export default function MemberPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">MEMBERS</h2>

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
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
