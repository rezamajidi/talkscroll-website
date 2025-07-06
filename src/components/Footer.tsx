import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Chrome, Github,Linkedin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 py-16 bg-gradient-to-r from-teal to-coral rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to never lose your train of thought again?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their meeting confidence with TalkScroll.
          </p>
          <Link 
            href="https://chrome.google.com/webstore"
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
        <div className="grid md:grid-cols-4 gap-8 mb-12">
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
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://chrome.google.com/webstore" className="hover:text-white transition-colors">Chrome Web Store</a></li>
              <li><a href="https://github.com/talkscroll" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rezamajidi/" 
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 TalkScroll. Made with ❤️ for remote professionals.
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>100% Private</span>
            </div>
            <span>•</span>
            <span>No Data Collection</span>
            <span>•</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
