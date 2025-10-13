import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-global-accounting.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">
              Serving clients across India, USA, UK, Australia, Dubai & Singapore
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-6 leading-tight">
            From India to the World: <br />
            <span className="text-accent">IPO & Global Accounting</span> Expertise
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Trusted Chartered Accountant firm providing IPO advisory, startup consultancy, and specialized
            accounting outsourcing for clients in USA, UK, Australia, Dubai & Singapore
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="gradient-accent text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-smooth group"
              asChild
            >
              <a href="#contact">
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/80">IPO Consultancies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <Globe className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-white/80">Global Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <Users className="w-8 h-8 text-accent mb-3" />
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
