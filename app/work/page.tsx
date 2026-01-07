import Header from "@/components/Header";
import MissionSection from "@/components/MissionSection";
import ResidentialSection from "@/components/ResidentialSection";
import CommercialSection from "@/components/CommercialSection";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="w-full">
        {/* Changed from mx-[8%] to mx-[5%] */}
        <div className="mx-[5%]">
          <MissionSection />
        </div>

        {/* Work Image 1 - Full Width (No margins) */}
        <div className="mt-16 w-full">
          <Image
            src="/logo/work/work-image-1.png"
            alt="MCF Landscaping Work"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>

        {/* Residential Section */}
        <div className="mx-[5%]">
          <ResidentialSection />
        </div>

        {/* Work Image 2 - With 5% Margins */}
        <div className="mx-[5%] mt-16">
          <Image
            src="/logo/work/work-image-2.png"
            alt="MCF Landscaping Work"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>

        {/* Commercial Section */}
        <div className="mx-[5%]">
          <CommercialSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
