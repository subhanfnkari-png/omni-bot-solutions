import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface FunnelThankYouProps {
  onClose: () => void;
}

const FunnelThankYou = ({ onClose }: FunnelThankYouProps) => {
  const { t } = useTranslation();
  
  const handleReturn = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in py-12">
      <div className="mb-8 flex justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {t("funnel.thankYou.title")}
      </h2>

      <div className="space-y-4 mb-8 text-lg text-muted-foreground">
        <p>
          {t("funnel.thankYou.replyWithin")} <strong className="text-foreground">{t("funnel.thankYou.hours")}</strong> {t("funnel.thankYou.withDetails")}
        </p>
        <p>
          {t("funnel.thankYou.checkEmail")}
        </p>
      </div>

      <Button
        onClick={handleReturn}
        size="lg"
        className="min-w-64 h-14 text-base mb-6"
      >
        {t("funnel.thankYou.returnToHomepage")}
      </Button>

      <p className="text-sm text-muted-foreground">
        {t("funnel.thankYou.needUrgent")}{" "}
        <a href="mailto:hello@example.com" className="text-primary hover:underline">
          {t("funnel.thankYou.replyEmail")}
        </a>{" "}
        {t("funnel.thankYou.andPrioritize")}
      </p>
    </div>
  );
};

export default FunnelThankYou;
