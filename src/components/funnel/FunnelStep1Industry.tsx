import { useState } from "react";
import { Briefcase, Shield, Phone, Stethoscope, Home, ShoppingCart, GraduationCap, Scissors, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useFunnelStore } from "@/hooks/useFunnelStore";

const industries = [
  {
    id: "staffing",
    name: "Staffing & Recruitment",
    description: "Pre-screen, collect CVs, book interviews",
    icon: Briefcase,
  },
  {
    id: "compliance",
    name: "Compliance & HSE",
    description: "Enroll courses, chase expiring certificates",
    icon: Shield,
  },
  {
    id: "telemarketing",
    name: "Telemarketing / Inside Sales",
    description: "Warm leads, qualify, book calls",
    icon: Phone,
  },
  {
    id: "clinics",
    name: "Clinics & Dentists",
    description: "Triage, bookings, reminders",
    icon: Stethoscope,
  },
  {
    id: "realestate",
    name: "Real Estate",
    description: "Qualify leads, schedule viewings",
    icon: Home,
  },
  {
    id: "ecommerce",
    name: "E-commerce / D2C",
    description: "Recover carts, track orders",
    icon: ShoppingCart,
  },
  {
    id: "education",
    name: "Education / Training",
    description: "Apply, demo class, enroll",
    icon: GraduationCap,
  },
  {
    id: "beauty",
    name: "Beauty / Salons",
    description: "Bookings, deposits, no-shows",
    icon: Scissors,
  },
  {
    id: "other",
    name: "Other",
    description: "Something else? Tell us your goal",
    icon: MoreHorizontal,
  },
];

const FunnelStep1Industry = () => {
  const { industry, industryNote, updateIndustry, setCurrentStep } = useFunnelStore();
  const [selectedIndustry, setSelectedIndustry] = useState(industry);
  const [note, setNote] = useState(industryNote);

  const handleSelect = (id: string) => {
    setSelectedIndustry(id);
    if (id !== "other") {
      setNote("");
    }
  };

  const handleNext = () => {
    updateIndustry(selectedIndustry, note);
    setCurrentStep(2);
  };

  const isValid = selectedIndustry && (selectedIndustry !== "other" || note.trim().length > 0);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Which best describes your business?
        </h2>
        <p className="text-lg text-muted-foreground">
          We'll tailor the next steps to your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {industries.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedIndustry === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`
                industry-card p-5 rounded-xl border-2 text-left transition-all duration-200
                ${isSelected 
                  ? 'border-primary bg-primary/5 shadow-soft' 
                  : 'border-border bg-card hover:border-primary/50'
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-3
                ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
              `}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-base mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </button>
          );
        })}
      </div>

      {selectedIndustry === "other" && (
        <div className="mb-8 animate-fade-in">
          <label className="block text-sm font-medium mb-2">
            Describe your business and the outcome you want in the first 30 days
          </label>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g., answer common questions, collect leads to Google Sheets, book calls Tue/Thu only..."
            className="min-h-20"
            maxLength={500}
          />
          <span className="text-xs text-muted-foreground float-right mt-1">
            {note.length}/500
          </span>
        </div>
      )}

      <div className="flex justify-end gap-3 pt-8 pb-4 border-t border-border mt-8">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          size="default"
          className="min-w-[140px]"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FunnelStep1Industry;
