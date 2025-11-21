import { Card } from "@/components/ui/card";
import { Calendar, Zap, Target } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Outcomes = () => {
  const { t } = useTranslation();
  
  const outcomes = [
    {
      icon: Calendar,
      title: t("outcomes.moreBookings.title"),
      description: t("outcomes.moreBookings.description"),
      stat: t("outcomes.moreBookings.stat"),
      statLabel: t("outcomes.moreBookings.statLabel"),
      delay: "0ms"
    },
    {
      icon: Zap,
      title: t("outcomes.fasterSupport.title"),
      description: t("outcomes.fasterSupport.description"),
      stat: t("outcomes.fasterSupport.stat"),
      statLabel: t("outcomes.fasterSupport.statLabel"),
      delay: "100ms"
    },
    {
      icon: Target,
      title: t("outcomes.moreEffectiveFollowUps.title"),
      description: t("outcomes.moreEffectiveFollowUps.description"),
      stat: t("outcomes.moreEffectiveFollowUps.stat"),
      statLabel: t("outcomes.moreEffectiveFollowUps.statLabel"),
      delay: "200ms"
    }
  ];

  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {t("outcomes.title")} <span className="relative inline-block">{t("outcomes.in30Days")}
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card 
              key={outcome.title}
              className={`relative p-8 lg:p-10 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 border-2 hover:border-primary bg-white ${
                index === 1 ? 'md:translate-y-8' : ''
              }`}
              style={{ animationDelay: outcome.delay }}
            >
              {/* Large stat number at top right */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-primary/10">
                {outcome.stat}
              </div>

              {/* Icon with gradient background */}
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 shadow-soft">
                <outcome.icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">{outcome.title}</h3>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6 relative z-10">
                {outcome.description}
              </p>

              {/* Stat badge at bottom */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-2xl font-bold text-primary">{outcome.stat}</span>
                <span className="text-sm font-medium text-foreground">{outcome.statLabel}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
