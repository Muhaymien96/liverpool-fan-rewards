import { Card, CardContent } from "@/components/ui/card";
import { Coins, Users, Gift, Trophy } from "lucide-react";

const steps = [
  {
    icon: Coins,
    number: "01",
    title: "Buy & Hold",
    description: "Purchase $LFC tokens to become eligible for all community games and rewards."
  },
  {
    icon: Users,
    number: "02", 
    title: "Join Matchday Stream",
    description: "Tune into our live matchday streams during every Liverpool game for community fun."
  },
  {
    icon: Gift,
    number: "03",
    title: "Enter Giveaways", 
    description: "Participate in score predictions, goal scorer bets, and participation raffles."
  },
  {
    icon: Trophy,
    number: "04",
    title: "Win Rewards",
    description: "Collect your winnings from creator fees distributed within 24 hours."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to join the Liverpool Fan Coin community and start winning rewards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;