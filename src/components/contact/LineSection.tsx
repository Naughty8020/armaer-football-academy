export default function LineSection() {
    return (
      <section id="contact" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* タイトル */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ジュニア・Jr.ユースへのお問い合わせは公式LINEからお願いいたします。
          </p>
  
          {/* ボタンエリア */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://lin.ee/xxxxxx" // ジュニア公式LINEのURL
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-6 py-3 text-white font-semibold shadow hover:bg-green-600 transition"
            >
              公式LINE ジュニア
            </a>
  
            <a
              href="https://lin.ee/yyyyyy" // Jr.ユース公式LINEのURL
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-6 py-3 text-white font-semibold shadow hover:bg-green-600 transition"
            >
              公式LINE Jr.ユース
            </a>
          </div>
        </div>
      </section>
    );
  }
  