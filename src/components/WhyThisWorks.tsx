import { Card, CardContent } from "@/components/ui/card";
import { Brain, Smartphone, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: Brain,
    title: "Built on GPT-5, Not Yesterday's Tech",
    description: "While competitors use outdated models, we leverage OpenAI's latest GPT-5 for superior understanding, context retention, and human-like interactions. Your customers won't know they're talking to AI.",
    stat: "98% accuracy"
  },
  {
    icon: Smartphone,
    title: "Customer Behavior Has Shifted",
    description: "85% of customers now prefer messaging over phone calls or email. WhatsApp has 2B+ users. Instagram DMs are the new inbox. We meet customers where they actually are, not where businesses want them to be.",
    stat: "3.2B messaging users"
  },
  {
    icon: TrendingUp,
    title: "Math That Makes Sense",
    description: "Average client: 192 leads/month at 22% close rate = 42 customers. Average order value €347 = €14,574 in new revenue monthly. Your chatbot pays for itself in week one, then it's pure profit.",
    stat: "847% avg ROI"
  },
  {
    icon: Award,
    title: "Enterprise Security, Startup Speed",
    description: "Bank-level encryption, GDPR compliance by design, SOC 2 readiness, and Meta Business verification included. We handle the compliance headache so legal signs off fast and you can focus on growth.",
    stat: "SOC 2 compliant"
  },
];

const WhyThisWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 px-4 py-2">
            THE SCIENCE OF CONVERSION
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why This Crushes
            <br />
            <span className="gradient-text">Traditional Customer Service</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            This isn't theory. It's proven math, behavioral science, and cutting-edge AI 
            working together to multiply your revenue while you sleep.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white pr-4">{reason.title}</h3>
                      <Badge className="bg-accent/20 text-accent border-accent/30 whitespace-nowrap">
                        {reason.stat}
                      </Badge>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats showcase */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-white/20 overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-center mb-12 text-white">
                Real Numbers From Real Deployments
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-3">847%</div>
                  <div className="text-white/80 text-lg">Average ROI</div>
                  <div className="text-white/60 text-sm mt-1">First 90 days</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-3">2.8x</div>
                  <div className="text-white/80 text-lg">Lead Capture Increase</div>
                  <div className="text-white/60 text-sm mt-1">Across all channels</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-3">94%</div>
                  <div className="text-white/80 text-lg">Automation Rate</div>
                  <div className="text-white/60 text-sm mt-1">Without human help</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-3">48s</div>
                  <div className="text-white/80 text-lg">Avg Response Time</div>
                  <div className="text-white/60 text-sm mt-1">vs 4.5 hours before</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
