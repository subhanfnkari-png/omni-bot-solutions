import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFunnelStore } from "@/hooks/useFunnelStore";
import { useTranslation } from "@/hooks/useTranslation";

const FunnelStep2Goals = () => {
  const { goals, updateGoals, setCurrentStep } = useFunnelStore();
  const { t } = useTranslation();
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals);
  const [error, setError] = useState("");

  const goalCategories = useMemo(() => {
    const getCategory = (categoryKey: string) => {
      return t(`funnel.step2.categories.${categoryKey}`, { returnObjects: true });
    };
    
    return [
      {
        title: getCategory("staffing")?.title || "",
        goals: getCategory("staffing")?.goals || []
      },
      {
        title: getCategory("compliance")?.title || "",
        goals: getCategory("compliance")?.goals || []
      },
      {
        title: getCategory("telemarketing")?.title || "",
        goals: getCategory("telemarketing")?.goals || []
      },
      {
        title: getCategory("clinics")?.title || "",
        goals: getCategory("clinics")?.goals || []
      },
      {
        title: getCategory("realEstate")?.title || "",
        goals: getCategory("realEstate")?.goals || []
      },
      {
        title: getCategory("ecommerce")?.title || "",
        goals: getCategory("ecommerce")?.goals || []
      },
      {
        title: getCategory("education")?.title || "",
        goals: getCategory("education")?.goals || []
      },
      {
        title: getCategory("beauty")?.title || "",
        goals: getCategory("beauty")?.goals || []
      },
      {
        title: getCategory("other")?.title || "",
        goals: getCategory("other")?.goals || []
      }
    ];
  }, [t]);

  const toggleGoal = (goal: string) => {
    setError("");
    setSelectedGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  };

  const handleNext = () => {
    if (selectedGoals.length === 0) {
      setError(t("funnel.step2.selectAtLeastOne"));
      return;
    }
    updateGoals(selectedGoals);
    setCurrentStep(3);
  };

  const handleBack = () => {
    updateGoals(selectedGoals);
    setCurrentStep(1);
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("funnel.step2.title")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("funnel.step2.subtitle")}
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {goalCategories.map((category) => (
          <div key={category.title} className="goal-section">
            <h3 className="text-sm font-semibold text-primary mb-3">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {category.goals.map((goal) => {
                const isSelected = selectedGoals.includes(goal);

                return (
                  <label
                    key={goal}
                    className={`
                      goal-card p-3 rounded-lg border-2 cursor-pointer transition-all duration-200
                      ${isSelected 
                        ? 'border-primary bg-primary/5 shadow-soft' 
                        : 'border-border bg-card hover:border-primary/50'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleGoal(goal)}
                        className="mt-0.5"
                      />
                      <span className="text-sm font-medium">{goal}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {error && (
        <div className="text-destructive text-sm mb-4 text-center">
          {error}
        </div>
      )}

      <p className="text-xs text-muted-foreground italic text-center mb-6">
        {t("funnel.step2.refineNote")}
      </p>

      <div className="flex justify-between gap-3 pt-8 pb-4 border-t border-border mt-8">
        <Button
          onClick={handleBack}
          variant="outline"
          size="default"
          className="min-w-[120px]"
        >
          {t("funnel.step2.back")}
        </Button>
        <Button
          onClick={handleNext}
          size="default"
          className="min-w-[140px]"
        >
          {t("funnel.step2.next")}
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep2Goals;
