import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const rules = [
  "Must hold $LFC to be eligible",
  "One entry per person per match", 
  "Predictions must be made on X/Twitter in the $LFC community",
  "Predictions close 5 minutes before kickoff",
  "Winners announced live + on Twitter",
  "Rewards distributed shortly after the game is complete"
];

const RulesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Rules & Eligibility
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple and fair rules for all Liverpool Fan Coin holders
          </p>
        </div>
        
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-primary">
              Participation Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-center text-muted-foreground">
                <span className="font-semibold text-primary">Fair Play Guarantee:</span> All games are transparent, 
                community-driven, and designed to celebrate our shared passion for Liverpool FC.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RulesSection;