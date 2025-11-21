import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import VideoSection from "@/components/VideoSection";
import Outcomes from "@/components/Outcomes";
import IndustriesSection from "@/components/IndustriesSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BlackFridayBanner from "@/components/BlackFridayBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BlackFridayBanner />
      <Navigation />
      <Hero />
      
      <VideoSection />
      <Outcomes />
      <IndustriesSection />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
