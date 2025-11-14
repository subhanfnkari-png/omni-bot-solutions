import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Clock, TrendingUp, Calendar, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-person.jpg";
import FunnelModal from "@/components/funnel/FunnelModal";

const Hero = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="min-h-screen flex items-center px-4 gradient-soft relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN - Content */}
            <div className="text-left animate-fade-in">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Turn WhatsApp into a <span className="relative inline-block">revenue channel
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                We build custom chatbots that book appointments, answer from your docs, send approved templates, and hand off to a human—fast.
              </p>

              {/* Two CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-warm hover:scale-105 transition-transform"
                  onClick={() => setFunnelOpen(true)}
                >
                  Get started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={scrollToVideo}
                >
                  Watch how it works
                </Button>
              </div>

          {/* Trust chips with checkmarks */}
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-success/20 shadow-sm">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-foreground">Go live in 5–7 days</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-success/20 shadow-sm">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-foreground">24/7 replies + handover</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-success/20 shadow-sm">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-foreground">WhatsApp Business (Meta)</span>
            </div>
          </div>
            </div>

            {/* RIGHT COLUMN - Hero Image with Floating Elements */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <img
                  src={heroImage}
                  alt="WhatsApp chatbot in action"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Chat Bubbles - responsive sizing */}
              <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 chat-bubble floating max-w-[140px] lg:max-w-[200px] text-xs lg:text-sm">
                <div className="flex items-start gap-2 lg:gap-3">
                  <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hi Debra! 👋</p>
                    <p className="text-muted-foreground mt-0.5 lg:mt-1 hidden lg:block">How can I help you today?</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-2 lg:-top-8 lg:-right-4 chat-bubble floating-delayed max-w-[130px] lg:max-w-[180px] text-xs lg:text-sm">
                <div className="flex items-start gap-2 lg:gap-3">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">Schedule a tour?</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-4 -left-4 chat-bubble floating max-w-[190px]">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-success flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Available slots:</p>
                    <p className="text-muted-foreground text-xs mt-1">Tomorrow 2PM, 4PM</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-8 -right-4 chat-bubble floating-delayed max-w-[200px]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Booked! ✓</p>
                    <p className="text-muted-foreground text-xs mt-1">See you tomorrow at 2PM</p>
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
