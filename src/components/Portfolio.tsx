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
      icon: Smartphone,
      title: "Android App",
      description: "Developing an Android app for advertisement display can be a strategic endeavor for businesses looking to maximize their reach and engagement with their target audience.",
      image: mobileAppImage,
      color: "bg-green-500"
    },
    {
      icon: Apple,
      title: "iOS App",
      description: "Creating an iOS app for advertisement display on Adranet involves crafting a user-friendly platform that effectively showcases advertisements while ensuring a seamless experience.",
      image: mobileAppImage,
      color: "bg-gray-800"
    },
    {
      icon: Store,
      title: "Vendor App",
      description: "It is a versatile platform that empowers vendors to showcase their products and services effectively to their target audience.",
      image: mobileAppImage,
      color: "bg-blue-500"
    },
    {
      icon: Monitor,
      title: "PC Application",
      description: "It presents an opportunity to leverage the power of personal computers as effective platforms for showcasing promotional content to a wide audience.",
      image: mobileAppImage,
      color: "bg-purple-500"
    },
    {
      icon: Tv,
      title: "Android Smart TV",
      description: "This platform serves as a powerful medium for advertisers to showcase their products and services on large screens, reaching a wider audience and making a lasting impression.",
      image: mobileAppImage,
      color: "bg-red-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Adranet presents a user-friendly satellite-based internet service that simplifies access 
            to the online world without the complexities of integrating with conventional ISP backbones or backend systems.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>
                    
                    <Button variant="outline" className="w-fit">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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