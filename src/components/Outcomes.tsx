import { Card } from "@/components/ui/card";
import { Calendar, Zap, Target } from "lucide-react";

const Outcomes = () => {
  const outcomes = [
    {
      icon: Calendar,
      title: "More bookings",
      description: "Turn messages into meetings automatically.",
      stat: "+47% avg booking rate",
      delay: "0ms"
    },
    {
      icon: Zap,
      title: "Faster support",
      description: "Instant answers from your docs; clean handoff to your team.",
      stat: "3x faster response time",
      delay: "100ms"
    },
    {
      icon: Target,
      title: "Stronger follow-ups",
      description: "Approved templates that re-engage leads at scale.",
      stat: "+62% conversion rate",
      delay: "200ms"
    }
  ];

  return (
    <section className="py-24 gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Outcomes you can expect in 30 days
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card 
              key={outcome.title}
              className={`p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 border-2 hover:border-primary ${
                index === 1 ? 'md:translate-y-8' : ''
              }`}
              style={{ animationDelay: outcome.delay }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <outcome.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{outcome.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {outcome.description}
              </p>
              <div className="text-sm text-primary font-semibold">
                {outcome.stat}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
