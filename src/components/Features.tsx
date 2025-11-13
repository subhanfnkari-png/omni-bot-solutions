import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp,
  Clock,
  Globe,
  Database
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "GPT-5 Powered Intelligence",
    description: "Not GPT-3.5 or 4. We use OpenAI's latest GPT-5 for human-like conversations that understand context, nuance, and intent. Your customers won't believe they're talking to AI.",
    benefit: "98% accuracy rate",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Presence",
    description: "One chatbot, four platforms. Deploy simultaneously on WhatsApp Business, Instagram DMs, Facebook Messenger, and your website. Unified inbox, unified intelligence.",
    benefit: "4 platforms included",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Conversational Lead Qualification",
    description: "Stop using boring forms. Our AI engages prospects in natural conversation, asks qualifying questions contextually, and books appointments—achieving 3.2x higher completion rates than traditional forms.",
    benefit: "3.2x more completions",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Intelligent Escalation",
    description: "AI handles 94% of conversations autonomously. For complex cases, it seamlessly transfers to human agents with full context—no repetition needed. WhatsApp, web, and social media handover included.",
    benefit: "94% automated",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Multi-Source Knowledge Base",
    description: "Upload PDFs, Word docs, spreadsheets, images. Connect YouTube, Google Drive, webhooks. Your chatbot learns from all your content—up to 5GB on Enterprise—and cites sources for credibility.",
    benefit: "10+ data sources",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Clock,
    title: "24/7 Revenue Generation",
    description: "While you sleep, your AI works. It responds in seconds, not hours. No sick days, no vacations, no overtime pay. Just consistent, high-quality engagement that converts browsers into buyers around the clock.",
    benefit: "Zero downtime",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Multilingual by Design",
    description: "English by default, with support for 95+ languages on demand. Your chatbot automatically detects customer language and responds fluently—expanding your addressable market instantly.",
    benefit: "95+ languages",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, GDPR compliance built-in, SOC 2 readiness, and Meta Business verification included. Legal approves it. Security trusts it. You focus on growth, not compliance nightmares.",
    benefit: "SOC 2 compliant",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics Dashboard",
    description: "See every conversation, track conversion rates, identify drop-off points, and measure ROI in real-time. Know exactly what's working and optimize continuously with AI-powered insights.",
    benefit: "Real-time insights",
    color: "from-violet-500 to-purple-500"
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            EVERYTHING YOU NEED TO DOMINATE
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Not Just a Chatbot.
            <br />
            <span className="gradient-text">Your 24/7 Revenue Team.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            While competitors sell basic FAQ bots, we deliver a complete AI-powered customer 
            engagement system that captures, qualifies, and converts leads automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-8 pb-6">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold pr-2">{feature.title}</h3>
                  <Badge className="bg-accent/20 text-accent border-accent/30 whitespace-nowrap text-xs">
                    {feature.benefit}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-muted-foreground mb-6">
            Every feature is included. No hidden costs. No feature gates.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2">
              ✓ 72-hour deployment
            </Badge>
            <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2">
              ✓ No coding required
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2">
              ✓ Full training included
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
