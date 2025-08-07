import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-start/50 to-hero-end/50"></div>
      <div className="section-container section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">Adranet</span> is wifi
              <span className="block text-white">monetization platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-light">
              Generate revenue through advertising while users enjoy free high-speed unlimited internet access
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="hero"
                className="animate-scale-in bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="hero"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-float">
            <img
              src={heroIllustration}
              alt="Mobile app monetization illustration"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
            
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 right-5 w-8 h-8 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-5 w-6 h-6 bg-primary-glow rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};