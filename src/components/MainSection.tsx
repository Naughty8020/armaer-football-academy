import Image from "next/image"

export default function MainSection() {
  return (
    <main className="relative bg-white" >
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
        src="/unsplash/adria-crehuet-cano-zideC_21IyY-unsplash.jpg"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center" 
        />
<div className="absolute inset-0 bg-opacity-40 flex flex-col items-end justify-center p-4 sm:p-8 md:p-16 lg:p-20">
  <h2 className="text-[rgb(241,84,84)] text-2xl sm:text-3xl md:text-4xl font-bold text-right">
    ARMAER FOOTBALL ACADEMY<br />
  </h2>
  <p className="text-white text-right mt-2">
    滋賀県近江八幡市を拠点に活動しているサッカースクール<br />
    対象は小学1年生から中学３年生まで
  </p>
</div>


      </div>

      <section className="p-8 max-w-3xl mx-auto">
        <h3 className="text-xl text-black font-semibold mb-4">～ 世界への挑戦はここから ～</h3>
        <p className="mb-6 text-gray-700">
        サッカーのピッチで自分だけの武器を身に着け
             明確な夢を持てる選手の育成 
        </p>
        <button className="bg-[rgb(241,84,84)] text-white px-4 py-2 rounded hover:bg-[rgb(164,88,88)] transition">
          プログラム＆料金一覧へ
        </button>
      </section>


      
    </main>
  )
}
