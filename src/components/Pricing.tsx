import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import FunnelModal from "@/components/funnel/FunnelModal";

const Pricing = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  const includedItems = [
    "Connection setup",
    "3 approved message templates",
    "1 knowledge base",
    "1 live conversation flow",
    "1 campaign (up to 1,000 contacts)",
    "Inbox + human handoff",
    "Weekly performance report",
  ];

  return (
    <>
      <section id="pricing" className="py-24 gradient-primary">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Start with a <span className="relative inline-block">30-day Pilot
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span>
          </h2>
        </div>

          <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-warm border-2 border-primary/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">What's included:</h3>
                <ul className="space-y-3 text-lg">
                  {includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-2xl font-bold mb-2">Setup from €799</p>
                <p className="text-xl text-muted-foreground mb-6">
                  Monthly €199–€399 after pilot
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto shadow-warm hover:scale-105 transition-transform" 
                onClick={() => setFunnelOpen(true)}
              >
                Get a tailored plan
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
