
import { Monitor, Scroll, Users } from "lucide-react";

const LivePreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See TalkScroll in action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's exactly how TalkScroll looks when you're in a meeting — seamless, professional, and completely private.
          </p>
        </div>

        <div className="relative">
          {/* Browser mockup */}
          <div className="bg-gray-800 rounded-t-2xl p-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="ml-4 flex-1 bg-gray-700 rounded px-3 py-1 text-sm text-gray-300">
                meet.google.com/abc-defg-hij
              </div>
            </div>
          </div>
          
          {/* Meeting interface mockup */}
          <div className="bg-black rounded-b-2xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Participant videos */}
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <Monitor className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            
            {/* TalkScroll overlay */}
            <div className="absolute right-8 top-8 w-80 h-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-teal/20 animate-slide-in-right">
              <div className="p-4 border-b border-gray-200 flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">TalkScroll</span>
              </div>
              
              <div className="p-4 space-y-3 text-sm text-gray-700 leading-relaxed">
                <div className="bg-coral/10 p-3 rounded-lg border-l-4 border-coral">
                  <strong>Opening:</strong> Thank you all for joining today's quarterly review...
                </div>
                
                <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <strong>Key Points:</strong>
                  <br />• Q3 revenue exceeded targets by 15%
                  <br />• Customer satisfaction up 23%
                  <br />• New product launch next month
                </div>
                
                <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <strong>Challenges:</strong>
                  <br />• Supply chain delays in APAC
                  <br />• Need to hire 3 more engineers
                </div>
                
                <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <strong>Next Steps:</strong>
                  <br />• Schedule follow-up with product team
                  <br />• Review budget for Q4 hiring
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-xs text-gray-500">
                <Scroll className="h-4 w-4" />
                <span>Auto-scroll enabled</span>
              </div>
            </div>
            
            {/* Meeting controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-400 rounded"></div>
              </div>
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            <span className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal rounded-full"></span>
              <span>Your notes stay completely private — no data leaves your browser</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
