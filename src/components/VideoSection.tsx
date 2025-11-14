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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            See how it <span className="relative inline-block">works
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span> in 60 seconds
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick tour of templates, grounded answers (from your docs), human handoff, and the admin we use for clients.
            </p>
          </div>

          {/* Video container - SMALLER */}
          <div className="max-w-4xl mx-auto relative">
            {/* Video embed with aspect ratio */}
            <div className="relative rounded-2xl overflow-hidden shadow-warm border-4 border-white bg-black aspect-video">
              {/* Placeholder - will be replaced with actual video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <Button size="lg" className="rounded-full w-20 h-20 shadow-warm">
                  <Play className="w-8 h-8 ml-1" />
                </Button>
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
