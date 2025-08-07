import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Apple, 
  Monitor, 
  Tv, 
  Store,
  ExternalLink
} from "lucide-react";
import mobileAppImage from "@/assets/mobile-app.png";

export const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Android App",
      description: "Developing an Android app for advertisement display can be a strategic endeavor for businesses looking to maximize their reach and engagement with their target audience.",
      image: "https://adranet.com/assets/img/portfolio/android.jpg"
    },
    {
      title: "IOS App", 
      description: "Creating an iOS app for advertisement display on Adranet involves crafting a user-friendly platform that effectively showcases advertisements while ensuring a seamless experience for both advertisers and users",
      image: "https://adranet.com/assets/img/portfolio/ios.jpg"
    },
    {
      title: "Vendor App",
      description: "It is a versatile platform that empowers vendors to showcase their products and services effectively to their target audience.",
      image: "https://adranet.com/assets/img/portfolio/v11.jpg"
    },
    {
      title: "PC",
      description: "It presents an opportunity to leverage the power of personal computers as effective platforms for showcasing promotional content to a wide audience.",
      image: "https://adranet.com/assets/img/portfolio/pc11.jpg"
    },
    {
      title: "Android Smart TV",
      description: "This platform serves as a powerful medium for advertisers to showcase their products and services on large screens, reaching a wider audience and making a lasting impression.",
      image: "https://adranet.com/assets/img/portfolio/tv.jpg"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Adranet presents a user-friendly satellite-based internet service that simplifies access 
            to the online world without the complexities of integrating with conventional ISP backbones or backend systems.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Button variant="outline" size="lg">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Monitoring Apps Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Monitoring Apps
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Router Management System",
              "Advertisement Stack",
              "Advertisement Control Panel",
              "iOS App",
              "Android TV",
              "PC Application"
            ].map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{app}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};