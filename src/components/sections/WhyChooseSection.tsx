import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Brain, 
  Target, 
  Star, 
  Heart 
} from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "One-stop solution",
    description: "Complete design & marketing needs under one roof."
  },
  {
    icon: Brain,
    title: "Strategic thinkers",
    description: "Creative minds with analytical approach."
  },
  {
    icon: Target,
    title: "Results-driven",
    description: "Focused execution that delivers measurable outcomes."
  },
  {
    icon: Star,
    title: "Industry experience",
    description: "Proven track record across industries & elections."
  },
  {
    icon: Heart,
    title: "Passionate team",
    description: "Dedicated, youthful, and passionate professionals."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Cre8iveloop?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title}
              className="bg-gradient-secondary border-border hover:border-primary/50 transition-all duration-500 group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};