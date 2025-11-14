import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, FileText, MessageSquare, Users, Settings } from "lucide-react";
import FunnelModal from "@/components/funnel/FunnelModal";

const VideoSection = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <>
      <section id="video" className="py-24 gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See how it works in 60 seconds
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick tour of templates, grounded answers (from your docs), human handoff, and the admin we use for clients.
            </p>
          </div>

          {/* Video container with creative layout */}
          <div className="max-w-5xl mx-auto relative">
            {/* Video embed with aspect ratio */}
            <div className="relative rounded-3xl overflow-hidden shadow-warm border-4 border-white bg-black aspect-video">
              {/* Placeholder - will be replaced with actual video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <Button size="lg" className="rounded-full w-20 h-20 shadow-warm">
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            {/* Floating feature badges */}
            <div className="absolute -left-4 top-1/4 chat-bubble floating max-w-[140px] hidden lg:block">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">From your docs</span>
              </div>
            </div>

            <div className="absolute -right-4 top-1/3 chat-bubble floating-delayed max-w-[150px] hidden lg:block">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">Approved templates</span>
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 chat-bubble floating-delayed max-w-[140px] hidden lg:block">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-success" />
                <span className="text-xs font-medium">Human handoff</span>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/3 chat-bubble floating max-w-[130px] hidden lg:block">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">Admin panel</span>
              </div>
            </div>
          </div>

          {/* CTAs below video */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
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
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a 15-min call
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default VideoSection;
