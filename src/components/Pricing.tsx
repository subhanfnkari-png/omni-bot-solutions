import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter (PMI)",
    featured: false,
    originalSetup: "€1,500",
    originalMonthly: "€149",
    blackFridaySetup: "€750",
    blackFridayMonthly: "€112",
    discount: "-50% Setup / -25% Monthly (6 months)",
    features: [
      "1 Channel (WhatsApp or Web)",
      "1 Template Campaign (up to 2,000 contacts)",
      "Onboarding + FAQ (IT/EN)",
      "Basic Analytics",
      "Live Inbox",
      "1 Admin Seat",
      "Best-Effort Support",
    ],
  },
  {
    name: "Pro (Growth)",
    featured: true,
    originalSetup: "€3,500",
    originalMonthly: "€399",
    blackFridaySetup: "€1,750",
    blackFridayMonthly: "€299",
    discount: "-50% Setup / -25% Monthly (6 months)",
    features: [
      "Everything in Starter, plus:",
      "WhatsApp + Web Integration",
      "Smart Escalation & 'Return to Bot'",
      "Mini RAG Library (up to 300 MB) with Citations",
      "3 Campaigns per Month",
      "3 Admin Seats",
      "NBD Support (Mon-Fri)",
    ],
  },
  {
    name: "Enterprise (Law/Scale)",
    featured: false,
    originalSetup: "€8,000",
    originalMonthly: "€999",
    blackFridaySetup: "€4,000",
    blackFridayMonthly: "€749",
    discount: "-50% Setup / -25% Monthly (6 months)",
    features: [
      "Everything in Pro, plus:",
      "Extended RAG (up to 5 GB) + Google Drive Sync",
      "Creator Automation (WA → IG)",
      "Advanced SSO/RBAC",
      "Audit Logs",
      "Dedicated Backups",
      "10 Admin Seats",
      "SLA: P1 2h / P2 8h",
    ],
  },
];

const addons = [
  "Instagram: +€99/month",
  "Extra Template: €90/template",
  "Extra Seat: €15/seat/month",
  "CRM/Zapier Integration: from €600 one-time",
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Black Friday Special - Limited Time Only
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent Pricing, Exceptional Value
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include setup assistance and ongoing support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.featured 
                  ? "border-primary border-4 shadow-2xl scale-105" 
                  : "border-2"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground line-through">
                    Setup: {plan.originalSetup} + {plan.originalMonthly}/month
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">
                      {plan.blackFridaySetup}
                    </div>
                    <div className="text-sm text-muted-foreground">setup</div>
                  </div>
                  <div className="text-2xl font-semibold">
                    {plan.blackFridayMonthly}<span className="text-base text-muted-foreground">/month</span>
                  </div>
                  <div className="text-xs text-destructive font-medium">
                    {plan.discount}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-section border-2">
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-4">Available Add-ons (All Plans)</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {addons.map((addon, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{addon}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
