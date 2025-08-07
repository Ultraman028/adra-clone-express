import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BlogsGallery } from "@/components/BlogsGallery";
import { Vlogs } from "@/components/Vlogs";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen">
      <Header />
      
      {currentPath === "/" && (
        <>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Team />
          <Contact />
        </>
      )}
      
      {currentPath === "/about" && (
        <>
          <Hero />
          <About />
        </>
      )}
      
      {currentPath === "/services" && (
        <>
          <Hero />
          <Services />
        </>
      )}
      
      {currentPath === "/portfolio" && (
        <>
          <Hero />
          <Portfolio />
        </>
      )}
      
      {currentPath === "/team" && (
        <>
          <Hero />
          <Team />
        </>
      )}
      
      {currentPath === "/blogs" && (
        <>
          <Hero />
          <BlogsGallery />
        </>
      )}
      
      {currentPath === "/vlogs" && (
        <>
          <Hero />
          <Vlogs />
        </>
      )}
      
      {currentPath === "/contact" && (
        <>
          <Hero />
          <Contact />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
