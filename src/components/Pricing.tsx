import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import FunnelModal from "@/components/funnel/FunnelModal";

const Pricing = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const { t } = useTranslation();

  const includedItems = [
    {
      title: t("pricing.completeSetup.title"),
      description: t("pricing.completeSetup.description")
    },
    {
      title: t("pricing.threeTemplates.title"),
      description: t("pricing.threeTemplates.description")
    },
    {
      title: t("pricing.knowledgeBase.title"),
      description: t("pricing.knowledgeBase.description")
    },
    {
      title: t("pricing.conversationalStream.title"),
      description: t("pricing.conversationalStream.description")
    },
    {
      title: t("pricing.campaign.title"),
      description: t("pricing.campaign.description")
    },
    {
      title: t("pricing.dashboard.title"),
      description: t("pricing.dashboard.description")
    },
    {
      title: t("pricing.weeklyReport.title"),
      description: t("pricing.weeklyReport.description")
    },
  ];

  return (
    <>
      <section id="pricing" className="py-24 gradient-primary">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {t("pricing.title")} <span className="relative inline-block">{t("pricing.pilot30Days")}
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span> {t("pricing.today")}
          </h2>
        </div>

          <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-warm border-2 border-primary/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("pricing.allIncluded")}</h3>
                <ul className="space-y-4 text-lg">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold">{item.title}</span>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-2xl font-bold mb-2">{t("pricing.setupStartingAt")}</p>
                <p className="text-xl text-muted-foreground mb-6">
                  {t("pricing.afterPilot")}
                </p>
                <p className="text-base text-muted-foreground">
                  {t("pricing.fastestWay")}
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto shadow-warm hover:scale-105 transition-transform" 
                onClick={() => setFunnelOpen(true)}
              >
                {t("pricing.getTailoredPlan")}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default Pricing;
