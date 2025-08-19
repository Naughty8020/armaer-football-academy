// lib/news.ts
export type NewsItem = {
    id: string;
    title: string;
    date: string;
    contents: string;
    images?: {
      url: string;
      width: number;
      height: number;
    };
    href: string;
  };
  
 