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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Connect to your tools
        </h2>
        <p className="text-lg text-muted-foreground">
          Pick a preset or decide later. You can adjust during onboarding.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Choose a preset</h3>
        <RadioGroup value={selectedPreset} onValueChange={handlePresetChange}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presets.map((preset) => {
              const Icon = preset.icon;
              const isSelected = selectedPreset === preset.id;

              return (
                <label
                  key={preset.id}
                  className={`
                    preset-card p-5 rounded-xl border-2 cursor-pointer transition-all duration-200
                    hover:shadow-warm
                    ${isSelected 
                      ? 'border-primary bg-primary/5 shadow-soft' 
                      : 'border-border bg-background hover:border-primary/50'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <RadioGroupItem value={preset.id} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
                        `}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold text-lg">{preset.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{preset.description}</p>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </RadioGroup>
      </div>

      {selectedPreset && !decideLater && (
        <div className="mb-8 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Tweak integrations</h3>
          <div className="flex flex-wrap gap-2">
            {Object.values(allIntegrations).flat().map((integration) => {
              const isAvailable = selectedIntegrations.includes(integration);
              const isActive = isAvailable;

              if (!isAvailable && selectedPreset === "light") return null;

              return (
                <button
                  key={integration}
                  onClick={() => toggleIntegration(integration)}
                  className={`
                    integration-chip px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-200 border-2
                    ${isActive 
                      ? 'bg-primary text-primary-foreground border-primary shadow-soft' 
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                    }
                  `}
                >
                  {integration}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mb-8">
        <Button
          onClick={handleDecideLater}
          variant="outline"
          className="w-full md:w-auto"
        >
          Decide later
        </Button>
      </div>

      <div className="flex items-start gap-2 p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground">
        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <p>
          We use official APIs or secure webhooks. Specifics are finalized on the kickoff call.
        </p>
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

export default FunnelStep4Integrations;
