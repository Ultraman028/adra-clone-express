import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Adranet is wifi
              <span className="block text-primary-glow">monetization platform</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Adranet generates revenue for advertising while user is using the free high-speed unlimited internet
            </p>
            
            <Button 
              variant="hero" 
              size="hero"
              className="animate-scale-in"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
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