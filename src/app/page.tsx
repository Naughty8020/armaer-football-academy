// src/app/page.tsx
import MainSection from "@/components/main/MainSection";
import NewsSection from "@/components/news/NewsSection"; // サーバーコンポーネント
import AboutSection from "@/components/main/AboutSection";
import BlogSection from "@/components/main/BlogSection";
import ContactSection from "@/components/main/ContactSection";
import LineSection from "@/components/contact/LineSection";

export default function Home() {
  return (
  
      <div>
        <MainSection />
        <AboutSection />
        <ContactSection />
        <NewsSection />  {/* サーバーで fetch → Client に渡す */}
        <LineSection />
        <BlogSection />
      </div>
   
  );
}
