import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, TrendingUp, Award, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for Testing the Waters",
    icon: Zap,
    regularSetup: "€1,500",
    regularMonthly: "€149",
    bfSetup: "€750",
    bfMonthly: "€112",
    bfDiscount: "50% off setup + 25% off for 6 months",
    description: "Everything you need to automate customer engagement on one platform",
    features: [
      "1 channel (WhatsApp OR Website)",
      "1 template campaign (up to 2,000 contacts CSV)",
      "Complete onboarding + FAQ setup (IT/EN)",
      "Basic analytics dashboard",
      "Live inbox for human handover",
      "1 admin seat included",
      "Best-effort support (email)",
      "GPT-5 powered AI responses",
      "Multi-language support",
      "GDPR compliance built-in"
    ],
    cta: "Start with Starter",
    popular: false
  },
  {
    name: "Pro",
    subtitle: "For Serious Growth",
    icon: TrendingUp,
    regularSetup: "€3,500",
    regularMonthly: "€399",
    bfSetup: "€1,750",
    bfMonthly: "€299",
    bfDiscount: "50% off setup + 25% off for 6 months",
    description: "Everything in Starter, plus advanced features for scaling",
    features: [
      "WhatsApp + Website (both included)",
      "Smart escalation & 'Return to Bot' feature",
      "RAG mini-library (up to 300 MB) with source citations",
      "3 template campaigns per month",
      "3 admin seats included",
      "Next Business Day support (Mon-Fri)",
      "Advanced analytics & conversation insights",
      "Priority template approval",
      "Custom branding options",
      "CRM integration ready"
    ],
    cta: "Go Pro Now",
    popular: true
  },
  {
    name: "Enterprise",
    subtitle: "For Scale & Compliance",
    icon: Award,
    regularSetup: "€8,000",
    regularMonthly: "€999",
    bfSetup: "€4,000",
    bfMonthly: "€749",
    bfDiscount: "50% off setup + 25% off for 6 months",
    description: "Everything in Pro, plus enterprise-grade features",
    features: [
      "Extended RAG library (up to 5 GB) + Google Drive sync",
      "WhatsApp → Instagram automation (Creator mode)",
      "SSO & advanced RBAC permissions",
      "Full audit logs & compliance reporting",
      "Dedicated backup & disaster recovery",
      "10 admin seats included",
      "SLA: P1 issues 2h / P2 issues 8h",
      "Dedicated account manager",
      "Custom integrations & API access",
      "White-label options available"
    ],
    cta: "Get Enterprise",
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
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-red-500/10 text-red-500 border-red-500/20 px-6 py-2 text-base font-bold animate-pulse">
            🔥 BLACK FRIDAY: 50% OFF SETUP + 25% OFF FOR 6 MONTHS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Revenue Acceleration Plan</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every plan includes GPT-5 AI, 24/7 operation, and starts generating ROI within the first week. 
            No contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'border-primary border-4 shadow-2xl shadow-primary/20 scale-105' 
                  : 'border-2'
              } transition-all hover:shadow-xl bg-card/80 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                  plan.popular ? 'from-primary to-accent' : 'from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800'
                } flex items-center justify-center`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.subtitle}</p>

                {/* Pricing */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground line-through">
                      Setup: {plan.regularSetup} | Monthly: {plan.regularMonthly}
                    </div>
                    <div className="text-4xl font-bold gradient-text mt-2">
                      {plan.bfSetup} <span className="text-lg">setup</span>
                    </div>
                    <div className="text-3xl font-bold mt-1">
                      {plan.bfMonthly}<span className="text-base font-normal text-muted-foreground">/month</span>
                    </div>
                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mt-3">
                      {plan.bfDiscount}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } py-6 text-lg font-semibold group`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-2">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold text-center mb-8">
              Optional Add-Ons
              <span className="block text-lg font-normal text-muted-foreground mt-2">
                Enhance any plan with these powerful extras
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border-2 border-border hover:border-primary/30 transition-colors">
                  <span className="font-semibold">{addon.name}</span>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {addon.price}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Guarantee */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-4">
                30-Day Money-Back Guarantee
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Not seeing results? We'll refund your setup fee, no questions asked. That's how confident 
                we are that this will transform your business. Over 847 companies have deployed our AI—zero 
                refunds requested to date.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
