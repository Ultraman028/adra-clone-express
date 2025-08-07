import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Youtube } from "lucide-react";

export const Vlogs = () => {
  const vlogs = [
    {
      id: 1,
      title: "Adranet Demo In Smart TV",
      description: "Welcome to our exclusive demo of Adranet on Smart TV! In this video, we showcase how Adranet transforms your Smart TV experience by providing seamless, uninterrupted free internet access.",
      thumbnail: "https://adranet.com/assets/img/hero-img.png",
      videoId: "HugA6lVvW-M",
      channel: "DopaNet DopaNet",
      subscribers: "31 subscribers"
    },
    {
      id: 2,
      title: "FULL FREE WIFI IN BELGAUM SMART CITY",
      description: "Discover how we're implementing full free WiFi coverage in Belgaum Smart City project, bringing connectivity to every corner of the city.",
      thumbnail: "https://adranet.com/assets/img/hero-img.png",
      videoId: "HugA6lVvW-M",
      channel: "DopaNet DopaNet",
      subscribers: "31 subscribers"
    },
    {
      id: 3,
      title: "Adranet demo video",
      description: "Watch our demo to see the easy setup, user-friendly interface, and non-intrusive ads in action.",
      thumbnail: "https://adranet.com/assets/img/hero-img.png",
      videoId: "9OjCH74wO-I",
      channel: "DopaNet DopaNet",
      subscribers: "31 subscribers"
    },
    {
      id: 4,
      title: "Adranet Installation site",
      description: "Learn how to install Adranet easily on your devices with our step-by-step installation guide.",
      thumbnail: "https://adranet.com/assets/img/hero-img.png",
      videoId: "9OjCH74wO-I",
      channel: "DopaNet DopaNet",
      subscribers: "31 subscribers"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const handleChannelClick = () => {
    window.open('https://www.youtube.com/@dopanetdopanet', '_blank');
  };

  return (
    <section id="vlogs" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vlogs
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch our video demonstrations and tutorials to see Adranet in action across 
            different platforms and use cases.
          </p>
        </div>

        {/* Channel Info */}
        <div className="text-center mb-12">
          <Card className="glass-card max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">DopaNet DopaNet</h3>
                  <p className="text-sm text-muted-foreground">31 subscribers</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleChannelClick}>
                Visit Our Channel
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Vlogs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {vlogs.map((vlog) => (
            <Card key={vlog.id} className="group card-hover glass-card overflow-hidden">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden h-64 cursor-pointer" onClick={() => handleVideoClick(vlog.videoId)}>
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* YouTube Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    YouTube
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {vlog.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {vlog.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{vlog.channel}</span>
                    <span>{vlog.subscribers}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => handleVideoClick(vlog.videoId)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Subscribe for More</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our YouTube channel for the latest Adranet demos, tutorials, 
                and implementation guides.
              </p>
              <Button variant="gradient" size="lg" onClick={handleChannelClick}>
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe to Channel
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};