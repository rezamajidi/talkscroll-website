
import { Button } from "@/components/ui/button";
import { Chrome, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 text-center bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,128,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Logo placeholder - you can replace with actual logo */}
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-teal/80 text-white font-bold text-xl animate-bounce-gentle">
          TS
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
          Never lose your train of thought in{" "}
          <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
            meetings again
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          TalkScroll is a free teleprompter for remote professionals — scroll your notes like a script during Zoom, Google Meet, or Teams calls.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-teal hover:bg-teal/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Chrome className="mr-2 h-5 w-5" />
            Install for Free
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-coral text-coral hover:bg-coral hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        {/* YouTube video placeholder */}
        <div className="relative max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-500">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </div>
                <p className="text-white text-lg font-semibold">Watch TalkScroll in Action</p>
                <p className="text-gray-300 text-sm mt-2">See how it works in real meetings</p>
              </div>
              
              {/* Fake browser mockup overlay */}
              <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded-lg flex items-center px-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-4 flex-1 h-4 bg-white/20 rounded text-xs text-white/70 flex items-center px-2">
                  chrome://extensions/talkscroll
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            ⚡ Replace this with your YouTube embed when ready
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
