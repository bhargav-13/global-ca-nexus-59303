import {
  Rocket,
  Building,
  ShoppingCart,
  Package,
  Smartphone,
  Factory,
  HeartPulse,
  GraduationCap,
  Truck,
  Sun,
  Sprout,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Rocket,
      title: "Startups & Tech",
      description: "IPO preparation, fundraising advisory, financial modeling, pitch reports, and growth-stage financial management",
    },
    {
      icon: Building,
      title: "Real Estate & Construction",
      description: "Project accounting, compliance, and multi-entity consolidation",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Multi-currency accounting, inventory management, global compliance",
    },
    {
      icon: Package,
      title: "Import-Export",
      description: "International trade compliance, transfer pricing, customs documentation",
    },
    {
      icon: Smartphone,
      title: "IT & Software Services",
      description: "SaaS revenue recognition, R&D credits, international tax planning",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Cost accounting, inventory valuation, supply chain finance",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Pharma",
      description: "Regulatory compliance, clinical trial accounting, research grants",
    },
    {
      icon: GraduationCap,
      title: "Professional Services",
      description: "Partnership accounting, revenue sharing, professional liability",
    },
    {
      icon: Truck,
      title: "Transportation Services",
      description: "Fleet accounting, logistics management, fuel cost optimization, freight billing",
    },
    {
      icon: Sun,
      title: "Green Energy & Solar",
      description: "Renewable energy credits, project financing, subsidy management, carbon accounting",
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Farm accounting, crop financing, subsidy compliance, commodity trading",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized expertise across diverse sectors with tailored accounting solutions
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border hover:border-primary bg-card hover:shadow-professional transition-smooth cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-smooth">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-white transition-smooth" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
