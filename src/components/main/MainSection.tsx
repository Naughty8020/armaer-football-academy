import Image from "next/image"
import Button from "../ui/Button"

export default function MainSection() {
  return (
    <main className="relative bg-amber-50 " >
    
    <div className="relative h-[30vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
  <Image
    src="/unsplash/adria-crehuet-cano-zideC_21IyY-unsplash.jpg"
    alt="サッカースクールのイメージ"
    fill
    className="object-cover object-center"
    priority
  />
  {/* 明るめオーバーレイ */}
 
  {/* または白系にする場合 */}
   <div className="absolute inset-0 bg-white/17"></div> 

  <div className="absolute inset-0 flex flex-col items-end justify-center p-4 sm:p-8 md:p-16 lg:p-20 z-10">
    <h2 className="text-[rgb(241,84,84)] text-2xl sm:text-3xl md:text-4xl font-bold text-right drop-shadow">
      ARMAER FOOTBALL ACADEMY
    </h2>
    <p className="text-white text-right mt-2 text-xs sm:text-sm md:text-base leading-snug drop-shadow">
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
       
          
      

        <Button href="/training" className="bg-[rgb(241,84,84)] text-white px-4 py-2 rounded hover:bg-[rgb(164,88,88)] transition inline-block">
  プログラム＆料金一覧へ
</Button>


      </section>


      
    </main>
  )
}
