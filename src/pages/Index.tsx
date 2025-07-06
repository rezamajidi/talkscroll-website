
import HeroSection from "@/components/HeroSection";
import LivePreview from "@/components/LivePreview";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100" style={{ fontFamily: 'Inter, sans-serif' }}>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
