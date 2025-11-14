import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Clock, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-person.jpg";
import FunnelModal from "@/components/funnel/FunnelModal";

const Hero = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 px-4 gradient-soft relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="text-left animate-fade-in">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              AI chatbots built for your business—sales, support, bookings, onboarding.
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              We design and deploy WhatsApp + Web chatbots tailored to your workflows. Templates, data-grounded answers, integrations, and a clean admin panel—done for you.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="mb-8 h-12 px-8 shadow-warm hover:scale-105 transition-transform"
              onClick={() => setFunnelOpen(true)}
            >
              Get Started
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Hero Image with Floating Elements */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="AI Chatbot in action"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Chat Bubbles */}
            <div className="absolute -top-4 -left-4 chat-bubble floating max-w-[200px]">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Hi Debra! 👋</p>
                  <p className="text-xs text-muted-foreground mt-1">How can I help you today?</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-4 chat-bubble floating-delayed max-w-[180px]">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">New Lead!</p>
                  <p className="text-xs text-muted-foreground mt-1">Sarah just signed up</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/4 chat-bubble floating max-w-[160px]">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-success flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">24/7 Active</p>
                  <p className="text-xs text-muted-foreground">Always available</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-6 chat-bubble floating-delayed max-w-[180px]">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">+127%</p>
                  <p className="text-xs text-muted-foreground">Conversion boost</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default Hero;
