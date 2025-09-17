import MainSection from "@/components/main/MainSection";
import NewsSection from "@/components/news/NewsSection"; // サーバーコンポーネント
import AboutSection from "@/components/main/AboutSection";
import BlogSection from "@/components/main/BlogSection";
import ContactSection from "@/components/main/SubContactSection";
import LineSection from "@/components/main/maincontact/LineSection";

export const metadata = {
  title: "ARMAER FOOTBALL ACADEMY",
  description:
    "滋賀県近江八幡市を拠点に活動しているサッカースクール。小学1年生から中学3年生を対象に、技術・フィジカル・戦術理解・メンタルを育成。レアルマドリード女子トップチーム顧問ホセララ氏のメソッドを導入し、世界基準のトレーニングを提供。",
  openGraph: {
    title: "ARMAER FOOTBALL ACADEMY",
    description:
      "世界基準のサッカースクール｜滋賀県近江八幡市を拠点に活動。小学1年〜中学3年対象。世界と日本の差を埋める最先端の育成を提供。",
    url: "https://armaer-football-academy.vercel.app/",
    siteName: "ARMAER FOOTBALL ACADEMY",
    images: [
      {
        url: "https://armaer-football-academy.vercel.app/ogp.jpg", // 適切な画像をアップロードしてこのURLに置き換えてください
        width: 1200,
        height: 630,
        alt: "ARMAER FOOTBALL ACADEMY",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMAER FOOTBALL ACADEMY",
    description:
      "滋賀県近江八幡市のサッカースクール。世界と戦える選手の育成を目指す。",
    images: ["https://armaer-football-academy.vercel.app/ogp.jpg"], // 同上
  },
  metadataBase: new URL("https://armaer-football-academy.vercel.app"),
};

export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <ContactSection />
      <NewsSection />
      <LineSection />
      <BlogSection />
    </div>
  );
}
