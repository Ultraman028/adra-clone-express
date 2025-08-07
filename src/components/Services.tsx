import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Zap, 
  Globe, 
  Target,
  DollarSign,
  Signal,
  MapPin,
  Building
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "WiFi Monetization",
      description: "WiFi monetization refers to the process of generating revenue or profits from providing WiFi services through various strategies and business models.",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Enable Free High-Speed Unlimited Internet",
      description: "Enabling free high-speed unlimited internet access through infrastructure management, bandwidth optimization, and sustainable business models.",
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "ISP Agnostic",
      description: "Seamlessly operates with any available local ISP or SIM card, offering complete flexibility and freedom to choose preferred service providers.",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Focused/Targeted Ads",
      description: "Deploy domain-specific and geofence advertisements to maximize relevance and engagement for your target audience.",
      color: "bg-orange-500"
    }
  ];

  const deploymentLocations = [
    { icon: Building, title: "Hotels", desc: "Enhanced guest experience with monetized WiFi" },
    { icon: MapPin, title: "Public Spaces", desc: "Parks, plazas, and recreational areas" },
    { icon: Signal, title: "Transportation Hubs", desc: "Airports, stations, and transit centers" },
    { icon: Globe, title: "Educational Institutions", desc: "Schools, colleges, and universities" },
    { icon: Building, title: "Government Buildings", desc: "Municipal offices and community centers" },
    { icon: Target, title: "Tourist Attractions", desc: "Museums, landmarks, and cultural sites" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive WiFi monetization solutions that transform connectivity into revenue streams
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button variant="outline" size="sm" className="mt-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ad Types Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Advertisement Types</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Domain-Specific Ads</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All hospitals in an area</li>
                <li>• All educational institutions in a region</li>
                <li>• All lodges and accommodations in a locality</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Geofence Ads</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ads around your business only</li>
                <li>• Circular locality targeting</li>
                <li>• Proximity-based marketing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment Locations */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Where it can be deployed?
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            Free WiFi internet can be deployed in various locations to maximize accessibility and 
            benefit different segments of the population.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploymentLocations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <location.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{location.title}</h4>
                      <p className="text-sm text-muted-foreground">{location.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};