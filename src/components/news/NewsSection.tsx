// components/NewsSection.tsx
import { NewsItem } from "@/lib/news";
import { fetchData } from "@/lib/fetchData";
import NewsSectionClient from "@/components/news/NewsSectionClient";

export default async function NewsSection() {
  // サーバーサイドでデータ取得
  const news: NewsItem[] = await fetchData<NewsItem>("news");

  // クライアントコンポーネントに渡す
  return <NewsSectionClient initialNews={news} />;
}
