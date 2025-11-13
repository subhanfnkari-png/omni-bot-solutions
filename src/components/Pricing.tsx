import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for Testing",
    regularSetup: "€1,500",
    regularMonthly: "€149",
    bfSetup: "€750",
    bfMonthly: "€112",
    features: [
      "1 channel (WhatsApp OR Website)",
      "1 template campaign",
      "Complete onboarding + FAQ setup",
      "Basic analytics dashboard",
      "Live inbox for human handover",
      "1 admin seat included",
      "Best-effort support (email)",
      "GPT-5 powered AI responses",
    ],
    popular: false
  },
  {
    name: "Pro",
    subtitle: "For Serious Growth",
    regularSetup: "€3,500",
    regularMonthly: "€399",
    bfSetup: "€1,750",
    bfMonthly: "€299",
    features: [
      "WhatsApp + Website (both included)",
      "Smart escalation & Return to Bot",
      "RAG mini-library (up to 300 MB)",
      "3 template campaigns per month",
      "3 admin seats included",
      "Next Business Day support",
      "Advanced analytics & insights",
      "Priority template approval",
      "Custom branding options",
      "CRM integration ready",
    ],
    popular: true
  },
  {
    name: "Enterprise",
    subtitle: "For Scale & Compliance",
    regularSetup: "€8,000",
    regularMonthly: "€999",
    bfSetup: "€4,000",
    bfMonthly: "€749",
    features: [
      "Extended RAG library (up to 5 GB)",
      "WhatsApp → Instagram automation",
      "SSO & advanced RBAC permissions",
      "Full audit logs & compliance",
      "Dedicated backup & recovery",
      "10 admin seats included",
      "SLA: P1 issues 2h / P2 issues 8h",
      "Dedicated account manager",
      "Custom integrations & API",
      "White-label options available",
    ],
    popular: false
  }
];

const addons = [
  { name: "Instagram Integration", price: "+€99/month" },
  { name: "Extra Template", price: "€90/template" },
  { name: "Additional Seat", price: "€15/seat/month" },
  { name: "CRM/Zapier Integration", price: "€600 one-time" }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4 animate-pulse">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">BLACK FRIDAY: 50% OFF SETUP + 25% OFF FOR 6 MONTHS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-soft hover:shadow-warm transition-all ${
                plan.popular ? "border-2 border-primary scale-105" : "border-2 hover:border-primary"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-warm">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                
                <div className="mt-6">
                  <div className="text-sm text-muted-foreground line-through mb-1">
                    {plan.regularSetup} setup + {plan.regularMonthly}/mo
                  </div>
                  <div className="text-4xl font-bold text-primary mb-1">
                    {plan.bfSetup}
                  </div>
                  <div className="text-2xl font-semibold">
                    {plan.bfMonthly}<span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <div className="text-xs text-accent font-medium mt-2">
                    Black Friday Special
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90 shadow-warm" 
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <Card className="max-w-4xl mx-auto shadow-soft mb-12">
          <CardHeader>
            <h3 className="text-2xl font-bold text-center">Optional Add-Ons</h3>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guarantee */}
        <Card className="max-w-2xl mx-auto shadow-soft bg-success/10 border-2 border-success">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-muted-foreground">
              Not satisfied? Get a full refund within 30 days. No questions asked.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;