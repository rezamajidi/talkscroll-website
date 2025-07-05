
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TalkScroll saved my quarterly presentation. I was able to stay focused on my key points without constantly looking down at my notes. Game changer!",
    name: "Sarah Chen",
    title: "Product Manager",
    company: "TechFlow Inc"
  },
  {
    quote: "As someone who does a lot of client presentations, having my talking points scroll smoothly while I present has boosted my confidence tremendously.",
    name: "Marcus Rodriguez",
    title: "Sales Director",
    company: "CloudSync Solutions"
  },
  {
    quote: "The privacy aspect is huge for us. We handle sensitive client data, and knowing our notes stay local gives us peace of mind during confidential meetings.",
    name: "Dr. Emily Watson",
    title: "Legal Consultant",
    company: "Watson & Associates"
  },
  {
    quote: "I use TalkScroll for all my team standups and client check-ins. It's so simple but incredibly effective. My team even started asking what my secret was!",
    name: "James Park",
    title: "Engineering Manager",
    company: "StartupX"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by professionals everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of remote professionals who've transformed their meeting confidence with TalkScroll.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal to-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-teal font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span>from 500+ Chrome Web Store reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
