import { Link } from "@/components/ui/link";
import { Chrome, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 px-3 py-16 bg-gradient-to-r from-teal to-coral rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to never lose your train of thought again?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their meeting confidence with TalkScroll.
          </p>
          <Link 
            href="https://chromewebstore.google.com/detail/talkscroll-master-your-me/inbdjbgalbhagmpdkgjabgabcniahhll?utm_source=twitter&utm_medium=landing-page&utm_campaign=extension-launch"
            target="_blank"
            rel="noopener noreferrer"
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Chrome className="mr-2 h-5 w-5" />
            Install for Free
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal to-coral rounded-lg flex items-center justify-center text-white font-bold">
                TS
              </div>
              <span className="text-xl font-bold">TalkScroll</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The free teleprompter for remote professionals. Stay confident, stay focused.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rezamajidi/" 
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rezamajidi.dev@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TalkScroll. Made with ❤️ for remote professionals.
          </div>
          
          <div className="flex md:items-center flex-col md:flex-row md:space-x-4 text-sm text-gray-400 self-start">
            <span>100% Private</span>
            <span className="hidden md:inline-flex">•</span>
            <span>No Data Collection</span>
            <span className="hidden md:inline-flex">•</span>
            <span>Easy to use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
