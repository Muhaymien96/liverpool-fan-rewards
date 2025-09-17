import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const fixtures = [
  {
    opponent: "Manchester City",
    date: "2024-01-20",
    time: "17:30",
    competition: "Premier League",
    location: "Anfield"
  },
  {
    opponent: "Chelsea", 
    date: "2024-01-27",
    time: "15:00",
    competition: "Premier League",
    location: "Stamford Bridge"
  },
  {
    opponent: "Arsenal",
    date: "2024-02-03",
    time: "16:30", 
    competition: "Premier League",
    location: "Anfield"
  },
  {
    opponent: "Newcastle United",
    date: "2024-02-10",
    time: "14:00",
    competition: "Premier League", 
    location: "St. James' Park"
  }
];

const FixturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Live Stream Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community livestreams for every Liverpool match and participate in real-time giveaways
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {fixtures.map((fixture, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">
                    vs {fixture.opponent}
                  </CardTitle>
                  <div className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {fixture.competition}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(fixture.date).toLocaleDateString('en-GB', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{fixture.time} GMT • {fixture.location}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Radio className="w-4 h-4 mr-2" />
                    Join Stream
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All times subject to change. Stream links will be posted 30 minutes before kickoff.
          </p>
          <Button variant="secondary" size="lg">
            View Full Fixture List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FixturesSection;