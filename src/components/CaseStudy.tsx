import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 px-4 py-2">
            REAL CLIENT, REAL RESULTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How a Boutique Law Firm Added
            <br />
            <span className="gradient-text">€47,000 Monthly Revenue</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            In just 90 days without hiring a single new employee
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Story Card */}
          <Card className="bg-white/5 border-2 border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-10 md:p-12">
              <div className="flex gap-4 mb-8">
                <Quote className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-medium">
                    "Before this AI chatbot, potential clients would fill out our contact form and wait 24-48 hours 
                    for a response. Most never heard back because we were swamped. Now? The AI engages them in 
                    WhatsApp instantly, qualifies their case, books consultations, and sends reminders. We went 
                    from 23 qualified leads per month to 87. Same ad spend. Same team size."
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div>
                      <div className="text-white font-bold text-lg">Marco Albertini</div>
                      <div className="text-white/60">Managing Partner, Albertini & Associates</div>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30 w-fit">
                      Law Firm · Milan, Italy
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 border-2">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-5xl font-bold text-white mb-2">3.8x</div>
                <div className="text-white/80 font-medium">Lead Volume Increase</div>
                <div className="text-white/60 text-sm mt-1">From 23 to 87/month</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 border-2">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-5xl font-bold text-white mb-2">61%</div>
                <div className="text-white/80 font-medium">Conversion Rate</div>
                <div className="text-white/60 text-sm mt-1">Up from 22%</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30 border-2">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-5xl font-bold text-white mb-2">€47K</div>
                <div className="text-white/80 font-medium">Added Monthly Revenue</div>
                <div className="text-white/60 text-sm mt-1">Avg case value €887</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30 border-2">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 font-medium">Always Available</div>
                <div className="text-white/60 text-sm mt-1">Zero overtime costs</div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="bg-white/5 border-2 border-white/10 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                The 90-Day Transformation
              </h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="font-bold text-white text-lg mb-1">Week 1-2: Setup & Training</div>
                    <div className="text-white/70">
                      Uploaded 15 years of case documents, FAQs, and service descriptions. AI trained on 
                      legal terminology and client qualification criteria. WhatsApp Business integration completed.
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="font-bold text-white text-lg mb-1">Week 3-4: Launch & Optimization</div>
                    <div className="text-white/70">
                      Went live on WhatsApp and website. Immediate 40% increase in engagement rate. 
                      Refined conversation flows based on first 200 interactions. Added Instagram integration.
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-green-400 font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="font-bold text-white text-lg mb-1">Month 2-3: Scale & Accelerate</div>
                    <div className="text-white/70">
                      Lead volume doubled. Conversion rate jumped from 22% to 61%. Added automated follow-ups 
                      and appointment reminders. ROI reached 847% by day 90.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Insight */}
          <div className="mt-12 text-center">
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              <span className="text-accent font-semibold">The Secret?</span> The AI doesn't just 
              answer questions—it <span className="text-white font-semibold">qualifies intent</span>, 
              creates urgency, and books consultations while competitors are still reading emails 
              from 48 hours ago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
