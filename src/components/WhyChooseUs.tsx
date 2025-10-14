import { Award, Globe, Users, TrendingUp, Shield, Zap } from "lucide-react";
import globalNetworkBg from "@/assets/global-network-bg.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "Deep understanding of multi-jurisdictional accounting standards across USA, UK, and Australia",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successfully guided 50+ companies through IPO journey with 100% compliance",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified Chartered Accountants with specialized certifications and global experience",
    },
    {
      icon: TrendingUp,
      title: "Client Success",
      description: "95% client retention rate with measurable business growth and cost savings",
    },
    {
      icon: Shield,
      title: "Complete Confidentiality",
      description: "Strict data security protocols and adherence to international privacy standards",
    },
    {
      icon: Zap,
      title: "Real-time Support",
      description: "24/7 availability across time zones for seamless international collaboration",
    },
  ];

  return (
    <section id="why-us" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${globalNetworkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Why Choose <span className="text-primary">DRSPV & Associates</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for comprehensive accounting solutions with a global perspective
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-professional transition-smooth group"
            >
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;