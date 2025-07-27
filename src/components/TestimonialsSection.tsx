
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Super practical and easy to use. Feels natural to read from, and I love the customization options. Definitely worth trying!",
    name: "Lisa",
    title: "Research Professional",
    location: "🇩🇪"
  },
  {
    quote: "A simple but incredibly useful tool! helped me stay confident and on script during virtual presentations.",
    name: "Bobby",
    title: "Senior Data Engineer",
    location: "🇳🇱"
  },
  {
    quote: "Great for practicing speeches and building confidence. An easy-to-use extension that really boosts delivery.",
    name: "Navid",
    title: "Senior Software Engineer",
    location: "🇸🇪"
  },
  {
    quote: "A game-changer for online meetings. I can focus on conversations while my notes scroll at my pace. Perfect for interviews or presentations!",
    name: "Iman",
    title: "Software Engineer",
    location: "🇩🇪"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by professionals everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our happy remote professionals who've transformed their meeting confidence with TalkScroll.
          </p>
        </div>


        <div className="text-center my-8">
          <div className="inline-flex items-center space-x-2 text-gray-600 flex-nowrap">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <span className="font-semibold">5/5</span>
            <span className="hidden sm:inline-flex">from Chrome Web Store reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-4 md:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal to-coral rounded-full hidden lg:flex items-center justify-center flex-shrink-0">
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
                      {testimonial.title} {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default TestimonialsSection;
