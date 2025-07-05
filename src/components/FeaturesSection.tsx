
import { Card } from "@/components/ui/card";
import { Chrome, Scroll, Shield, Presentation } from "lucide-react";

const features = [
  {
    icon: Chrome,
    title: "Write your script in Chrome",
    description: "No need for external apps. Create and edit your notes directly in your browser with our clean, distraction-free editor.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Scroll,
    title: "Scroll at your own pace",
    description: "Control the speed with manual scrolling or auto-scroll. Pause, resume, or adjust the pace mid-presentation without missing a beat.",
    color: "from-teal to-teal/80"
  },
  {
    icon: Shield,
    title: "100% private & secure",
    description: "No AI, no servers, no data collection. Your notes never leave your browser. Perfect for confidential meetings and sensitive content.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Presentation,
    title: "Perfect for any speaking event",
    description: "Whether it's presentations, interviews, team calls, or conference talks — stay confident with your key points always in view.",
    color: "from-coral to-coral/80"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to stay on track
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            TalkScroll is designed for real professionals who need to deliver flawless presentations, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-[1.02] animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-700 font-semibold">Compatible with:</span>
            <div className="flex items-center space-x-6">
              <span className="text-blue-600 font-semibold">Zoom</span>
              <span className="text-green-600 font-semibold">Google Meet</span>
              <span className="text-purple-600 font-semibold">Microsoft Teams</span>
              <span className="text-gray-600">+ any web meeting platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
