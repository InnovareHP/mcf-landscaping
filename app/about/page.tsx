import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="w-full py-16">
        <div className="mx-[8%]">
          <AboutSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
