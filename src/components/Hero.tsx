import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp, Zap, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Social Proof Badge */}
            <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-2 text-sm font-semibold backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2 inline" />
              Trusted by 847+ companies · 94% automation rate
            </Badge>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turn Every Chat Into
              <br />
              <span className="gradient-text">Revenue While You Sleep</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Your customers message on WhatsApp, Instagram & Messenger at 2AM. 
              Our GPT-5 powered AI responds instantly, qualifies leads, books appointments, 
              and closes sales <span className="text-accent font-semibold">24/7/365</span>—without 
              hiring a single support agent.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Deploy in 72 hours, not months",
                "847% average ROI in 90 days",
                "Works on 4 platforms simultaneously",
                "Zero coding or AI knowledge required"
              ].map((prop, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-base font-medium">{prop}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-6 text-lg font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all group"
              >
                Get Your Custom Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                View Live Examples
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-slate-950" />
                  ))}
                </div>
                <span className="text-white/80 text-sm ml-2">Join 800+ businesses</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span><span className="text-white font-semibold">2.8x</span> more leads captured</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in-delayed">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 backdrop-blur-sm">
              <img 
                src={heroImage} 
                alt="AI Chatbot Dashboard showing real-time conversations and analytics" 
                className="w-full h-auto"
              />
              {/* Floating Stats */}
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-4 border border-accent/30 shadow-xl">
                <div className="text-accent text-3xl font-bold">94%</div>
                <div className="text-white/80 text-sm">Automated</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-4 border border-primary/30 shadow-xl">
                <div className="text-primary text-3xl font-bold">48s</div>
                <div className="text-white/80 text-sm">Avg Response</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
