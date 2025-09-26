import MainSection from "@/components/main/MainSection";
import AboutSection from "@/components/main/AboutSection";
import ListSection from "@/components/main/ListSection";
import ContactSection from "@/components/main/SubContactSection";
import NewsSection from "@/components/news/NewsSection"; // サーバーコンポーネント
import LineSection from "@/components/main/maincontact/LineSection"
import BlogSection from "@/components/main/BlogSection";




export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <ListSection />
      <ContactSection />
      <NewsSection />
      <LineSection />
      <BlogSection />
    </div>
  );
}
