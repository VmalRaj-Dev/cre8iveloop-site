import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import prabhuImage from "@/assets/prabhu.jpg";
import ashokChandran from "@/assets/ashok-chandran.jpg";
import adheeshKumar from "@/assets/adheesh.jpg";
import vimalRaj from "@/assets/vimal-raj.jpg";
import lokesh from "@/assets/lokesh.jpg";
import logoSmall from "@/assets/logo-small.png";

// Placeholder team data - will be replaced with actual team member images and details
const teamMembers = [
	{
		id: 1,
		name: "Prabhu",
		designation: "Founder",
		image: prabhuImage,
		bio: "Visionary founder who established Cre8iveloop with a passion for creative excellence.",
	},
	{
		id: 2,
		name: "Adheesh Kumar",
		designation: "Managing Director",
		image: adheeshKumar,
		bio: "Strategic leader driving the company's vision and operational excellence.",
	},
	{
		id: 3,
		name: "Ashok Chandran",
		designation: "Advisor & Mentor",
		image: ashokChandran,
		bio: "Experienced advisor providing guidance and mentorship to the team.",
	},
	{
		id: 4,
		name: "Vimal Raj",
		designation: "Senior Developer",
		image: vimalRaj,
		bio: "Skilled developer with a knack for building robust applications.",
	},
	{
		id: 5,
		name: "Lokesh",
		designation: "SEO specialist & Digital Marketer",
		image: lokesh,
		bio: "Talented SEO specialist and digital marketer driving online visibility and engagement.",
	},
];

export const TeamSection = () => {
	const [hoveredMember, setHoveredMember] = useState<number | null>(null);

	return (
		<section id="team" className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
						<span className="text-foreground">Meet Our Creative Team</span>
					</h2>
					<p
						className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						The passionate minds behind every creative solution we deliver.
					</p>
				</div>

				{/* Innovative circular team layout */}
				<div className="relative max-w-4xl mx-auto h-96 md:h-[500px]">
					{teamMembers.map((member, index) => {
						// For 5 cards: 360° / 5 = 72° between each card
						// Starting from top and going clockwise
						const angle = index * 72 - 90; // -90 to start from top
						const radius = 150;
						const x = Math.cos((angle * Math.PI) / 180) * radius;
						const y = Math.sin((angle * Math.PI) / 180) * radius;

						// Assign zIndex so that topmost card is always on top, then clockwise order
						// Highest zIndex for the top card, then decreasing
						const baseZ = 10 + (teamMembers.length - index);

						return (
							<div
								key={member.id}
								className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-smooth"
								style={{
									left: `calc(50% + ${x}px)`,
									top: `calc(50% + ${y}px)`,
									zIndex:
										hoveredMember === member.id
											? 100 // Always on top when hovered
											: baseZ,
								}}
								onMouseEnter={() => setHoveredMember(member.id)}
								onMouseLeave={() => setHoveredMember(null)}
							>
								<Card
									className={`
                  bg-gradient-secondary border-border transition-smooth cursor-pointer shadow-card
                  ${
                    hoveredMember === member.id
                      ? "scale-125 border-accent shadow-glow-soft"
                      : "hover:scale-110 hover:border-accent/50"
                  }
                  ${
                    hoveredMember && hoveredMember !== member.id
                      ? "opacity-50 scale-90"
                      : ""
                  }
                `}
								>
									<CardContent className="p-6 text-center w-48">
										<div
											className={`
                      w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 border border-border overflow-hidden
                      transition-smooth
                      ${hoveredMember === member.id ? "border-accent/50" : ""}
                    `}
										>
											<img
												src={member.image}
												alt={member.name}
												className="w-full h-full rounded-full object-cover"
											/>
										</div>

										<h3 className="text-lg font-bold text-foreground mb-2">
											{member.name}
										</h3>

										<p className="text-accent text-sm mb-3 font-medium">
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
						<div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center border-2 border-accent/20 animate-glow-pulse">
							<span className="text-2xl font-bold text-foreground"><img src={logoSmall} alt="Logo" className="h-8 w-14"/></span>
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
