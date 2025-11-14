import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Database, ShoppingBag, Headphones, FileText, Mail, HardDrive, Info } from "lucide-react";
import { useFunnelStore } from "@/hooks/useFunnelStore";

const presets = [
  {
    id: "light",
    name: "Light",
    description: "No integrations (export CSV/Google Sheets)",
    icon: FileText,
    integrations: [],
  },
  {
    id: "standard",
    name: "Standard",
    description: "Calendar + CRM",
    icon: Calendar,
    integrations: ["Calendly", "Google Calendar", "HubSpot", "Pipedrive", "Google Sheets"],
  },
  {
    id: "commerce",
    name: "Commerce",
    description: "Shopify/Woo + Stripe",
    icon: ShoppingBag,
    integrations: ["Shopify", "WooCommerce", "Stripe"],
  },
  {
    id: "support",
    name: "Support",
    description: "Zendesk/Freshdesk",
    icon: Headphones,
    integrations: ["Zendesk", "Freshdesk", "Intercom"],
  },
];

const allIntegrations = {
  calendar: ["Calendly", "Google Calendar"],
  crm: ["HubSpot", "Pipedrive", "Google Sheets"],
  commerce: ["Shopify", "WooCommerce", "Stripe"],
  support: ["Zendesk", "Freshdesk", "Intercom"],
  others: ["Google Drive", "Mailchimp", "Klaviyo"],
};

const FunnelStep4Integrations = () => {
  const { integrations, updateIntegrations, setCurrentStep } = useFunnelStore();
  const [selectedPreset, setSelectedPreset] = useState(integrations.preset || "");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>(
    integrations.selected || []
  );
  const [decideLater, setDecideLater] = useState(false);

  const handlePresetChange = (presetId: string) => {
    setSelectedPreset(presetId);
    setDecideLater(false);
    const preset = presets.find((p) => p.id === presetId);
    if (preset) {
      setSelectedIntegrations(preset.integrations);
    }
  };

  const toggleIntegration = (integration: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(integration)
        ? prev.filter((i) => i !== integration)
        : [...prev, integration]
    );
  };

  const handleDecideLater = () => {
    setDecideLater(true);
    setSelectedPreset("");
    setSelectedIntegrations([]);
  };

  const handleNext = () => {
    updateIntegrations(decideLater ? "decide-later" : selectedPreset, selectedIntegrations);
    setCurrentStep(5);
  };

  const handleBack = () => {
    updateIntegrations(decideLater ? "decide-later" : selectedPreset, selectedIntegrations);
    setCurrentStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Connect to your tools
        </h2>
        <p className="text-lg text-muted-foreground">
          Pick a preset or decide later. You can adjust during onboarding.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        <RadioGroup value={selectedPreset} onValueChange={handlePresetChange}>
          {presets.map((preset) => {
            const Icon = preset.icon;
            const isSelected = selectedPreset === preset.id;

            return (
              <label
                key={preset.id}
                className={`
                  preset-card flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer
                  transition-all duration-200 hover:shadow-soft
                  ${isSelected 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card hover:border-primary/50'
                  }
                `}
              >
                <RadioGroupItem value={preset.id} className="mt-1" />
                <Icon className={`w-6 h-6 mt-0.5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">{preset.name}</h3>
                  <p className="text-sm text-muted-foreground">{preset.description}</p>
                </div>
              </label>
            );
          })}
        </RadioGroup>
      </div>

      {selectedPreset && !decideLater && (
        <div className="mb-8 animate-fade-in">
          <h3 className="text-sm font-semibold mb-3">Tweak your integrations</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(allIntegrations).map(([category, items]) => (
              items.map((item) => {
                const isSelected = selectedIntegrations.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggleIntegration(item)}
                    className={`
                      integration-chip py-1.5 px-3 rounded-full text-xs font-medium
                      transition-all duration-200 border-2
                      ${isSelected
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card text-foreground border-border hover:border-primary/50'
                      }
                    `}
                  >
                    {item}
                  </button>
                );
              })
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center mb-8">
        <Button
          variant="outline"
          onClick={handleDecideLater}
          className="min-w-[180px]"
        >
          Decide later
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center mb-8 flex items-center justify-center gap-2">
        <Info className="w-3 h-3" />
        We use official APIs or secure webhooks. Specifics are finalized on the kickoff call.
      </p>

      <div className="flex justify-between gap-3 pt-8 pb-4 border-t border-border mt-8">
        <Button
          onClick={handleBack}
          variant="outline"
          size="default"
          className="min-w-[120px]"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          size="default"
          className="min-w-[140px]"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep4Integrations;
