import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Rocket, 
  Vote, 
  Calendar,
  GraduationCap
} from "lucide-react";

const clientTypes = [
  {
    icon: Building2,
    title: "Corporate Businesses",
    description: "Comprehensive branding and marketing solutions for established enterprises."
  },
  {
    icon: Rocket,
    title: "Startups & Entrepreneurs",
    description: "Creative identity development for emerging businesses and innovative ventures."
  },
  {
    icon: Vote,
    title: "Political Campaigns",
    description: "Strategic campaign design and political branding for electoral success."
  },
  {
    icon: Calendar,
    title: "Event Organizers",
    description: "Complete event branding and management services from concept to execution."
  },
  {
    icon: GraduationCap,
    title: "NGOs and Educational Institutions",
    description: "Purpose-driven design solutions for social impact and educational excellence."
  }
];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Who </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">We Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our diverse clientele spans across industries, bringing tailored solutions to every sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clientTypes.map((client, index) => (
            <Card 
              key={client.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
                  <client.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {client.title}
                </h3>
                <p className="text-muted-foreground">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};