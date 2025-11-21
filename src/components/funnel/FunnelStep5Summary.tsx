import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, Clock, DollarSign, Calendar } from "lucide-react";
import { useFunnelStore } from "@/hooks/useFunnelStore";
import { useTranslation } from "@/hooks/useTranslation";

const FunnelStep5Summary = () => {
  const store = useFunnelStore();
  const { t } = useTranslation();
  const [formData, setFormData] = useState(store.contact);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const timeSlots = useMemo(() => [
    t("funnel.step5.timeSlots.today9_10"),
    t("funnel.step5.timeSlots.today14_15"),
    t("funnel.step5.timeSlots.today16_17"),
    t("funnel.step5.timeSlots.tomorrow9_10"),
    t("funnel.step5.timeSlots.tomorrow14_15"),
    t("funnel.step5.timeSlots.tomorrow16_17"),
  ], [t]);

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
      newErrors.fullName = t("funnel.step5.errors.fullNameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("funnel.step5.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("funnel.step5.errors.emailInvalid");
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = t("funnel.step5.errors.websiteInvalid");
    }

    if (!formData.consents.contactAgreed) {
      newErrors.consents = t("funnel.step5.errors.consentRequired");
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
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("funnel.step5.title")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("funnel.step5.subtitle")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Left Column - Summary */}
        <div className="bg-gradient-soft rounded-2xl p-5 md:p-6 border border-border">
          <h3 className="text-2xl font-bold mb-6">{t("funnel.step5.whatYouSelected")}</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t("funnel.step5.industry")}</h4>
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
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t("funnel.step5.goals")}</h4>
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
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t("funnel.step5.features")}</h4>
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
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">{t("funnel.step5.integrations")}</h4>
              {store.integrations.preset === "decide-later" ? (
                <Badge variant="outline">{t("funnel.step5.decideLater")}</Badge>
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
            <h3 className="text-xl font-bold mb-4">{t("funnel.step5.whatYoullReceive")}</h3>
            <ul className="space-y-3">
              {[
                { icon: FileText, text: t("funnel.step5.proposal") },
                { icon: Clock, text: t("funnel.step5.timeline") },
                { icon: DollarSign, text: t("funnel.step5.priceBand") },
                { icon: Calendar, text: t("funnel.step5.calendlyLink") },
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
              {t("funnel.step5.notBinding")}
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("funnel.step5.fullName")} <span className="text-destructive">{t("funnel.step5.required")}</span>
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
              {t("funnel.step5.workEmail")} <span className="text-destructive">{t("funnel.step5.required")}</span>
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
            <label className="block text-sm font-medium mb-2">
              {t("funnel.step5.company")} <span className="text-xs text-muted-foreground">{t("funnel.step5.optional")}</span>
            </label>
            <Input
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              placeholder="Acme Inc"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              {t("funnel.step5.website")} <span className="text-xs text-muted-foreground">{t("funnel.step5.optional")}</span>
            </label>
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
            <label className="block text-sm font-medium mb-2">
              {t("funnel.step5.whatsappNumber")} <span className="text-xs text-muted-foreground">{t("funnel.step5.optional")}</span>
            </label>
            <Input
              value={formData.whatsapp}
              onChange={(e) => updateField("whatsapp", e.target.value)}
              placeholder="+1 234 567 8900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t("funnel.step5.preferredContactTime")}</label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => updateField("preferredTime", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("funnel.step5.selectTimeSlot")} />
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
            <label className="block text-sm font-medium mb-2">{t("funnel.step5.notes")}</label>
            <Textarea
              value={formData.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder={t("funnel.step5.notesPlaceholder")}
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
                {t("funnel.step5.consentContact")}{" "}
                <span className="text-destructive">{t("funnel.step5.required")}</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                checked={formData.consents.emailCopy}
                onCheckedChange={(checked) => updateConsent("emailCopy", checked as boolean)}
                className="mt-0.5"
              />
              <label className="text-sm leading-relaxed">
                {t("funnel.step5.consentEmailCopy")}
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                checked={formData.consents.nda}
                onCheckedChange={(checked) => updateConsent("nda", checked as boolean)}
                className="mt-0.5"
              />
              <label className="text-sm leading-relaxed">
                {t("funnel.step5.consentNDA")}
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
            {t("funnel.step5.getTailoredPlan")}
          </Button>

          <div className="text-center">
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              {t("funnel.step5.preferToTalk")}
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            {t("funnel.step5.privacyNote")}
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-3 pt-8 pb-4 border-t border-border mt-8">
        <Button
          onClick={handleBack}
          variant="outline"
          size="default"
          className="min-w-[120px]"
        >
          {t("funnel.step5.back")}
        </Button>
        <Button
          onClick={handleSubmit}
          size="default"
          className="min-w-[140px]"
        >
          {t("funnel.step5.getTailoredPlan")}
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep5Summary;
