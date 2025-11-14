import { Briefcase, Stethoscope, Building, ShoppingCart, GraduationCap, Sparkles, Users, Phone } from "lucide-react";

const SocialProof = () => {
  const icons = [
    { Icon: Briefcase, label: "Staffing" },
    { Icon: Stethoscope, label: "Clinics" },
    { Icon: Building, label: "Real Estate" },
    { Icon: ShoppingCart, label: "E-commerce" },
    { Icon: GraduationCap, label: "Education" },
    { Icon: Sparkles, label: "Beauty" },
    { Icon: Users, label: "Training" },
    { Icon: Phone, label: "Sales" },
  ];

  // Duplicate icons for seamless loop
  const allIcons = [...icons, ...icons];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by teams in staffing, clinics, real estate, and e-commerce.
        </p>
        
        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling icon row */}
          <div className="flex gap-12 animate-scroll">
            {allIcons.map((item, index) => (
              <item.Icon 
                key={index} 
                className="w-8 h-8 text-muted-foreground/40 flex-shrink-0" 
              />
            ))}
          </div>
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
