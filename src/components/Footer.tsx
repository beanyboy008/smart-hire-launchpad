
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-hiresmart-purple">HireSmart AI</span>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Revolutionizing recruitment with AI-powered tools that find the best talent faster.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-hiresmart-purple text-sm">Home</a>
                </li>
                <li>
                  <a href="#features" className="text-gray-500 hover:text-hiresmart-purple text-sm">Features</a>
                </li>
                <li>
                  <a href="#waitlist-form" className="text-gray-500 hover:text-hiresmart-purple text-sm">Join Waitlist</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-hiresmart-purple text-sm">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-hiresmart-purple text-sm">Terms of Service</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-hiresmart-purple">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-hiresmart-purple">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-hiresmart-purple">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-hiresmart-purple">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HireSmart AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
