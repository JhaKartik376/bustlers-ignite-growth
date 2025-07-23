import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      title: "Innovation Focus",
      description: "Pioneering solutions in marketing, ed-tech, agriculture, and e-commerce",
      icon: "🚀"
    },
    {
      title: "Underserved Markets",
      description: "Targeting untapped potential in communities that need sustainable growth",
      icon: "🌍"
    },
    {
      title: "Sustainable Impact", 
      description: "Creating lasting change through technology and education",
      icon: "💡"
    },
    {
      title: "Community Growth",
      description: "Empowering communities with tools and knowledge for success",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-6">About The Bustlers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a pioneering startup dedicated to driving innovation and creating sustainable solutions 
            that transform underserved markets across multiple industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-none bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-light mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To bridge the gap between innovative technology and underserved communities, 
              creating sustainable growth opportunities that transform lives and build thriving economies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our comprehensive approach to marketing, education technology, agriculture, 
              and e-commerce, we empower communities with the tools they need to succeed in the modern economy.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-light mb-6">Our Vision</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A world where every community, regardless of location or resources, has access to 
              innovative solutions that drive sustainable growth and prosperity.
            </p>
            <div className="bg-card border p-6 rounded">
              <h4 className="text-lg font-medium mb-4">Impact So Far</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Launched STEM programs in underserved communities</li>
                <li>• Developed sustainable agriculture solutions</li>
                <li>• Created marketing frameworks for local businesses</li>
                <li>• Built e-commerce platforms for emerging markets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;