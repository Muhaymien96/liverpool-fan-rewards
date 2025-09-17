import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Goal, Ticket } from "lucide-react";

const games = [
  {
    icon: Target,
    title: "Score Prediction",
    subtitle: "Main Event",
    description: "Predict the exact final score of Liverpool matches. The more accurate, the bigger the reward from our creator fee pool.",
    highlight: "Main Event"
  },
  {
    icon: Goal,
    title: "Goal Scorer Bonus",
    subtitle: "Player Predictions", 
    description: "Pick who will score for Liverpool during the match. Multiple winners share the bonus pot from creator fees.",
    highlight: "Bonus Game"
  },
  {
    icon: Ticket,
    title: "Participation Raffle",
    subtitle: "Everyone Wins",
    description: "Simply join the stream and hold $LFC to be entered. Random winners selected every match for guaranteed fun.",
    highlight: "Weekly Draw"
  }
];

const GamesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Matchday Games & Rules
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three exciting ways to win rewards during every Liverpool match
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {games.map((game) => (
            <Card key={game.title} className="relative overflow-hidden group hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <game.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {game.title}
                </CardTitle>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {game.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {game.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-hero text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Bonus Surprises</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Extra rewards for special moments: clean sheets, last-minute winners, VAR drama, and other magical Liverpool moments that make us all believe. 
            <span className="font-semibold"> YNWA! </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;