import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

export const BlogsGallery = () => {
  const blogs = [
    {
      id: 1,
      title: "Experience Free, Seamless Internet with Adranet",
      date: "May 2024",
      image: "https://adranet.com/assets/img/5.jpg",
      link: "https://qr.ae/psiQME",
      excerpt: "Discover how Adranet transforms your internet experience with free, seamless connectivity."
    },
    {
      id: 2,
      title: "Adranet: Elevate Your Online Experience with Next-Gen Technology",
      date: "May 2024",
      image: "https://adranet.com/assets/img/b222.png",
      link: "https://medium.com/@rutujajk4/dopanet-elevate-your-online-experience-with-next-gen-technology-d0c2d95bbd61",
      excerpt: "Explore the next generation of internet technology that's changing how we connect online."
    },
    {
      id: 3,
      title: "Best Wi-Fi monetization tool in India",
      date: "May 2024",
      image: "https://adranet.com/assets/img/1.jpg",
      link: "https://qr.ae/psWGkd",
      excerpt: "Learn about the leading Wi-Fi monetization solution revolutionizing internet access in India."
    },
    {
      id: 4,
      title: "Free Household Internet Access",
      date: "May 2024",
      image: "https://adranet.com/assets/img/b222.png",
      link: "https://householdfreeinternetacess.blogspot.com/2024/05/free-household-internet-access-in-our.html",
      excerpt: "Bringing free internet access to households across communities."
    },
    {
      id: 5,
      title: "Free internet access for smart city",
      date: "May 2024",
      image: "https://adranet.com/assets/img/b44.jpg",
      link: "https://freeinternetforsmartcity.blogspot.com/2024/05/free-internet-access-for-smart-city.html",
      excerpt: "How Adranet is enabling smart city initiatives with free internet infrastructure."
    },
    {
      id: 6,
      title: "Free Internet Model in Educational institutions",
      date: "April 2024",
      image: "https://adranet.com/assets/img/b11.jpg",
      link: "https://gapthedigitaldividefreeinternet.blogspot.com/2024/05/free-internet-model-in-educational.html",
      excerpt: "Bridging the digital divide in educational institutions with free internet access."
    },
    {
      id: 7,
      title: "How Government can provide free internet",
      date: "May 2024",
      image: "https://adranet.com/assets/img/b55.jpg",
      link: "#",
      excerpt: "Exploring government initiatives and policies for providing free internet to citizens."
    },
    {
      id: 8,
      title: "Free internet for rural areas",
      date: "May 2024",
      image: "https://adranet.com/assets/img/5.jpg",
      link: "#",
      excerpt: "Connecting rural communities with reliable, free internet infrastructure."
    }
  ];

  return (
    <section id="blogs" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Blogs
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights, news, and developments in WiFi monetization 
            and free internet technology.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="group card-hover glass-card overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blog.date}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(blog.link, '_blank')}
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
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
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Don't miss out on the latest updates about WiFi monetization and free internet technology.
              </p>
              <Button variant="gradient" size="lg">
                Subscribe to Our Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};