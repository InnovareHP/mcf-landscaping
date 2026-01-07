import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="w-full py-16">
        <div className="mx-[8%]">
          <HeroSection />
          <ImageGallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}
