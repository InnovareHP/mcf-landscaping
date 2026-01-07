import CommercialSection from "@/components/CommercialSection";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import ResidentialSection from "@/components/ResidentialSection";
import Image from "next/image";

export default function Work() {
  // Shared responsive padding class to keep things DRY
  const containerPadding = "px-4 md:px-[5%] max-w-7xl mx-auto";

  return (
    <div className="min-h-screen bg-white">
      <main className="w-full">
        {/* Mission Section */}
        <section className={containerPadding}>
          <MissionSection />
        </section>

        {/* Work Image 1 - Full Bleed (Edge to Edge) */}
        <div className="mt-12 md:mt-20 w-full overflow-hidden">
          <Image
            src="/work/work-image-1.png"
            alt="MCF Landscaping Work"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            className="w-full h-[40vh] md:h-auto object-cover"
          />
        </div>

        {/* Residential Section */}
        <section className={`${containerPadding} mt-12 md:mt-20`}>
          <ResidentialSection />
        </section>

        {/* Work Image 2 - Contained with Margins */}
        <div className={`${containerPadding} mt-12 md:mt-20`}>
          <div className="relative overflow-hidden rounded-lg shadow-sm">
            <Image
              src="/work/work-image-2.png"
              alt="MCF Landscaping Work"
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Commercial Section */}
        <section className={`${containerPadding} mt-12 md:mt-20 mb-20`}>
          <CommercialSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
