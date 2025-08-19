import { NextResponse } from "next/server";
import { fetchData } from "@/lib/fetchData";
import { NewsItem } from "@/lib/news";

export async function GET() {
  try {
    const news: NewsItem[] = await fetchData<NewsItem>("news");
    return NextResponse.json(news);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "ニュース取得失敗" }, { status: 500 });
  }
}
