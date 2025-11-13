import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Setup",
    description: "We analyze your business needs, configure your chatbot, and integrate with your preferred channels.",
    timeline: "Day 1-2",
  },
  {
    number: "02",
    title: "AI Training",
    description: "Upload your FAQs, documentation, and knowledge base. Our AI learns your business inside out.",
    timeline: "Day 2-3",
  },
  {
    number: "03",
    title: "Template Approval",
    description: "We prepare and submit 3 WhatsApp templates for Meta approval while setting up your sandbox for testing.",
    timeline: "Day 3-5",
  },
  {
    number: "04",
    title: "Go Live",
    description: "Launch your chatbot across all channels. Monitor performance with real-time analytics and inbox management.",
    timeline: "Day 5+",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to go-live in just 5 days. We handle everything so you can focus on your business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Vertical line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-border group-hover:bg-primary transition-colors" />
              )}
              
              <div className="flex gap-6 items-start">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping" />
                </div>
                
                <div className="flex-1 bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-all hover:shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
