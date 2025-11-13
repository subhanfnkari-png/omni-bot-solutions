import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-chatbot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Customer Engagement</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Customer Service with AI Chatbots
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Multi-platform, 24/7 intelligent chatbots that engage customers on WhatsApp, Instagram, Messenger, and your website. Powered by the latest OpenAI GPT models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">No coding required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">Setup in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">GDPR compliant</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI Chatbot Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Always Available</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl border border-border">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
