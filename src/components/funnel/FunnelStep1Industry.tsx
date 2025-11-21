import { useState } from "react";
import { Briefcase, Shield, Phone, Stethoscope, Home, ShoppingCart, GraduationCap, Scissors, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useFunnelStore } from "@/hooks/useFunnelStore";
import { useTranslation } from "@/hooks/useTranslation";

const FunnelStep1Industry = () => {
  const { industry, industryNote, updateIndustry, setCurrentStep } = useFunnelStore();
  const { t } = useTranslation();
  
  const industries = [
    {
      id: "staffing",
      name: t("funnel.industries.staffing.name"),
      description: t("funnel.industries.staffing.description"),
      icon: Briefcase,
    },
    {
      id: "compliance",
      name: t("funnel.industries.compliance.name"),
      description: t("funnel.industries.compliance.description"),
      icon: Shield,
    },
    {
      id: "telemarketing",
      name: t("funnel.industries.telemarketing.name"),
      description: t("funnel.industries.telemarketing.description"),
      icon: Phone,
    },
    {
      id: "clinics",
      name: t("funnel.industries.clinics.name"),
      description: t("funnel.industries.clinics.description"),
      icon: Stethoscope,
    },
    {
      id: "realestate",
      name: t("funnel.industries.realEstate.name"),
      description: t("funnel.industries.realEstate.description"),
      icon: Home,
    },
    {
      id: "ecommerce",
      name: t("funnel.industries.ecommerce.name"),
      description: t("funnel.industries.ecommerce.description"),
      icon: ShoppingCart,
    },
    {
      id: "education",
      name: t("funnel.industries.education.name"),
      description: t("funnel.industries.education.description"),
      icon: GraduationCap,
    },
    {
      id: "beauty",
      name: t("funnel.industries.beauty.name"),
      description: t("funnel.industries.beauty.description"),
      icon: Scissors,
    },
    {
      id: "other",
      name: t("funnel.industries.other.name"),
      description: t("funnel.industries.other.description"),
      icon: MoreHorizontal,
    },
  ];
  const [selectedIndustry, setSelectedIndustry] = useState(industry);
  const [note, setNote] = useState(industryNote);

  const handleSelect = (id: string) => {
    setSelectedIndustry(id);
    if (id !== "other") {
      setNote("");
      // Auto-advance to next step for non-"other" selections
      updateIndustry(id, "");
      setCurrentStep(2);
    }
  };

  const handleNext = () => {
    updateIndustry(selectedIndustry, note);
    setCurrentStep(2);
  };

  const isValid = selectedIndustry && (selectedIndustry !== "other" || note.trim().length > 0);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("funnel.step1.title")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("funnel.step1.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {industries.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedIndustry === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`
                industry-card p-5 rounded-xl border-2 text-left transition-all duration-200
                ${isSelected 
                  ? 'border-primary bg-primary/5 shadow-soft' 
                  : 'border-border bg-card hover:border-primary/50'
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-3
                ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
              `}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-base mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </button>
          );
        })}
      </div>

      {selectedIndustry === "other" && (
        <div className="mb-8 animate-fade-in">
          <label className="block text-sm font-medium mb-2">
            {t("funnel.step1.otherLabel")}
          </label>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t("funnel.step1.otherPlaceholder")}
            className="min-h-20"
            maxLength={500}
          />
          <span className="text-xs text-muted-foreground float-right mt-1">
            {note.length}/500
          </span>
        </div>
      )}

      <div className="flex justify-end gap-3 pt-8 pb-4 border-t border-border mt-8">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          size="default"
          className="min-w-[140px]"
        >
          {t("funnel.step1.next")}
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep1Industry;
