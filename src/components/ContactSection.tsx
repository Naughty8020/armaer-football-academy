export default function ContactSection() { 
    return (
        <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-black mb-4">CONTACT</h2>
          <p className="text-gray-700 mb-8">
            サッカーを始めたいけど不安…<br />
            もっと上手くなりたい！<br />
            その気持ちを全力でサポートします。<br />
            まずはお気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition shadow-md"
          >
            お問い合わせはこちら
          </a>
          <p className="mt-4 text-sm text-gray-600">
            ※体験レッスンや料金のご相談も受け付けています
          </p>
        </div>
      </section>
      
    );}