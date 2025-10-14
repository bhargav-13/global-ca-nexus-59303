import { Award, Target, Eye, Users, Shield, TrendingUp, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-6">
              About <span className="text-primary">DRSPV & Associates</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established as a leading Chartered Accountant firm based in Rajkot, Gujarat, DRSPV &
              Associates has built a reputation for excellence in audit, taxation, and compliance
              services across India.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our firm has evolved to become a trusted partner for businesses seeking global
              expansion, specializing in IPO consultancy and providing comprehensive accounting
              outsourcing services to clients in the USA, UK, Australia, Dubai, and Singapore.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a team of highly qualified Chartered Accountants and specialized certifications,
              we bridge the gap between Indian financial expertise and international client needs,
              delivering reliable, transparent, and professional services.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ICAI Certified</div>
                  <div className="text-sm text-muted-foreground">
                    Institute of Chartered Accountants of India
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">DISA Certified</div>
                  <div className="text-sm text-muted-foreground">
                    Information Systems Audit & IT Compliance
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Registered Valuer (IBBI)</div>
                  <div className="text-sm text-muted-foreground">
                    Business & Asset Valuation Services
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Team</div>
                  <div className="text-sm text-muted-foreground">
                    20+ qualified professionals
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Xero Certified</div>
                  <div className="text-sm text-muted-foreground">
                    Certified Xero Advisor Partner
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">QuickBooks Experience</div>
                  <div className="text-sm text-muted-foreground">
                    QuickBooks Accounting Expertise
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Zoho Books Partner</div>
                  <div className="text-sm text-muted-foreground">
                    Official Zoho Books Partner
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Vision & Mission */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted global accounting partner, empowering businesses worldwide
                with world-class financial solutions rooted in Indian excellence and international
                standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional accounting, audit, and consultancy services through
                integrity, expertise, and innovation, helping our clients achieve financial clarity
                and business growth across borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;