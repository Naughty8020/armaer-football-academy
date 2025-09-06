// components/NewsSection.tsx
import { NewsItem } from "@/lib/news";
import { fetchData } from "@/lib/fetchData";
import NewsList from "@/components/news/NewsList";

export default async function NewsSection() {
  // サーバーサイドでデータ取得
  const news: NewsItem[] = await fetchData<NewsItem>("news");

  // クライアントコンポーネントに渡す
  return <NewsList initialNews={news} />;
}
