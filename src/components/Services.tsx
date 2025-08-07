import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      title: "WiFi Monetization",
      description: "WiFi monetization refers to the process of generating revenue or profits from providing WiFi services. This can be achieved through various strategies and business models that leverage the provision of internet connectivity to create value for businesses or service providers.",
      image: "https://adranet.com/assets/img/services-1.jpg"
    },
    {
      title: "Enable Free High-Speed Unlimited Internet",
      description: "Enabling free high-speed unlimited internet access is a complex endeavor that involves various considerations, including infrastructure costs, bandwidth management, regulatory requirements, and sustainability.",
      image: "https://adranet.com/assets/img/services-2.jpg"
    },
    {
      title: "ISP Agnostic",
      description: "Adranet presents a user-friendly satellite-based internet service that simplifies access to the online world without the complexities of integrating with conventional ISP backbones or backend systems. Through its plug-and-play setup, users can easily connect to the internet by installing the Adranet app and linking their router. Remarkably, Adranet seamlessly operates with any available local ISP or SIM card, offering users the freedom to choose their preferred service provider while benefiting from its satellite-driven connectivity.",
      image: "https://adranet.com/assets/img/services-3.jpg"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <div className="section-divider mb-8"></div>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Transform your WiFi infrastructure into a profitable business model today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};