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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth and innovation across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss how our services can help you achieve sustainable growth
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-3">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;