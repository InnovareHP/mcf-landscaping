import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesPage/ServicesPage";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full py-16">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
