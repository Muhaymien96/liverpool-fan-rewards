import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-liverpool.jpg";

const CONTRACT_ADDRESS = "8vSxyjr1tCkxYdvqG8T1vR3aNAoxZoBSPxBfpUHipump";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Liverpool FC fans celebrating at Anfield stadium" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Liverpool Fan Coin
          <span className="block text-2xl md:text-4xl lg:text-5xl text-white/90 font-medium mt-2">
            ($LFC)
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-semibold">
          The Fan-First Memecoin
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Watch Liverpool matches, join livestreams, predict scores, and win rewards from creator fees.
        </p>
        
        <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-2xl mx-auto">
          <p className="text-white/90 text-sm mb-2 font-medium">Contract Address (CA):</p>
          <p className="text-white font-mono text-xs md:text-sm break-all bg-black/20 p-2 rounded border">
            {CONTRACT_ADDRESS}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="community" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
            <a href="https://x.com/i/communities/1968229130098413572" target="_blank" rel="noopener noreferrer">
              Join the Community
            </a>
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Buy on Pump.fun
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;