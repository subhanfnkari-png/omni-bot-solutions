import { Card } from "@/components/ui/card";
import { Briefcase, Shield, Phone, Stethoscope, Building, ShoppingCart, GraduationCap, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const IndustriesSection = () => {
  const { t } = useTranslation();
  
  const industries = [
    { icon: Briefcase, name: t("industries.staffing") },
    { icon: Shield, name: t("industries.compliance") },
    { icon: Phone, name: t("industries.telemarketing") },
    { icon: Stethoscope, name: t("industries.clinics") },
    { icon: Building, name: t("industries.realEstate") },
    { icon: ShoppingCart, name: t("industries.ecommerce") },
    { icon: GraduationCap, name: t("industries.education") },
    { icon: Sparkles, name: t("industries.beauty") },
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("industries.title")} <span className="relative inline-block">{t("industries.weServe")}
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <Card 
              key={industry.name}
              className="p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
            >
              <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm">{industry.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
