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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About The Bustlers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a pioneering startup dedicated to driving innovation and creating sustainable solutions 
            that transform underserved markets across multiple industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              To bridge the gap between innovative technology and underserved communities, 
              creating sustainable growth opportunities that transform lives and build thriving economies.
            </p>
            <p className="text-lg text-muted-foreground">
              Through our comprehensive approach to marketing, education technology, agriculture, 
              and e-commerce, we empower communities with the tools they need to succeed in the modern economy.
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg text-muted-foreground mb-6">
              A world where every community, regardless of location or resources, has access to 
              innovative solutions that drive sustainable growth and prosperity.
            </p>
            <div className="bg-gradient-primary p-6 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-3">Impact So Far</h4>
              <ul className="space-y-2">
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