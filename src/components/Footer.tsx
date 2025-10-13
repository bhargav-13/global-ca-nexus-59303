import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "IPO Consultancy",
    "Foreign Accounting Outsourcing",
    "International Bookkeeping",
    "Audit & Assurance",
    "Tax Compliance",
    "GST Services",
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Industries", href: "#industries" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  const countries = ["India", "USA", "UK", "Australia", "Dubai", "Singapore"];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">DRSPV</span>
              </div>
              <div>
                <div className="font-bold text-background">DRSPV & Associates</div>
                <div className="text-xs text-background/70">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Your trusted partner for comprehensive accounting solutions with a global perspective.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm text-background/80 hover:text-accent transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-background/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Countries */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-2 text-sm text-background/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Rajkot, Gujarat, India</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-background/80">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="tel:+919999999999" className="hover:text-accent transition-smooth">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-background/80">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@drspv.in" className="hover:text-accent transition-smooth">
                  info@drspv.in
                </a>
              </li>
            </ul>
            <div>
              <div className="text-sm font-semibold text-background mb-2">We Serve:</div>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
                  <span
                    key={index}
                    className="text-xs bg-background/10 px-3 py-1 rounded-full text-background/80"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/70">
              © {currentYear} DRSPV & Associates. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-background/70">
              <a href="#" className="hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
