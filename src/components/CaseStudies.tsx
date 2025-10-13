import { Quote, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  const testimonials = [
    {
      company: "TechVenture Inc.",
      industry: "Technology",
      country: "USA",
      quote:
        "DRSPV's expertise in international accounting standards was invaluable. They managed our complete bookkeeping seamlessly across time zones.",
      result: "40% cost savings vs local firms",
      badge: "Bookkeeping",
    },
    {
      company: "GreenEnergy Solutions",
      industry: "Renewable Energy",
      country: "India",
      quote:
        "Their IPO consultancy team guided us through every step. The attention to detail and compliance knowledge was exceptional.",
      result: "Successful IPO, ₹500Cr raised",
      badge: "IPO Consultancy",
    },
    {
      company: "RetailPro UK Ltd.",
      industry: "E-commerce",
      country: "UK",
      quote:
        "Outsourcing our accounting to DRSPV was the best decision. Professional, reliable, and significantly more cost-effective.",
      result: "Real-time financial insights",
      badge: "Outsourcing",
    },
  ];

  const stats = [
    { label: "Average Time Saved", value: "60%" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Cost Reduction", value: "45%" },
    { label: "Compliance Rate", value: "100%" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from businesses that trusted us with their financial operations
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <Card key={index} className="hover:shadow-professional transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {item.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6 italic">{item.quote}</p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{item.company}</div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {item.industry} · {item.country}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-accent">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    {item.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-center mb-8">Measurable Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
