import { Bot, Globe, Users, Zap, MessageCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "Multi-Agent AI System",
    description: "Advanced AI powered by OpenAI GPT that understands context and delivers human-like conversations 24/7.",
  },
  {
    icon: Globe,
    title: "Omnichannel Integration",
    description: "Seamlessly connect WhatsApp, Instagram, Messenger, and your website with a single unified platform.",
  },
  {
    icon: Users,
    title: "Smart Lead Collection",
    description: "Engage visitors conversationally and capture qualified leads automatically while they chat.",
  },
  {
    icon: Zap,
    title: "Human Agent Handover",
    description: "Intelligent escalation system alerts your team when human intervention is needed, including WhatsApp.",
  },
  {
    icon: MessageCircle,
    title: "Advanced AI Answering",
    description: "Works with YouTube, PDFs, Word, Images, Google Drive, XLS, CSV, and more for comprehensive knowledge base.",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Built with privacy in mind - consent management, opt-out options, and secure data retention.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Scale
            <span className="gradient-text"> Customer Engagement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive chatbot solution integrates seamlessly with your existing workflow and scales with your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
