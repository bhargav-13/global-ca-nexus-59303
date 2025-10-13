import { Calendar, ArrowRight, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Insights = () => {
  const articles = [
    {
      category: "IPO Guide",
      title: "Complete Guide to IPO Process in India 2025",
      excerpt:
        "Everything you need to know about taking your company public - from eligibility to listing",
      date: "March 15, 2025",
      readTime: "12 min read",
    },
    {
      category: "International",
      title: "US GAAP vs IFRS: Key Differences Explained",
      excerpt:
        "Understanding the critical differences between US and international accounting standards",
      date: "March 10, 2025",
      readTime: "8 min read",
    },
    {
      category: "Outsourcing",
      title: "Why UK Companies Choose Indian CA Firms",
      excerpt:
        "The benefits of outsourcing accounting to qualified Indian professionals",
      date: "March 5, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Insights & <span className="text-primary">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with expert analysis, guides, and updates on accounting and compliance
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="hover:shadow-professional transition-smooth group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
