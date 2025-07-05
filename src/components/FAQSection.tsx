
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is TalkScroll really free?",
    answer: "Yes! TalkScroll is completely free to use. No hidden costs, no premium tiers, no subscriptions. We believe everyone should have access to professional presentation tools."
  },
  {
    question: "Does TalkScroll work with all video conferencing platforms?",
    answer: "TalkScroll works with any web-based meeting platform including Zoom (browser version), Google Meet, Microsoft Teams, WebEx, and many others. It runs as a Chrome extension, so it overlays on any website."
  },
  {
    question: "Is my data safe and private?",
    answer: "Absolutely. TalkScroll runs entirely in your browser - no data is sent to our servers or any third party. Your notes, scripts, and meeting content stay completely private on your device. We don't use AI processing or cloud storage."
  },
  {
    question: "Can I customize the scrolling speed and appearance?",
    answer: "Yes! You can control scrolling speed, pause/resume at any time, and customize the text size, background opacity, and positioning of the teleprompter overlay to fit your preferences and meeting setup."
  },
  {
    question: "What if I need help or have technical issues?",
    answer: "We provide support through our GitHub repository where you can report issues, request features, or get help from our community. We're also available via email for any urgent concerns."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TalkScroll
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="space-x-4">
            <a 
              href="mailto:support@talkscroll.app" 
              className="text-teal hover:text-teal/80 font-semibold underline"
            >
              Email us
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="https://github.com/talkscroll/issues" 
              className="text-teal hover:text-teal/80 font-semibold underline"
            >
              GitHub Issues
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
