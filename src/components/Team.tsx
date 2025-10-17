import { Linkedin, Mail, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const coreTeam = [
    {
      name: "Mr. Prashant D. Dobariya",
      title: "Principal",
      credentials: ["CA (ICAI)", "B.Com", "NISM (Derivatives)"],
      image: "/prashant.jpeg",
      bio: "Expert in the field of Consulting & Advisory Services, Statutory Auditor, Internal Auditor.",
      linkedin: "#",
      email: "info@drspv.in",
    },
    {
      name: "Mr. Vrajkishor R. Changani",
      title: "Principal",
      credentials: ["CA (ICAI)", "B.Com", "NISM (Derivatives)"],
      image: "/vivek.jpeg",
      bio: "Investment Planner, Services in the field of Audit and Assurance, Taxation and its related matters.",
      linkedin: "#",
      email: "info@drspv.in",
    },
    {
      name: "Mr. Sreekunj N. Vasoya",
      title: "Principal",
      credentials: ["CA (ICAI)", "B.Com", "NISM (Derivatives)"],
      image: "/sreekunj.jpeg",
      bio: "Expert in the field of Consulting & Advisory Services and Bank Audit.",
      linkedin: "#",
      email: "info@drspv.in",
    },
  ];

  const associates = [
    {
      name: "Mr. Durgesh M. Chavda",
      credentials: ["CA (ICAI)", "M.Com"],
      bio: "Expert in the field of System audit, Start up Consultant, Bank Audit & Corporate Consultant.",
    },
    {
      name: "Mr. Yash M. Simariya",
      credentials: ["CA (ICAI)", "ACCA (UK)"],
      bio: "Expert in the field of Consulting & Advisory Services, Statutory Auditor, Internal Auditor.",
    },
    {
      name: "Mr. Milan P. Sakhiya",
      credentials: ["CS (ICSI)", "B.Com"],
      bio: "Expert in the field of FEMA & RBI Consulting & Advisory Services, Investment Planner.",
    },
    {
      name: "Ms. Bhakti Somaiya",
      credentials: ["CA (ICAI)", "B.Com"],
      bio: "Expert in the field of RERA, Income Tax & Foreign Accounting and Reporting.",
    },
    {
      name: "Mrs. Kanish Shah",
      credentials: ["CA (Inter)", "B.com"],
      bio: "Expert in the field of US entity formation, Taxation, Bookkeeping and Reporting",
    },
    {
      name: "Mr. Ravi Vadodariya",
      credentials: ["CA (Inter)", "B.com"],
      bio: "Expert in the field of bookkeeping and taxation.",
    },
    {
      name: "Mr. Prashant A. Hirpara",
      credentials: ["Banking & Finance Expert"],
      bio: "Expert in the field of Banking, Loan & Project Finances management, Project Financial Manager",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Core Team Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Our Core Team</Badge>
          <h2 className="mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dedicated professionals committed to delivering excellence in accounting and financial services
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreTeam.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-professional transition-smooth overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
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

        {/* Associates Section */}
        <div className="border-t border-border pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">Other Associates & Advisors</Badge>
            <h2 className="mb-4">
              Our Extended <span className="text-primary">Professional Network</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((associate, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{associate.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {associate.credentials.map((credential, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{associate.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;