import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
// Animated floating torus and lights for 3D background
const FloatingTorus = () => {
  const torusRef = useRef<THREE.Mesh | null>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.7;
      torusRef.current.rotation.y = t * 1.1;
      torusRef.current.position.y = Math.sin(t * 1.2) * 0.2;
    }
  });
  return (
    <mesh ref={torusRef} position={[0, 0, 0]} castShadow receiveShadow>
      <torusGeometry args={[0.7, 0.22, 32, 100]} />
      <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.3} />
    </mesh>
  );
};

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
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-full h-64 sm:h-80 pointer-events-none opacity-70">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} intensity={0.7} />
          <pointLight position={[-2, 2, 2]} intensity={0.5} color="#60a5fa" />
          <pointLight position={[2, -2, 2]} intensity={0.5} color="#f472b6" />
          <FloatingTorus />
        </Canvas>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Our Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to drive growth and innovation across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-none bg-card/50 backdrop-blur group">
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
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto">
            Let's discuss how our services can help you achieve sustainable growth
          </p>
          <Button variant="default" size="lg" className="w-full sm:w-auto px-8">
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;