import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need Meta business verification?",
    answer: "Yes, Meta business verification is required to use WhatsApp Business API. Don't worry - we guide you through the entire process step-by-step to ensure smooth verification.",
  },
  {
    question: "Can I use my existing phone number?",
    answer: "In most cases, yes! You can often use your existing business number. If it's not compatible, we'll help you set up a new WhatsApp Business number dedicated to your chatbot.",
  },
  {
    question: "Is the chatbot multilingual?",
    answer: "English is included by default in all plans. Additional languages can be added upon request. Our AI can be trained to communicate fluently in multiple languages to serve your global customer base.",
  },
  {
    question: "Is this GDPR-friendly?",
    answer: "Absolutely. We follow GDPR best practices including consent management, user opt-out capabilities, and data retention policies. We can also customize data handling according to your specific compliance requirements.",
  },
  {
    question: "What if I don't have templates approved?",
    answer: "We prepare 3 WhatsApp message templates for you and submit them for Meta approval. While waiting for approval (typically 1-2 days), we set up your sandbox environment so you can test the chatbot functionality immediately.",
  },
  {
    question: "What's the 24-hour messaging window?",
    answer: "WhatsApp allows businesses to send free-form replies for 24 hours after a user's last message. Outside this window, you must use pre-approved message templates. Our system handles this automatically and alerts you when templates are needed.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to our team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 rounded-xl px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
