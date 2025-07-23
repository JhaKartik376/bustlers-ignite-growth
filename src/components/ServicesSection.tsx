import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies tailored for emerging markets",
      features: ["SEO Optimization", "Social Media Strategy", "Content Production", "Brand Development"]
    },
    {
      title: "Web Development", 
      description: "Modern, responsive websites and applications built for performance",
      features: ["Custom Web Apps", "E-commerce Platforms", "Mobile Optimization", "Performance Tuning"]
    },
    {
      title: "PPC & Lead Generation",
      description: "Targeted advertising campaigns that drive qualified leads and conversions",
      features: ["Google Ads", "Facebook Advertising", "Lead Funnels", "Conversion Optimization"]
    },
    {
      title: "STEM Education",
      description: "Comprehensive STEM programs including robotics and hands-on learning",
      features: ["Classroom Programs", "STEM Lab Setup", "Teacher Training", "Educational Materials"]
    },
    {
      title: "Branding & Personal Branding",
      description: "Build powerful brand identities that resonate with your target audience",
      features: ["Brand Strategy", "Visual Identity", "Personal Branding", "LinkedIn Growth"]
    },
    {
      title: "Research & Development",
      description: "Innovation-driven R&D services for product development and market research",
      features: ["Market Research", "Product Development", "Ideation Workshops", "Innovation Strategy"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Our Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to drive growth and innovation across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none bg-card/50 backdrop-blur group">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg font-medium">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                <ul className="space-y-1 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full text-xs sm:text-sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-16">
          <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto">
            Let's discuss how our services can help you achieve sustainable growth
          </p>
          <Button variant="default" size="lg" className="w-full sm:w-auto px-8">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;