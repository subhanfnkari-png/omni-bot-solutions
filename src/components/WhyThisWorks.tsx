import { Card, CardContent } from "@/components/ui/card";
import { Brain, Smartphone, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Latest AI Technology",
    description: "Built on OpenAI's most advanced GPT models, ensuring natural, context-aware conversations that feel human.",
  },
  {
    icon: Smartphone,
    title: "Meet Customers Where They Are",
    description: "85% of customers prefer messaging apps. We integrate with WhatsApp, Instagram, and Messenger natively.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see average 200%+ increase in lead capture and 60% reduction in support costs within 3 months.",
  },
  {
    icon: Award,
    title: "Enterprise-Grade Security",
    description: "GDPR compliant with full data encryption, consent management, and compliance with Meta's business verification.",
  },
];

const WhyThisWorks = () => {
  return (
    <section className="py-24 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why This Works
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our solution combines cutting-edge AI with proven business strategies to deliver measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
                    <p className="text-white/70 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-white/70">Customer Satisfaction</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">5 Days</div>
              <div className="text-white/70">Average Setup Time</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/70">Automated Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
