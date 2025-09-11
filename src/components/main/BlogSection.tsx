import { SlNote } from "react-icons/sl";
import Button from "../ui/Button";

export default function BlogSection() {
  return (
    <section className="bg-gray-200 py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* 見出し */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">
          BLOG
        </h2>

        {/* 説明文 */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
           abema blog 更新中！
        </p>

        {/* ボタン */}
        <Button
          href="/contact"
          className="bg-[rgb(241,84,84)] text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[rgb(164,88,88)] transition inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow"
        >
          <SlNote className="text-lg sm:text-xl" />
          公式ブログを見る
        </Button>
      </div>
    </section>
  );
}
