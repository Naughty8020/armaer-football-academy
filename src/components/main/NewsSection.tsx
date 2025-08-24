"use client";
import CustomButton from '@/components/Button';
import { useState, useEffect } from "react";
import { NewsItem } from "@/lib/news";

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // 画面幅判定（モバイルかどうか）
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md未満はモバイル
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const loadMore = () => setVisibleItems(prev => prev + 3);

  if (loading) return <p className="text-center text-gray-500">読み込み中…</p>;

  const maxLength = isMobile ? 50 : 150;

  return (
    <section className="bg-white mb-5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
        <div className="flex flex-col gap-3 sm:gap-6">
          {news.length > 0 ? (
            news.slice(0, visibleItems).map(item => {
              const isExpanded = expandedIds.has(item.id);
              const isLong = item.contents.length > maxLength;

              return (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded shadow hover:bg-gray-100 transition flex-col"
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
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-900">{item.date}</p>
                    </div>
                  </div>

                  <p className="mt-1 sm:mt-2 text-sm  sm:text-gray-900 text-gray-900">
                    {isExpanded
                      ? item.contents
                      : item.contents.slice(0, maxLength) + (isLong ? "…" : "")
                    }
                  </p>

                  {isLong && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="mt-1 sm:mt-2 text-blue-500 text-xs sm:text-sm hover:underline self-start"
                    >
                      {isExpanded ? "閉じる" : "もっと見る"}
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-gray-900 text-center">ニュースはまだありません</p>
          )}
        </div>

        {visibleItems < news.length && (
          <div className="text-center mt-8">
            <CustomButton
              onClick={loadMore}
              className="bg-[rgb(241,84,84)] text-white px-4 py-2 rounded hover:bg-[rgb(164,88,88)] transition inline-flex items-center gap-2"
            >
              さらに3件表示
            </CustomButton>
          </div>
        )}
      </div>
    </section>
  );
}
