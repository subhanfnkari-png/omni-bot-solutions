import { Card } from "@/components/ui/card";
import { Quote, TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Success Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how boutique law firms increased revenue by €45,000/month with our AI chatbot.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Quote Card */}
          <Card className="p-8 md:p-12 shadow-soft mb-8 bg-secondary/30 border-2 border-secondary">
            <Quote className="w-12 h-12 text-accent mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-balance leading-relaxed">
              "We were skeptical at first, but within 90 days, our chatbot generated €45,000 in additional monthly revenue. It's like having a sales team that never sleeps."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary" />
              <div>
                <p className="font-semibold text-lg">Sarah Johnson</p>
                <p className="text-muted-foreground">Managing Partner, Law Firm</p>
              </div>
            </div>
          </Card>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 shadow-soft border-2 hover:border-primary transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">3.2x</p>
              <p className="text-sm text-muted-foreground">Lead volume increase</p>
            </Card>

            <Card className="p-6 shadow-soft border-2 hover:border-accent transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent mb-2">68%</p>
              <p className="text-sm text-muted-foreground">Conversion rate</p>
            </Card>

            <Card className="p-6 shadow-soft border-2 hover:border-success transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <p className="text-3xl font-bold text-success mb-2">€45K</p>
              <p className="text-sm text-muted-foreground">Added monthly revenue</p>
            </Card>

            <Card className="p-6 shadow-soft border-2 hover:border-primary transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Always available</p>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-6">90-Day Transformation</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Days 1-30: Setup & Training</h4>
                  <p className="text-muted-foreground">Chatbot configured and trained on firm's 200+ FAQs and case history. Meta business verification completed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Days 31-60: Optimization</h4>
                  <p className="text-muted-foreground">A/B tested conversation flows. Refined lead qualification process. Added human handover for complex cases.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success flex items-center justify-center font-bold text-success-foreground">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Days 61-90: Scale & Results</h4>
                  <p className="text-muted-foreground">Expanded to 4 platforms. Generated 156 qualified leads. Converted 68% into consultations worth €45K MRR.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;