
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);
      setEmail("");
      toast.success("You've been added to our waitlist!");
    }, 1500);
  };

  return (
    <div id="waitlist-form" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="mb-2">
            <span className="inline-block bg-hiresmart-purple/10 text-hiresmart-purple px-4 py-1.5 rounded-full text-sm font-medium">
              Coming Soon
            </span>
          </div>
          
          <h2 className="mb-4 gradient-text">Be The First To Know</h2>
          
          <p className="mb-8 text-gray-600 max-w-xl mx-auto">
            Join our waitlist to get early access and be notified when HireSmart AI launches. Transform your recruitment process and stay ahead of the competition.
          </p>
          
          {hasSubmitted ? (
            <div className="bg-hiresmart-soft-purple/50 rounded-xl p-8 text-center">
              <Mail className="w-12 h-12 text-hiresmart-purple mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                You've been added to our waitlist. We'll notify you when HireSmart AI is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10 h-12 border-gray-300 focus:border-hiresmart-purple focus:ring-hiresmart-purple"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-hiresmart-orange hover:bg-hiresmart-orange/90 text-white h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
          
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;
