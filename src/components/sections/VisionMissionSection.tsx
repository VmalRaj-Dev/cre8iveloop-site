import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

export const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-gradient-secondary border-border hover:border-primary/30 transition-all duration-500 group animate-slide-in-left">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-6 group-hover:shadow-glow transition-all duration-500">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our <span className="bg-gradient-primary bg-clip-text text-transparent">Vision</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a leading creative powerhouse that redefines how brands engage and inspire 
                through meaningful design and marketing experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary border-border hover:border-primary/30 transition-all duration-500 group animate-slide-in-right">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-6 group-hover:shadow-glow transition-all duration-500">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our <span className="bg-gradient-primary bg-clip-text text-transparent">Mission</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations and individuals with innovative, visually compelling, and 
                strategically effective design solutions—both digital and offline.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};