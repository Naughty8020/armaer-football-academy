import { SlNote } from "react-icons/sl";
import Button from "../Button";

export default function BlogSection() {
  return (
 
  <section className="py-12 bg-gray-50">
    
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-black mb-4">BLOG</h2>
    <p className="text-gray-700 mb-6">
      練習の様子や試合のレポート、コーチからのメッセージなどを発信中。<br />
      サッカースクールの日常や最新情報をブログでチェックしよう！
    </p>
<Button
  href="/contact"
  className="bg-[rgb(241,84,84)] text-white px-4 py-2 rounded hover:bg-[rgb(164,88,88)] transition inline-flex items-center gap-2"
>
  <SlNote className="text-xl" />
  公式ブログを見る
</Button>

    
  </div>
</section>


  );
}