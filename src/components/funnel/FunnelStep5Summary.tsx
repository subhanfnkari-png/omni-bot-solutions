import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, Clock, DollarSign, Calendar } from "lucide-react";
import { useFunnelStore } from "@/hooks/useFunnelStore";

const timeSlots = [
  "Today 9-10 AM",
  "Today 2-3 PM",
  "Today 4-5 PM",
  "Tomorrow 9-10 AM",
  "Tomorrow 2-3 PM",
  "Tomorrow 4-5 PM",
];

const FunnelStep5Summary = () => {
  const store = useFunnelStore();
  const [formData, setFormData] = useState(store.contact);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const updateConsent = (field: keyof typeof formData.consents, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consents: { ...prev.consents, [field]: value },
    }));
    if (errors.consents) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.consents;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Invalid URL (must start with http:// or https://)";
    }

    if (!formData.consents.contactAgreed) {
      newErrors.consents = "You must agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    store.updateContact(formData);
    // Here you would typically send the data to your backend
    console.log("Funnel data:", {
      industry: store.industry,
      industryNote: store.industryNote,
      goals: store.goals,
      features: store.features,
      integrations: store.integrations,
      contact: formData,
      timestamp: new Date().toISOString(),
    });
    
    store.setCurrentStep(6);
  };

  const handleBack = () => {
    store.updateContact(formData);
    store.setCurrentStep(4);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your tailored plan — final details
        </h2>
        <p className="text-lg text-muted-foreground">
          We'll review your selections and send a proposal within 1–2 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Left Column - Summary */}
        <div className="bg-gradient-soft rounded-2xl p-6 md:p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6">What you selected</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">Industry</h4>
              <Badge variant="secondary" className="text-base px-3 py-1">
                {store.industry}
              </Badge>
              {store.industryNote && (
                <p className="text-sm mt-2 text-muted-foreground italic">
                  "{store.industryNote}"
                </p>
              )}
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">Goals</h4>
              <ul className="space-y-2">
                {store.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">Features</h4>
              <ul className="space-y-2">
                {store.features.essentials.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                {store.features.other && (
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="italic">Custom: {store.features.other}</span>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">Integrations</h4>
              {store.integrations.preset === "decide-later" ? (
                <Badge variant="outline">Decide later</Badge>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {store.integrations.selected.map((integration) => (
                    <Badge key={integration} variant="secondary">
                      {integration}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-xl font-bold mb-4">What you'll receive next</h3>
            <ul className="space-y-3">
              {[
                { icon: FileText, text: "A 2–3 page proposal (scope, inclusions, exclusions)" },
                { icon: Clock, text: "A timeline to go live (typically 5–7 days)" },
                { icon: DollarSign, text: "A price band (setup + monthly)" },
                { icon: Calendar, text: "A calendly link to confirm a quick kickoff call" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-muted-foreground italic mt-4">
              This is not a binding quote. We finalize after a 10-min discovery.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full name <span className="text-destructive">*</span>
            </label>
            <Input
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              placeholder="John Doe"
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && (
              <p className="text-destructive text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Work email <span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="john@company.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-destructive text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <Input
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              placeholder="Acme Inc"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Website</label>
            <Input
              value={formData.website}
              onChange={(e) => updateField("website", e.target.value)}
              placeholder="https://example.com"
              className={errors.website ? "border-destructive" : ""}
            />
            {errors.website && (
              <p className="text-destructive text-xs mt-1">{errors.website}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">WhatsApp number</label>
            <Input
              value={formData.whatsapp}
              onChange={(e) => updateField("whatsapp", e.target.value)}
              placeholder="+1 234 567 8900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preferred contact time</label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => updateField("preferredTime", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Notes</label>
            <Textarea
              value={formData.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Deadlines, must-have features, budget range..."
              className="min-h-24"
            />
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <Checkbox
                checked={formData.consents.contactAgreed}
                onCheckedChange={(checked) => updateConsent("contactAgreed", checked as boolean)}
                className="mt-0.5"
              />
              <label className="text-sm leading-relaxed">
                I agree to be contacted about this request via email (and WhatsApp if provided).{" "}
                <span className="text-destructive">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                checked={formData.consents.emailCopy}
                onCheckedChange={(checked) => updateConsent("emailCopy", checked as boolean)}
                className="mt-0.5"
              />
              <label className="text-sm leading-relaxed">
                Send me a copy of this plan by email.
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                checked={formData.consents.nda}
                onCheckedChange={(checked) => updateConsent("nda", checked as boolean)}
                className="mt-0.5"
              />
              <label className="text-sm leading-relaxed">
                I'd like to sign an NDA before sharing internal documents.
              </label>
            </div>

            {errors.consents && (
              <p className="text-destructive text-xs">{errors.consents}</p>
            )}
          </div>

          <Button
            onClick={handleSubmit}
            size="lg"
            className="w-full h-14 text-base"
          >
            Get my tailored plan
          </Button>

          <div className="text-center">
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              Prefer to talk now? Book a 15-min call
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Your information is kept confidential and never sold. You can request deletion or
            export at any time. reCAPTCHA protected.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-4 sticky bottom-0 bg-background/80 backdrop-blur-sm py-4 -mx-4 px-4 md:-mx-8 md:px-8 border-t border-border">
        <Button
          onClick={handleBack}
          variant="outline"
          size="lg"
          className="w-full md:w-auto min-w-32"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep5Summary;
