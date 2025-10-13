import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Team />
      <CaseStudies />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
