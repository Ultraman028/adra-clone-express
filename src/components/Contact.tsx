import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Mail, 
  Phone,
  Send
} from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      content: "Adranet Technologies Private Limited",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["info@adranet.com", "support@adranet.com"],
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["+91 9850557988", "+91 9422543256"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us to learn more about our WiFi monetization solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover glass-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      {Array.isArray(info.content) ? (
                        <div className="space-y-1">
                          {info.content.map((item, idx) => (
                            <p key={idx} className="text-muted-foreground">{item}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="card-hover glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button variant="gradient" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};