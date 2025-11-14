import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useFunnelStore } from "@/hooks/useFunnelStore";

const essentialFeatures = [
  "WhatsApp Cloud API connection + webhook",
  "3 approved message templates with personalization",
  "Knowledge base from your docs/URLs (RAG)",
  "Admin panel: Inbox, Contacts/Lists, Templates, Knowledge, Flows, Campaigns, Reports, Roles",
  "Reporting (sends, delivered, replies, conversions)",
];

const FunnelStep3Features = () => {
  const { features, updateFeatures, setCurrentStep } = useFunnelStore();
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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choose your features
        </h2>
        <p className="text-lg text-muted-foreground">
          Essentials are pre-selected. Adjust as you like and add anything custom.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-semibold">Essentials</h3>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Recommended
          </Badge>
        </div>

        <div className="space-y-3">
          {essentialFeatures.map((feature) => {
            const isSelected = selectedEssentials.includes(feature);

            return (
              <label
                key={feature}
                className={`
                  feature-card flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer
                  transition-all duration-200 hover:shadow-soft
                  ${isSelected 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-background hover:border-primary/50'
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
          Other features you need
        </label>
        <Textarea
          value={otherFeatures}
          onChange={(e) => setOtherFeatures(e.target.value)}
          placeholder="Describe any additional features you need..."
          className="min-h-24"
          maxLength={500}
        />
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-muted-foreground italic">
            You can change features during onboarding.
          </span>
          <span className="text-xs text-muted-foreground">
            {otherFeatures.length}/500
          </span>
        </div>
      </div>

      <div className="flex justify-between gap-4 sticky bottom-0 bg-background/80 backdrop-blur-sm py-4 -mx-4 px-4 md:-mx-8 md:px-8 border-t border-border mt-8">
        <Button
          onClick={handleBack}
          variant="outline"
          size="lg"
          className="w-full md:w-auto min-w-32"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          size="lg"
          className="w-full md:w-auto min-w-48"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep3Features;
