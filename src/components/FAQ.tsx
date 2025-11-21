import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/hooks/useTranslation";

const FAQ = () => {
  const { t } = useTranslation();
  
  const faqs = [
    {
      question: t("faq.metaVerification.question"),
      answer: t("faq.metaVerification.answer")
    },
    {
      question: t("faq.keepNumber.question"),
      answer: t("faq.keepNumber.answer")
    },
    {
      question: t("faq.languages.question"),
      answer: t("faq.languages.answer")
    },
    {
      question: t("faq.reservationsPayments.question"),
      answer: t("faq.reservationsPayments.answer")
    },
    {
      question: t("faq.goLive.question"),
      answer: t("faq.goLive.answer")
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("faq.title")} <span className="relative inline-block">{t("faq.frequentlyAsked")}
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/50 to-transparent -z-10"></span>
            </span>
          </h2>
            <p className="text-xl text-muted-foreground">
              {t("faq.subtitle")}
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
