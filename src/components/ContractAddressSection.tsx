import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const CONTRACT_ADDRESS = "7xKXtg2CW9GELp3hnBv1FXx8CG3ztFn7TnedWH5QEPs";

const ContractAddressSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    toast({
      title: "Contract Address Copied!",
      description: "The contract address has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contract Address
          </h2>
          <p className="text-lg text-muted-foreground">
            Official Liverpool Fan Coin (LFC) contract address on Solana
          </p>
        </div>
        
        <Card className="border-2 border-primary/20 bg-gradient-subtle">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">
              $LFC Token Contract
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4 border">
              <div className="text-center space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Contract Address (CA)
                </p>
                <div className="font-mono text-sm md:text-base bg-background rounded border p-3 break-all">
                  {CONTRACT_ADDRESS}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="outline" 
                onClick={copyToClipboard}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copied!" : "Copy Address"}
              </Button>
              <Button variant="default" className="flex items-center gap-2" asChild>
                <a 
                  href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Solscan
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                ⚠️ Always verify the contract address before making any transactions
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContractAddressSection;