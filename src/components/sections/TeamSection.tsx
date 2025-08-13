import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

// Placeholder team data - will be replaced with actual team member images and details
const teamMembers = [
  {
    id: 1,
    name: "Prabhu Loganathan",
    designation: "Founder",
    image: null, // Will be provided separately
    bio: "Visionary founder who established Cre8iveloop with a passion for creative excellence."
  },
  {
    id: 2,
    name: "Adheesh Kumar",
    designation: "Managing Director",
    image: null, // Will be provided separately
    bio: "Strategic leader driving the company's vision and operational excellence."
  },
  {
    id: 3,
    name: "Team Member 3",
    designation: "Creative Director",
    image: null, // Will be provided separately
    bio: "Creative mastermind behind our innovative design solutions."
  },
  {
    id: 4,
    name: "Team Member 4",
    designation: "Senior Designer",
    image: null, // Will be provided separately
    bio: "Talented designer bringing concepts to life with artistic precision."
  }
];

export const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Meet Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Creative Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The passionate minds behind every creative solution we deliver.
          </p>
        </div>

        {/* Innovative circular team layout */}
        <div className="relative max-w-4xl mx-auto h-96 md:h-[500px]">
          {teamMembers.map((member, index) => {
            const angle = (index * 90) - 45; // Positioned at 0°, 90°, 180°, 270° adjusted
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={member.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  zIndex: hoveredMember === member.id ? 20 : 10,
                }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Card className={`
                  bg-gradient-secondary border-border transition-all duration-500 cursor-pointer
                  ${hoveredMember === member.id 
                    ? 'scale-125 border-primary shadow-glow-soft' 
                    : 'hover:scale-110 hover:border-primary/50'
                  }
                  ${hoveredMember && hoveredMember !== member.id ? 'opacity-50 scale-90' : ''}
                `}>
                  <CardContent className="p-6 text-center w-48">
                    <div className={`
                      w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 
                      transition-all duration-500
                      ${hoveredMember === member.id ? 'shadow-glow' : ''}
                    `}>
                      <User className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary text-sm mb-3 font-medium">
                      {member.designation}
                    </p>
                    
                    {hoveredMember === member.id && (
                      <p className="text-muted-foreground text-xs animate-fade-in">
                        {member.bio}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}

          {/* Central logo/brand element */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
              <span className="text-2xl font-bold text-primary-foreground">C8L</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            <em>Hover over team members to learn more about them</em>
          </p>
        </div>
      </div>
    </section>
  );
};