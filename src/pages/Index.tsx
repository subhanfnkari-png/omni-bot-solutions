import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import WhyThisWorks from "@/components/WhyThisWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CaseStudy />
      <WhyThisWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
