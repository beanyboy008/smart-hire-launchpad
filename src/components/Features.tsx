
import {
  Brain,
  Calendar,
  MessageSquareText,
  PieChart,
  ShieldCheck,
  UserSearch,
  BarChart3,
  Share2
} from "lucide-react";

const features = [
  {
    title: "AI Resume Screening",
    description: "Automatically parse resumes, assess skills, and rank applicants based on requirements to reduce bias and save time.",
    icon: UserSearch,
    gradient: "from-indigo-600 to-blue-500"
  },
  {
    title: "Predictive Analytics",
    description: "Leverage machine learning to predict candidate fit by analyzing historical hiring data for more objective decisions.",
    icon: Brain,
    gradient: "from-hiresmart-purple to-indigo-600"
  },
  {
    title: "Smart Scheduling",
    description: "Automate interview coordination with calendar integration, notifications, and rescheduling to streamline processes.",
    icon: Calendar,
    gradient: "from-violet-600 to-hiresmart-purple"
  },
  {
    title: "Candidate Chatbot",
    description: "Provide real-time responses to inquiries, enhancing candidate experience while gathering valuable evaluation data.",
    icon: MessageSquareText,
    gradient: "from-hiresmart-orange to-pink-500"
  },
  {
    title: "Bias Detection",
    description: "Integrate fairness metrics and compliance checks to ensure consistent adherence to standards and legal guidelines.",
    icon: ShieldCheck,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor key metrics like time-to-hire, diversity ratios, and process efficiency to guide recruitment strategies.",
    icon: BarChart3,
    gradient: "from-blue-500 to-sky-400"
  },
  {
    title: "Reporting & Insights",
    description: "Gain actionable insights through comprehensive reports on all aspects of your recruitment funnel.",
    icon: PieChart,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "ATS Integration",
    description: "Connect seamlessly with existing applicant tracking systems to maintain unified data and consistent workflows.",
    icon: Share2,
    gradient: "from-amber-500 to-hiresmart-orange"
  }
];

const Features = () => {
  return (
    <div id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Powered by <span className="gradient-text">Advanced AI</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of features revolutionizes every aspect of the recruitment process, from sourcing to onboarding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`feature-icon bg-gradient-to-r ${feature.gradient}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
