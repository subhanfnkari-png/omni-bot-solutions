import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useFunnelStore } from "@/hooks/useFunnelStore";
import { useTranslation } from "@/hooks/useTranslation";

const FunnelStep3Features = () => {
  const { features, updateFeatures, setCurrentStep } = useFunnelStore();
  const { t } = useTranslation();
  
  const essentialFeatures = useMemo(() => [
    t("funnel.step3.features.whatsapp"),
    t("funnel.step3.features.templates"),
    t("funnel.step3.features.knowledgeBase"),
    t("funnel.step3.features.adminPanel"),
    t("funnel.step3.features.reporting"),
  ], [t]);
  
  const [selectedEssentials, setSelectedEssentials] = useState<string[]>(
    features.essentials.length > 0 ? features.essentials : essentialFeatures
  );
  const [otherFeatures, setOtherFeatures] = useState(features.other);

  const toggleEssential = (feature: string) => {
    setSelectedEssentials((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleNext = () => {
    updateFeatures(selectedEssentials, otherFeatures);
    setCurrentStep(4);
  };

  const handleBack = () => {
    updateFeatures(selectedEssentials, otherFeatures);
    setCurrentStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("funnel.step3.title")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("funnel.step3.subtitle")}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-semibold">{t("funnel.step3.essentials")}</h3>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {t("funnel.step3.recommended")}
          </Badge>
        </div>

        <div className="space-y-2.5">
          {essentialFeatures.map((feature) => {
            const isSelected = selectedEssentials.includes(feature);

            return (
              <label
                key={feature}
                className={`
                  feature-card flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer
                  transition-all duration-200 hover:shadow-soft
                  ${isSelected 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card hover:border-primary/50'
                  }
                `}
              >
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => toggleEssential(feature)}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium leading-relaxed">{feature}</p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">
          {t("funnel.step3.otherFeatures")}
        </label>
        <Textarea
          value={otherFeatures}
          onChange={(e) => setOtherFeatures(e.target.value)}
          placeholder={t("funnel.step3.otherPlaceholder")}
          className="min-h-20"
          maxLength={500}
        />
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-muted-foreground italic">
            {t("funnel.step3.changeNote")}
          </span>
          <span className="text-xs text-muted-foreground">
            {otherFeatures.length}/500
          </span>
        </div>
      </div>

      <div className="flex justify-between gap-3 pt-8 pb-4 border-t border-border mt-8">
        <Button
          onClick={handleBack}
          variant="outline"
          size="default"
          className="min-w-[120px]"
        >
          {t("funnel.step3.back")}
        </Button>
        <Button
          onClick={handleNext}
          size="default"
          className="min-w-[140px]"
        >
          {t("funnel.step3.next")}
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep3Features;
