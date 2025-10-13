import {
  FileCheck,
  Calculator,
  Shield,
  TrendingUp,
  Globe2,
  BookOpen,
  Building2,
  FileSearch,
  Briefcase,
  Server,
  DollarSign,
  Rocket,
  Banknote,
  LineChart,
  Bitcoin,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const specializedServices = [
    {
      icon: Globe2,
      title: "Global Accounting & Bookkeeping Services",
      description:
        "Comprehensive accounting outsourcing and bookkeeping solutions for international clients across USA, UK, Australia, Dubai, and Singapore. We handle complete financial operations including bookkeeping, payroll processing, tax compliance, financial reporting, and reconciliation services with expertise in multi-jurisdictional accounting standards and real-time support across all time zones.",
      highlights: ["US GAAP & IFRS", "UK FRS & Australian Standards", "Dubai & Singapore Compliance", "Multi-currency Management", "Payroll Processing", "Real-time Financial Reporting", "Tax Filing Support", "Cross-border Transactions"],
      badge: "Global",
    },
    {
      icon: TrendingUp,
      title: "IPO Consultancy",
      description:
        "End-to-end guidance for taking your company public. From compliance and filings to strategic advisory, we navigate the complete IPO journey with you.",
      highlights: ["Pre-IPO Preparation", "SEBI Compliance", "Due Diligence", "Post-IPO Support"],
      badge: "Specialized",
    },
    {
      icon: Rocket,
      title: "Startup Consultancy",
      description:
        "Comprehensive support for startups at every stage. From fundraising strategy to financial modeling and investor-ready pitch reports.",
      highlights: ["Fundraising Advisory", "Financial Modeling", "Pitch Deck Preparation", "Business Planning", "Investor Relations"],
      badge: "Specialized",
    },
  ];

  const coreServices = [
    {
      icon: FileCheck,
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring accuracy, compliance, and reliability.",
    },
    {
      icon: Calculator,
      title: "Tax Compliance & Advisory",
      description: "Expert tax planning, filing, and advisory for individuals and businesses.",
    },
    {
      icon: Shield,
      title: "GST Services",
      description: "Complete GST registration, filing, and compliance management.",
    },
    {
      icon: Building2,
      title: "ROC & Company Law",
      description: "Company incorporation, annual filings, and regulatory compliance.",
    },
    {
      icon: FileSearch,
      title: "Transfer Pricing",
      description: "International transaction documentation and compliance.",
    },
    {
      icon: Briefcase,
      title: "Internal Audit & Investigation",
      description: "Risk assessment, process improvement, and forensic investigations.",
    },
    {
      icon: Server,
      title: "Information Systems Audit (DISA)",
      description: "IT compliance, data security audits, and system controls evaluation.",
    },
    {
      icon: DollarSign,
      title: "Business Valuation (IBBI Registered)",
      description: "Professional business and asset valuation for M&A, compliance, and litigation.",
    },
    {
      icon: Banknote,
      title: "Debt Syndication",
      description: "Facilitating large-scale debt financing through coordination with multiple lenders.",
    },
    {
      icon: LineChart,
      title: "Project Finance",
      description: "Structured financing solutions for large infrastructure and capital projects.",
    },
    {
      icon: Bitcoin,
      title: "Crypto Tax Accountant",
      description: "Specialized cryptocurrency taxation, compliance, and reporting for digital asset transactions.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Our Services</Badge>
          <h2 className="mb-4">
            Comprehensive <span className="text-primary">Accounting Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From local expertise to global services, we provide end-to-end financial solutions
            tailored to your business needs
          </p>
        </div>

        {/* Specialized Services */}
        <div className="mb-16">
          <h3 className="text-center mb-8 text-primary">Specialized Global Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary transition-smooth hover:shadow-professional group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div>
          <h3 className="text-center mb-8">Core CA Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-professional transition-smooth group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-smooth">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-smooth" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
