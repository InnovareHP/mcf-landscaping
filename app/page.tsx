import Footer from "@/components/Footer";
import Work from "./work/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="w-full py-16">
        <div className="mx-[8%]">
          <Work />
        </div>
      </main>

      <Footer />
    </div>
  );
}
