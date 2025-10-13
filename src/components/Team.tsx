import { Linkedin, Mail, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      name: "CA Vrajkishor R. Changani",
      title: "Senior Partner",
      credentials: ["ACA"],
      image: "/placeholder.svg",
      bio: "Experienced chartered accountant specializing in taxation, auditing, and financial advisory services with deep expertise in business compliance and strategic financial planning.",
      linkedin: "#",
      email: "info@drspv.in",
    },
    {
      name: "CA Sreekunj N. Vasoya",
      title: "Senior Partner",
      credentials: ["ACA"],
      image: "/placeholder.svg",
      bio: "Expert in corporate matters, statutory compliance, and international accounting standards with extensive experience in cross-border transactions and regulatory compliance.",
      linkedin: "#",
      email: "info@drspv.in",
    },
    {
      name: "CA Prashant D. Dobariya",
      title: "Senior Partner",
      credentials: ["ACA"],
      image: "/placeholder.svg",
      bio: "Specializes in audit and assurance services, internal controls, and financial reporting with proven track record in serving diverse industries and global clients.",
      linkedin: "#",
      email: "info@drspv.in",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Our Team</Badge>
          <h2 className="mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dedicated professionals committed to delivering excellence in accounting and financial services
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-professional transition-smooth overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4 space-x-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-smooth"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-smooth"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {member.credentials.map((credential, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      {credential}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
