import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFunnelStore } from "@/hooks/useFunnelStore";

const goalsByIndustry: Record<string, string[]> = {
  staffing: [
    "Pre-screen candidates",
    "Collect documents/CV",
    "Book interviews",
    "Onboarding reminders"
  ],
  compliance: [
    "Enroll staff",
    "Certificate reminders",
    "Policy updates",
    "Compliance FAQs"
  ],
  telemarketing: [
    "Warm leads",
    "Qualify interest",
    "Book sales calls",
    "Follow-up reminders"
  ],
  clinics: [
    "Triage inquiries",
    "Book appointments",
    "Send reminders",
    "Pre-visit info"
  ],
  realestate: [
    "Qualify buyers/tenants",
    "Schedule viewings",
    "Property lists",
    "Post-viewing follow-ups"
  ],
  ecommerce: [
    "Recover carts",
    "Product FAQs",
    "Order tracking",
    "Promotions"
  ],
  education: [
    "Capture applications",
    "Demo classes",
    "Materials delivery",
    "Payments & reminders"
  ],
  beauty: [
    "Book appointments",
    "Reduce no-shows",
    "Upsell packages",
    "Collect feedback"
  ],
  other: [
    "Lead capture",
    "FAQs",
    "Bookings/meetings",
    "Payments",
    "Custom workflow"
  ],
};

const FunnelStep2Goals = () => {
  const { industry, goals, updateGoals, setCurrentStep } = useFunnelStore();
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals);
  const [error, setError] = useState("");

  const availableGoals = goalsByIndustry[industry] || goalsByIndustry.other;

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
      setError("Please select at least one goal");
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
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What outcomes do you want?
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose all that apply.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {availableGoals.map((goal) => {
          const isSelected = selectedGoals.includes(goal);

          return (
            <label
              key={goal}
              className={`
                goal-card p-5 rounded-xl border-2 cursor-pointer transition-all duration-200
                hover:shadow-warm
                ${isSelected 
                  ? 'border-primary bg-primary/5 shadow-soft' 
                  : 'border-border bg-background hover:border-primary/50'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => toggleGoal(goal)}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-base">{goal}</h4>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {error && (
        <div className="text-destructive text-sm mb-4 text-center">
          {error}
        </div>
      )}

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

export default FunnelStep2Goals;
