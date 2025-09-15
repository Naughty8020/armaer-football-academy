// app/member/page.tsx など

import Image from "next/image";

interface Member {
  name: string;
  role: string;
  img: {
    url: string;
    width: number;
    height: number;
  };
  career: string;
  message: string;
}

async function fetchMembers(): Promise<Member[] | null> {
  try {
    const res = await fetch("https://armaer-football.microcms.io/api/v1/coach", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.contents as Member[];
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return null;
  }
}

export default async function MemberPage() {
  const members = await fetchMembers();

  if (!members) {
    return <p className="text-center text-red-500">コーチ情報の取得に失敗しました。</p>;
  }

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
{member.img && (
  <img
  src={member.img.url}
  alt={member.name}
  className="w-full h-64 object-cover rounded-md"
/>

)}

<div className="p-6 flex flex-col items-center text-center space-y-3 h-72">
  <div className="overflow-y-auto">
    <h3 className="text-lg sm:text-xl text-black font-semibold">{member.name}</h3>
    <p className="text-sm sm:text-base text-gray-600 mt-1">{member.role}</p>

    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed whitespace-pre-line mt-4">
      {member.career}
    </p>

    <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mt-4">
      “{member.message}”
    </p>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
