import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface FunnelProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FunnelProgress = ({ currentStep, totalSteps }: FunnelProgressProps) => {
  const { t } = useTranslation();
  
  const stepLabels = [
    t("funnel.progress.industry"),
    t("funnel.progress.goals"),
    t("funnel.progress.features"),
    t("funnel.progress.integrations"),
    t("funnel.progress.summary")
  ];
  return (
    <div className="w-full bg-background/50 backdrop-blur-sm border-b border-border py-6 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isActive = stepNumber === currentStep;
            const isFuture = stepNumber > currentStep;

            return (
              <div key={stepNumber} className="flex items-center flex-1">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold text-sm md:text-base
                      transition-all duration-300
                      ${isCompleted ? 'bg-primary text-primary-foreground shadow-warm' : ''}
                      ${isActive ? 'bg-primary text-primary-foreground shadow-warm ring-4 ring-primary/20' : ''}
                      ${isFuture ? 'bg-muted text-muted-foreground' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  <span className={`
                    hidden md:block mt-2 text-xs font-medium
                    ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                  `}>
                    {stepLabels[index]}
                  </span>
                </div>

                {/* Connecting Line */}
                {index < totalSteps - 1 && (
                  <div className="flex-1 h-0.5 mx-2 md:mx-4">
                    <div
                      className={`
                        h-full transition-all duration-300
                        ${stepNumber < currentStep ? 'bg-primary' : 'bg-muted'}
                      `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FunnelProgress;
