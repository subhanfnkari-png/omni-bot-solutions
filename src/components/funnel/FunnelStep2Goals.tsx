import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFunnelStore } from "@/hooks/useFunnelStore";

const goalCategories = [
  {
    title: "Staffing & Recruitment",
    goals: ["Pre-screen candidates", "Collect documents/CV", "Book interviews", "Onboarding reminders"]
  },
  {
    title: "Compliance & HSE",
    goals: ["Enroll staff", "Certificate reminders", "Policy updates", "Compliance FAQs"]
  },
  {
    title: "Telemarketing / Inside Sales",
    goals: ["Warm leads", "Qualify interest", "Book sales calls", "Follow-up reminders"]
  },
  {
    title: "Clinics & Dentists",
    goals: ["Triage inquiries", "Book appointments", "Send reminders", "Pre-visit info"]
  },
  {
    title: "Real Estate",
    goals: ["Qualify buyers/tenants", "Schedule viewings", "Property lists", "Post-viewing follow-ups"]
  },
  {
    title: "E-commerce / D2C",
    goals: ["Recover carts", "Product FAQs", "Order tracking", "Promotions"]
  },
  {
    title: "Education / Training",
    goals: ["Capture applications", "Demo classes", "Materials delivery", "Payments & reminders"]
  },
  {
    title: "Beauty / Salons",
    goals: ["Book appointments", "Reduce no-shows", "Upsell packages", "Collect feedback"]
  },
  {
    title: "Other",
    goals: ["Lead capture", "FAQs", "Bookings/meetings", "Payments", "Custom workflow"]
  }
];

const FunnelStep2Goals = () => {
  const { goals, updateGoals, setCurrentStep } = useFunnelStore();
  const [selectedGoals, setSelectedGoals] = useState<string[]>(goals);
  const [error, setError] = useState("");

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
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What outcomes do you want?
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose all that apply.
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
        💡 Your selections can be refined during the onboarding call
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

export default FunnelStep2Goals;
