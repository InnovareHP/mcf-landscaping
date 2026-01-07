import Footer from "@/components/Footer";
import CommercialDesign from "@/components/Projects/Commercial";
import Residential from "@/components/Projects/Residential";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full py-16">
        <div className="mx-[8%] space-y-24">
          <Residential />
          <CommercialDesign />
        </div>
      </main>
      <Footer />
    </div>
  );
}
