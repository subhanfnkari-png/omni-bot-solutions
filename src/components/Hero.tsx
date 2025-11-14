import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Users, Clock, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-person.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-8 px-4 gradient-soft relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6 animate-fade-in">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
            Boost sales and support with an{" "}
            <span className="text-primary">AI-powered</span> chatbot
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Provide instant, AI-powered support and keep customers happy, anytime, anywhere.
          </p>

          {/* Email Capture Form */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center max-w-xl mx-auto mb-4">
            <Input
              type="email"
              placeholder="Enter your business email"
              className="h-10 text-base shadow-soft border-2 focus:border-primary"
            />
            <Button size="lg" className="w-full sm:w-auto h-10 px-6 shadow-warm hover:scale-105 transition-transform">
              Sign up free
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                <span className="text-white text-[10px]">✓</span>
              </div>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                <span className="text-white text-[10px]">✓</span>
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                <span className="text-white text-[10px]">✓</span>
              </div>
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </div>

        {/* Hero Image with Floating Elements */}
        <div className="max-w-2xl mx-auto relative">
          <img
            src={heroImage}
            alt="AI Chatbot in action"
            className="w-full h-auto relative"
          />

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
    </section>
  );
};

export default Hero;