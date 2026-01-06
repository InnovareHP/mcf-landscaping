
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="w-full py-16">
        <div className="px-4">
          <HeroSection />
          <ImageGallery />
        </div>
      </main>
    </div>
  );
}
