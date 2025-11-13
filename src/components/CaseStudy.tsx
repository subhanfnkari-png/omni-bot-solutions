import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI chatbot transformed customer engagement for a growing e-commerce business.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 overflow-hidden">
            <div className="gradient-hero p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">European E-Commerce Leader</h3>
              <p className="text-white/90 text-lg">Fashion & Lifestyle Retail | 50K+ monthly visitors</p>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                  <div className="text-4xl font-bold text-success mb-2">+285%</div>
                  <div className="text-muted-foreground">Lead Conversion Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">12K+</div>
                  <div className="text-muted-foreground">Conversations/Month</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">-67%</div>
                  <div className="text-muted-foreground">Response Time</div>
                </div>
              </div>
              
              <div className="space-y-4 bg-section rounded-xl p-6">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">"Before implementing the AI chatbot, our customer service team was overwhelmed with repetitive questions about shipping, returns, and product availability."</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Now, 94% of customer inquiries are handled instantly by the chatbot across WhatsApp, our website, and Instagram. Our team focuses on complex issues while the AI handles the rest. Customer satisfaction scores increased by 42%, and we're capturing leads even outside business hours.
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/20" />
                  <div>
                    <div className="font-semibold">Marco Rossi</div>
                    <div className="text-sm text-muted-foreground">Head of Customer Experience</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
