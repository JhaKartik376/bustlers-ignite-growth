import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            Pioneering Innovation for
            <span className="block text-muted-foreground">
              Underserved Markets
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The Bustlers drives innovation in marketing, ed-tech, agriculture, and e-commerce, 
            creating sustainable solutions that transform communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button variant="default" size="lg" className="px-8">
              Enquire Now
            </Button>
            <Button variant="ghost" size="lg" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;