
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold text-hiresmart-purple">HireSmart AI</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-hiresmart-purple font-medium transition-colors">
            Features
          </a>
          <Button 
            variant="outline" 
            className="border-hiresmart-purple text-hiresmart-purple hover:bg-hiresmart-purple hover:text-white"
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-hiresmart-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#waitlist-form"
              className="block px-3 py-2 text-base font-medium text-hiresmart-purple hover:bg-hiresmart-soft-purple rounded-md"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
