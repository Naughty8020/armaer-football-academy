import MainSection from "@/components/main/MainSection"
import NewsSection from "@/components/main/NewsSection"
import AboutSection from "@/components/main/AboutSection"
import BlogSection from "@/components/main/BlogSection"
import ContactSection from "@/components/main/ContactSection"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center"
         style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="">
        <MainSection />
        <AboutSection />
        <ContactSection />
        <NewsSection />
        <BlogSection />
      </div>
    </div>
  );
}

