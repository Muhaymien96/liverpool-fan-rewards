import { Button } from "@/components/ui/button";
import { ExternalLink, Radio, Twitter, MessageCircle, Users } from "lucide-react";

const socialLinks = [
  {
    name: "Livestream",
    icon: Radio,
    href: "#",
    description: "Join our matchday streams"
  },
  {
    name: "Pump.fun",
    icon: ExternalLink,
    href: "#", 
    description: "Buy $LFC tokens"
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    href: "#",
    description: "Follow for updates"
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "#",
    description: "Join the chat"
  },
  {
    name: "Discord",
    icon: Users,
    href: "#",
    description: "Community hub"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Liverpool Fan Coin Community
          </h2>
          <p className="text-white/80 text-lg">
            Connect with fellow Reds and never miss a match or reward opportunity
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="community" 
              className="flex flex-col items-center gap-3 h-auto p-6 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary group"
              asChild
            >
              <a href={link.href} className="text-center">
                <link.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold">{link.name}</div>
                  <div className="text-sm opacity-80 group-hover:opacity-100">
                    {link.description}
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-2xl font-bold text-white mb-2">
            Liverpool Fan Coin — YNWA
          </p>
          <p className="text-white/60">
            You'll Never Walk Alone. Built by fans, for fans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;