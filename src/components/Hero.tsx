
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="gradient-bg absolute top-0 left-0 w-full h-full opacity-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-hiresmart-light-purple/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-hiresmart-blue/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="lg:w-3/5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="mb-6">
              <span className="block">Transform Your Hiring With</span>
              <span className="gradient-text font-bold">AI-Powered Recruitment</span>
            </h1>
            
            <p className="mb-8 md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Streamline your entire recruitment process with smart automation, predictive analytics, and bias-free candidate assessments.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-hiresmart-purple hover:bg-hiresmart-purple/90 text-white"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-hiresmart-purple text-hiresmart-purple hover:bg-hiresmart-soft-purple"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-2/5 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="w-full h-96 rounded-xl bg-gradient-to-br from-hiresmart-purple to-hiresmart-light-purple p-1">
                <div className="w-full h-full rounded-lg bg-white p-4">
                  <div className="animate-float">
                    <div className="w-full h-10 mb-4 rounded bg-gray-100"></div>
                    <div className="w-full h-20 mb-4 rounded bg-gray-100"></div>
                    <div className="flex gap-2 mb-4">
                      <div className="w-1/3 h-12 rounded bg-hiresmart-soft-purple"></div>
                      <div className="w-1/3 h-12 rounded bg-hiresmart-blue"></div>
                      <div className="w-1/3 h-12 rounded bg-gray-100"></div>
                    </div>
                    <div className="w-full h-32 mb-4 rounded bg-gray-100"></div>
                    <div className="w-1/2 h-10 rounded bg-hiresmart-orange mx-auto"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-hiresmart-orange/20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-hiresmart-blue/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
