export default function BlogSection() {
  return (
 
  <section className="py-12 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-black mb-4">BLOG</h2>
    <p className="text-gray-700 mb-6">
      練習の様子や試合のレポート、コーチからのメッセージなどを発信中。<br />
      サッカースクールの日常や最新情報をブログでチェックしよう！
    </p>
    <a
      href="https://ameblo.jp/your-blog-id/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition shadow-md"
    >
      <img
        src="https://stat100.ameba.jp/common/img/ico/ameba/ameba_mark.png"
        alt="Ameba"
        className="h-5 w-5"
      />
      公式ブログを見る
    </a>
  </div>
</section>


  );
}