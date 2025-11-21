import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import FunnelModal from "@/components/funnel/FunnelModal";

const CTA = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <section className="py-24 gradient-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("cta.title")}<br />
              <span className="relative inline-block">{t("cta.theTimeIsNow")}
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-white/30 via-white/50 to-transparent -z-10"></span>
              </span>
            </h2>
            <p className="text-xl mb-4 opacity-90">
              {t("cta.description1")}
            </p>
            <p className="text-xl mb-8 opacity-90">
              {t("cta.description2")}
            </p>
            <Button 
              size="lg" 
              className="!bg-white !text-foreground shadow-warm hover:scale-105 transition-transform hover:!bg-white/90 border-2 border-white hover:!text-foreground"
              style={{ background: 'white', backgroundColor: 'white' }}
              onClick={() => setFunnelOpen(true)}
            >
              {t("cta.startPersonalizedPlan")}
            </Button>
          </div>
        </div>
      </section>

      <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default CTA;
