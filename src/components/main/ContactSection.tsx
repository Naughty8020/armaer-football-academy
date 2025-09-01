import Button from "@/components/ui/Button";

export default function ContactSection() { 
  return (
    <section className="py-12 sm:py-16 lg:py-24 mt-12 sm:mt-20 mb-16 sm:mb-20 bg-amber-50">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">
          CONTACT
        </h2>
        
        <p className="text-gray-700 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          サッカーを始めたいけど不安…<br />
          もっと上手くなりたい！<br />
          その気持ちを全力でサポートします。<br />
          まずはお気軽にお問い合わせください。
        </p>

        <Button 
          href="/contact" 
          className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-[rgb(241,84,84)] text-white rounded-2xl shadow hover:bg-[rgb(164,88,88)] transition inline-block"
        >
          お問い合わせはこちら
        </Button>

        <p className="mt-4 text-xs sm:text-sm text-gray-600">
          ※体験レッスンや料金のご相談も受け付けています
        </p>
      </div>
    </section>
  );
}
