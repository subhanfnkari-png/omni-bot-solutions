import { MessageSquare, Zap, Globe, Brain, Clock, Shield, BarChart, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Multi-Platform Support",
    description: "Connect with customers on WhatsApp, Instagram, Messenger, and your website - all from one dashboard.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Advanced AI Learning",
    description: "Train your chatbot with your business data, FAQs, and documentation for accurate responses.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Answer customer queries in milliseconds, 24/7, without human intervention.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Users,
    title: "Lead Collection",
    description: "Automatically collect and qualify leads through natural conversations.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track conversations, conversion rates, and customer satisfaction in beautiful dashboards.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Communicate with customers in their preferred language with built-in translation.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Enterprise-grade security with full GDPR compliance and data protection.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get your chatbot live in just 5 days with our guided onboarding process.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 gradient-warm relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Everything you need to automate customer service
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Built for businesses that want to scale their support and sales without hiring more staff.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in border-2 hover:border-primary ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}

          {/* Special Large Card */}
          <Card className="p-6 shadow-soft hover:shadow-warm transition-all duration-300 lg:col-span-3 bg-gradient-primary text-primary-foreground border-0">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Ready to transform your customer experience?</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Join hundreds of businesses using AI to deliver exceptional customer service 24/7.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm">5-day setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm">24/7 support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm">No coding required</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 shadow-warm transition-all hover:scale-105">
                  Get Started Free
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;