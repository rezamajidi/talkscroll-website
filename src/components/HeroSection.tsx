import { Link } from "@/components/ui/link";
import { Chrome } from "lucide-react";
import LivePreview from "./LivePreview";

const HeroSection = () => {
  return (
    <section className="relative px-6 pt-12 pb-8 lg:py-20 text-center bg-gradient-to-br from-white to-slate-50 overflow-hidden" id="hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,128,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-teal/80 p-2 animate-bounce-gentle">
          <img 
            src="/logo-128.png" 
            alt="TalkScroll Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
          Never lose your train of thought in{" "}
          <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
            meetings again
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          TalkScroll is a free teleprompter for remote professionals!<br />Scroll your notes like a script during Zoom, Google Meet, or Teams calls within your browser!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link 
            href="https://chromewebstore.google.com/detail/talkscroll-master-your-me/inbdjbgalbhagmpdkgjabgabcniahhll?utm_source=twitter&utm_medium=landing-page&utm_campaign=extension-launch"
            target="_blank"
            rel="noopener noreferrer"
            size="lg" 
            className="bg-teal hover:bg-teal/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Chrome className="mr-2 h-5 w-5" />
            Install for Free
          </Link>          
        </div>
        
        {/* YouTube video placeholder */}
        <div className="relative max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <LivePreview />
          <p className="text-sm text-gray-500 mt-4 text-center">
            ⚡ See how TalkScroll keeps you confident and on-track in any meeting
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
