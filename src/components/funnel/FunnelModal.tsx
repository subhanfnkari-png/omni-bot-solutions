import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useFunnelStore } from "@/hooks/useFunnelStore";
import { useTranslation } from "@/hooks/useTranslation";
import FunnelProgress from "./FunnelProgress";
import FunnelStep1Industry from "./FunnelStep1Industry";
import FunnelStep2Goals from "./FunnelStep2Goals";
import FunnelStep3Features from "./FunnelStep3Features";
import FunnelStep4Integrations from "./FunnelStep4Integrations";
import FunnelStep5Summary from "./FunnelStep5Summary";
import FunnelThankYou from "./FunnelThankYou";

interface FunnelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FunnelModal = ({ open, onOpenChange }: FunnelModalProps) => {
  const { currentStep, resetFunnel } = useFunnelStore();
  const { t } = useTranslation();

  useEffect(() => {
    // Reset funnel when modal closes
    if (!open) {
      setTimeout(() => resetFunnel(), 300);
    }
  }, [open, resetFunnel]);

  const handleClose = () => {
    if (currentStep > 1 && currentStep < 6) {
      const confirmed = window.confirm(
        t("funnel.modal.closeConfirm")
      );
      if (!confirmed) return;
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="funnel-modal-content max-w-none w-full h-full p-0 gap-0">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">{t("funnel.modal.close")}</span>
        </button>

        {/* Progress Bar - Hide on Thank You screen */}
        {currentStep < 6 && (
          <FunnelProgress currentStep={currentStep} totalSteps={5} />
        )}

        {/* Scrollable Content */}
        <div className="funnel-content-scrollable overflow-y-auto h-full px-4 md:px-8 py-8">
          {currentStep === 1 && <FunnelStep1Industry />}
          {currentStep === 2 && <FunnelStep2Goals />}
          {currentStep === 3 && <FunnelStep3Features />}
          {currentStep === 4 && <FunnelStep4Integrations />}
          {currentStep === 5 && <FunnelStep5Summary />}
          {currentStep === 6 && <FunnelThankYou onClose={() => onOpenChange(false)} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FunnelModal;
