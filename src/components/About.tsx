import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Shield, Smartphone, Monitor } from "lucide-react";
import routerImage from "@/assets/router-image.png";

export const About = () => {
  const features = [
    {
      icon: Wifi,
      title: "No Wi-Fi Password",
      description: "No login, no interval bounded, no tokens - just install Adranet and enjoy uninterrupted internet."
    },
    {
      icon: Shield,
      title: "Ad-Powered Revenue",
      description: "Generate continuous revenue through non-intrusive movable ads while providing free internet access."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Works seamlessly across all devices - mobile apps, desktop software, and smart TV applications."
    },
    {
      icon: Monitor,
      title: "Smart Monitoring",
      description: "Complete router management system with advertisement control panel and analytics dashboard."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ABOUT US
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Adranet
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No Wi-Fi Password, no login, no interval bounded, no tokens just Install One App (Adranet), 
              make sure it's running, and enjoy uninterrupted internet smoothly.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Adranet will show ads continuously (movable ads) without disturbing the user experience. 
              Uninterrupted internet access is given as long as ads are not closed by the user. Revenue is 
              generated continuously as long as users are using the internet.
            </p>
          </div>
          <div className="relative">
            <img
              src={routerImage}
              alt="Adranet Router"
              className="w-full max-w-md mx-auto drop-shadow-xl rounded-lg"
            />
          </div>
        </div>

        {/* How it Works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Network Architecture</h4>
              <p className="text-muted-foreground">
                Distributed network nodes that collaborate seamlessly to maintain integrity and ensure robust connectivity.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              How it works?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Adranet leverages a distributed network architecture, where nodes collaborate seamlessly to 
              achieve consensus and maintain the integrity of the network. Unlike traditional centralized 
              systems, Adranet ensures robustness and resilience through its decentralized design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Adranet facilitates the seamless transfer of digital assets and information across its network, 
              enabling rapid and secure transactions without the need for intermediaries.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hardware Components */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Hardware Components of Adranet
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Adranet Router", desc: "High-performance wireless router with built-in ad serving capabilities" },
              { name: "Adranet Extender", desc: "Network range extender to ensure seamless coverage" },
              { name: "Adranet Cabling", desc: "Professional-grade networking cables for optimal connectivity" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};