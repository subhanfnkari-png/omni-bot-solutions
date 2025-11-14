import { useState } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FunnelModal from "@/components/funnel/FunnelModal";

const Navigation = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ChatBot</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              <span className="font-medium">Product</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              <span className="font-medium">Integrations</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              <span className="font-medium">Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#pricing" className="font-medium hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="hidden md:flex shadow-warm hover:scale-105 transition-transform"
            onClick={() => setFunnelOpen(true)}
          >
            Sign up free
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="md:hidden">
            <MessageSquare className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>

    <FunnelModal open={funnelOpen} onOpenChange={setFunnelOpen} />
    </>
  );
};

export default Navigation;