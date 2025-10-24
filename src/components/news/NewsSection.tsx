import { NewsItem } from "@/lib/news";
import NewsList from "@/components/news/NewsList";

async function fetchNews(): Promise<NewsItem[] | null> {
  try {
    const res = await fetch("https://armaer-football.microcms.io/api/v1/news", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY ?? "" },
      cache: "no-store", 
    });
    
    if (!res.ok) return null;

    const data = await res.json();
    return data.contents as NewsItem[];
  } catch (error) {

    return null;
  }
}

export default async function NewsSection() {
  const news = await fetchNews();
  if (!news) {
    return <p className="text-center text-red-500">ニュース情報の取得に失敗しました。</p>;
  }

  return <NewsList initialNews={news} />;
}
