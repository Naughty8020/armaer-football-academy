import MainSection from "@/components/main/MainSection";
import NewsSection from "@/components/news/NewsSection"; // サーバーコンポーネント
import AboutSection from "@/components/main/AboutSection";
import BlogSection from "@/components/main/BlogSection";
import ContactSection from "@/components/main/SubContactSection";
import LineSection from "@/components/main/maincontact/LineSection"

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
