import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need $LFC to participate?",
    answer: "Yes! You must hold Liverpool Fan Coin ($LFC) tokens to be eligible for any games, predictions, or raffles. This ensures our community rewards go to true supporters and holders."
  },
  {
    question: "Will you get Dex?",
    answer: "Yes. Dex will be paid directly from creator fees as this is a community driven project and self-sustaining."
  },
  {
    question: "How do I enter predictions and games?",
    answer: "Join our live matchday streams before each Liverpool game. Predictions are made on X/Twitter. Make sure to get them in before the 5-minute cutoff and include your SOL wallet address!"
  },
  {
    question: "Where are rewards sent?",
    answer: "All rewards are distributed directly to the wallet address that holds your $LFC tokens. Payments are made within an hour of each match,  amount depends on creator fees accumulated at that point."
  },
  {
    question: "What if I miss the stream?",
    answer: "Don't worry! We post highlights and winner announcements on our Twitter/X account. Future streams are always announced in advance on all our social channels so you never miss out."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Liverpool Fan Coin
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover:shadow-elegant transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;