import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface FunnelThankYouProps {
  onClose: () => void;
}

const FunnelThankYou = ({ onClose }: FunnelThankYouProps) => {
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
        Plan received!
      </h2>

      <div className="space-y-4 mb-8 text-lg text-muted-foreground">
        <p>
          We'll reply within <strong className="text-foreground">1–2 hours</strong> with scope,
          timeline, and a price band.
        </p>
        <p>
          Check your email for a confirmation and next steps.
        </p>
      </div>

      <Button
        onClick={handleReturn}
        size="lg"
        className="min-w-64 h-14 text-base mb-6"
      >
        Return to homepage
      </Button>

      <p className="text-sm text-muted-foreground">
        Need it urgent?{" "}
        <a href="mailto:hello@example.com" className="text-primary hover:underline">
          Reply to the confirmation email
        </a>{" "}
        and we'll prioritize.
      </p>
    </div>
  );
};

export default FunnelThankYou;
