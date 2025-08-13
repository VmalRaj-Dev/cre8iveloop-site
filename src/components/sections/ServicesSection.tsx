import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Monitor, 
  Camera, 
  Video, 
  Globe, 
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Build a unique and memorable brand identity.",
    delay: "0s"
  },
  {
    icon: Monitor,
    title: "Graphic Design",
    description: "Print, digital, and branding visuals that captivate.",
    delay: "0.1s"
  },
  {
    icon: Camera,
    title: "Visual Designing",
    description: "UI/UX and stunning visual assets.",
    delay: "0.2s"
  },
  {
    icon: Video,
    title: "Animation",
    description: "2D/3D motion graphics and explainer videos.",
    delay: "0.3s"
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "SEO-ready, responsive, custom websites.",
    delay: "0.4s"
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Full-service event planning and execution.",
    delay: "0.5s"
  },
  {
    icon: TrendingUp,
    title: "Election Campaigning",
    description: "Political branding and media strategy.",
    delay: "0.6s"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive creative solutions tailored to elevate your brand and drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};