import { useState } from "react";
import { Button } from "@/components/ui/button";
import FunnelModal from "@/components/funnel/FunnelModal";

const CTA = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <>
      <section className="py-24 gradient-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready for your <span className="relative inline-block">tailored
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/50 to-transparent -z-10"></span>
              </span> plan?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Pick your industry, choose features, and we'll send scope, timeline, and a price band.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="shadow-warm hover:scale-105 transition-transform" 
              onClick={() => setFunnelOpen(true)}
            >
              Get started Now
            </Button>
          </div>
        </div>
      </section>

      <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default CTA;
