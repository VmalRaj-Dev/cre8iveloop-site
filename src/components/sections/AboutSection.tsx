import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Who </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">We Are</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Cre8iveloop is a creative and digital design agency founded in 2021 by Prabhu Loganathan. 
            Led by Adheesh Kumar, our Managing Director, we deliver strategic design and visual branding 
            solutions that empower businesses, campaigns, and creatives alike. We specialize in creative 
            design, branding, animation, and campaign execution for both corporate and political clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group animate-slide-in-left">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                <Calendar className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Founded 2021</h3>
              <p className="text-muted-foreground">
                Building innovative design solutions and creative strategies since our inception.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Leadership</h3>
              <p className="text-muted-foreground">
                Led by Adheesh Kumar as Managing Director, bringing strategic vision to every project.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group animate-slide-in-right">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Proven Excellence</h3>
              <p className="text-muted-foreground">
                Delivering impactful results across corporate and political campaigns with strategic design.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};