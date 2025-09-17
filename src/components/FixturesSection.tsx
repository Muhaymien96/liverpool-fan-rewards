"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fixturesData } from "@/lib/fixturesData";

const FixturesSection = () => {
  const [showSeason, setShowSeason] = useState(false);

  // Prepare and sort upcoming fixtures by date
  const upcomingFixtures = fixturesData[0]?.upcoming ?? [];
  const sortedFixtures = upcomingFixtures
    .filter(f => new Date(f.starting_at) >= new Date()) // only upcoming
    .sort((a, b) => new Date(a.starting_at).getTime() - new Date(b.starting_at).getTime());

  const nextFixtures = sortedFixtures.slice(0, 5);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Upcoming Fixtures
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Keep track of Liverpool's next matches as part of the livestream schedule.
          </p>
        </div>

        <div className="space-y-4">
          {nextFixtures.map((fixture, idx) => {
            const liverpoolParticipant = fixture.participants.find(p => p.id === 8);
            const opponent = fixture.participants.find(p => p.id !== 8);
            const isHome = liverpoolParticipant?.meta.location === "home";

            return (
              <Card key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between hover:shadow-lg transition-all p-4">
                <div className="flex flex-col mb-2 md:mb-0">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {isHome ? `vs ${opponent?.name}` : `@ ${opponent?.name}`}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-gray-500 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(fixture.starting_at).toLocaleDateString("en-GB", {
                          weekday: "short",
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(fixture.starting_at).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })} GMT</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {fixture.league.name}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => setShowSeason(!showSeason)}>
            {showSeason ? "Hide Season Schedule" : "Show Full Season Schedule"}
          </Button>
        </div>

        {showSeason && (
          <div className="mt-8 space-y-4">
            {sortedFixtures.map((fixture, idx) => {
              const liverpoolParticipant = fixture.participants.find(p => p.id === 8);
              const opponent = fixture.participants.find(p => p.id !== 8);
              const isHome = liverpoolParticipant?.meta.location === "home";

              return (
                <Card key={idx} className="p-4 hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong>{isHome ? `vs ${opponent?.name}` : `@ ${opponent?.name}`}</strong>
                      <div className="text-gray-500 text-sm">
                        {new Date(fixture.starting_at).toLocaleDateString("en-GB")} {new Date(fixture.starting_at).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {fixture.league.name}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FixturesSection;
