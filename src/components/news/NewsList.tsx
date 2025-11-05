"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { NewsItem } from "@/lib/news";

interface Props {
  initialNews: NewsItem[];
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const contents: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] },
  },
};

const extractHref = (htmlString: string) => {
  const match = htmlString?.match(/href="([^"]+)"/);
  return match ? match[1] : null;
};

export default function NewsList({ initialNews }: Props) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const itemsPerPage = 3;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ モバイル判定
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ 展開切り替え
  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const maxLength = isMobile ? 50 : 150;

  // ✅ カテゴリ一覧をユニーク抽出
  const categories = Array.from(
    new Set(initialNews.flatMap((item) => item.Category ?? []))
  );

  // ✅ 選択カテゴリでフィルタリング
  const filteredNews = selectedCategory
    ? initialNews.filter((item) => item.Category?.includes(selectedCategory))
    : initialNews;

  // ✅ ページング処理
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section ref={ref} className="bg-white mb-5 py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={contents}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Latest News
        </motion.h2>

        {/* ✅ カテゴリーボタン */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded-full border ${
              selectedCategory === null
                ? "bg-[rgb(241,84,84)] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            すべて
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded-full border ${
                selectedCategory === cat
                  ? "bg-[rgb(241,84,84)] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ ニュース一覧 */}
        <div className="flex flex-col gap-3 sm:gap-6">
          {currentItems.map((item) => {
            const isExpanded = expandedIds.has(item.id);
            const isLong = item.contents.length > maxLength;
            const url = extractHref(item.url);

            return (
              <motion.div
                key={item.id}
                variants={contents}
                className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded shadow hover:bg-gray-100 transition flex-col border border-gray-300"
              >
                <div className="flex gap-3 sm:gap-4">
                  {item.images && (
                    <img
                      src={item.images.url}
                      alt={item.title}
                      className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.date}
                    </p>
                    <div
                      className="text-xs sm:text-sm text-blue-600 underline hover:text-blue-800 break-words"
                      dangerouslySetInnerHTML={{ __html: item.url }}
                    />
                  </div>
                </div>

                <p className="mt-1 sm:mt-2 text-sm sm:text-gray-900 text-gray-900 whitespace-pre-line">
                  {isExpanded
                    ? item.contents
                    : item.contents.slice(0, maxLength) +
                      (isLong ? "…" : "")}
                </p>

                {isLong && (
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="mt-1 sm:mt-2 text-blue-500 text-xs sm:text-sm hover:underline self-start"
                  >
                    {isExpanded ? "閉じる" : "もっと見る"}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ✅ ページネーション */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-[rgb(241,84,84)] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
