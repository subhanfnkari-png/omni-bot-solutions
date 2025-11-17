import { Building2, Boxes, TrendingUp, Briefcase, Store, GraduationCap, Heart, Phone } from "lucide-react";

const SocialProof = () => {
  const companies = [
    { Icon: Building2, name: "TechCorp" },
    { Icon: Boxes, name: "LogiFlow" },
    { Icon: TrendingUp, name: "SalesHub" },
    { Icon: Briefcase, name: "StaffPro" },
    { Icon: Store, name: "RetailMax" },
    { Icon: GraduationCap, name: "EduTech" },
    { Icon: Heart, name: "HealthCare+" },
    { Icon: Phone, name: "CallCenter" },
  ];

  // Duplicate for seamless loop
  const allCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-base font-medium text-foreground mb-10">
          Trusted by leading companies worldwide
        </p>
        
        <div className="relative">
          {/* Left fade overlay - stronger */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logo row */}
          <div className="flex gap-16 items-center animate-scroll">
            {allCompanies.map((company, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-2 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl bg-muted/30 flex items-center justify-center">
                  <company.Icon className="w-10 h-10 text-muted-foreground" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Right fade overlay - stronger */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
