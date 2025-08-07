import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamPhoto from "@/assets/team-photo.png";

export const Team = () => {
  const teamMembers = [
    {
      name: "RAJESH SALVE",
      position: "Director - Sales",
      image: teamPhoto,
      responsibilities: [
        "Overseeing all departments and functions to ensure smooth operations",
        "Managing areas like sales and marketing while achieving targets",
        "Implementing strategies and leading teams toward company objectives"
      ]
    },
    {
      name: "KIRAN RAHANE",
      position: "Director - Operations",
      image: teamPhoto,
      responsibilities: [
        "Overseeing daily operations and ensuring efficiency across departments",
        "Developing strategic operational plans and managing budgets",
        "Identifying areas for improvement and resolving operational challenges"
      ]
    },
    {
      name: "SANGRAM BARGE",
      position: "Director - Finance",
      image: teamPhoto,
      responsibilities: [
        "Developing and implementing the company's financial strategy",
        "Providing financial expertise and guidance for strategic decision-making",
        "Managing budgets and forecasting future financial performance"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our leadership team at AdraNet Technologies Pvt Ltd, committed to driving 
            innovation and operational excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.position}
                  </Badge>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {member.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};