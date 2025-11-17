import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do we need Meta Business verification?",
      answer: "Yes— we guide you step by step through the Meta Business verification process. Our team will provide clear documentation and support to ensure smooth approval."
    },
    {
      question: "Can we keep our current number?",
      answer: "Often yes; we can migrate your existing WhatsApp Business number. If migration isn't possible, we'll set up a new WhatsApp Business API (WABA) account for you."
    },
    {
      question: "How many languages?",
      answer: "English by default; others on request. We can configure your chatbot to support multiple languages based on your business needs."
    },
    {
      question: "Bookings & payments?",
      answer: "Yes—Calendly/Google Calendar and Stripe. We integrate seamlessly with your existing booking and payment systems to enable automated scheduling and transactions."
    },
    {
      question: "Timeline to go live?",
      answer: "Typically 5–7 days for the first flow + campaign. This includes setup, configuration, testing, and your first message template approval from Meta."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Frequently <span className="relative inline-block">asked
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span> questions
          </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about getting started
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
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
