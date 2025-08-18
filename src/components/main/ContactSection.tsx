import Button from "@/components/Button";



export default function ContactSection() { 
    return (
        <section className="py-16 bg-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-black mb-4">CONTACT</h2>
          <p className="text-gray-700 mb-8">
            サッカーを始めたいけど不安…<br />
            もっと上手くなりたい！<br />
            その気持ちを全力でサポートします。<br />
            まずはお気軽にお問い合わせください。
          </p>
          <Button href="/contact" className="text-xl px-8 py-4 w-full sm:w-auto bg-[rgb(241,84,84)] text-white rounded hover:bg-[rgb(164,88,88)] transition inline-block">
  お問い合わせはこちら
</Button>

          <p className="mt-4 text-sm text-gray-600">
            ※体験レッスンや料金のご相談も受け付けています
          </p>
        </div>
      </section>
      
    );}