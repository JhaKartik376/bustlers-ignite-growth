import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
// Animated floating spheres for 3D background
const FloatingSpheres = () => {
  const sphere1 = useRef<THREE.Mesh | null>(null);
  const sphere2 = useRef<THREE.Mesh | null>(null);
  const sphere3 = useRef<THREE.Mesh | null>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(t * 1.2) * 0.3 + 0.5;
      sphere1.current.position.x = Math.cos(t * 0.7) * 0.7;
    }
    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(t * 1.1) * 0.2 - 0.5;
      sphere2.current.position.x = Math.sin(t * 0.9) * 0.6;
    }
    if (sphere3.current) {
      sphere3.current.position.y = Math.sin(t * 0.8) * 0.4;
      sphere3.current.position.x = Math.cos(t * 1.3) * 0.5;
    }
  });
  return (
    <>
      <mesh ref={sphere1} position={[-1, 0.5, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#7dd3fc" transparent opacity={0.7} />
      </mesh>
      <mesh ref={sphere2} position={[1, -0.5, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#f472b6" transparent opacity={0.7} />
      </mesh>
      <mesh ref={sphere3} position={[0, 0, 0.7]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#a7f3d0" transparent opacity={0.7} />
      </mesh>
    </>
  );
};

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
    <section className="py-12 sm:py-16 md:py-20 bg-muted relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-full h-64 sm:h-80 pointer-events-none opacity-70">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} intensity={0.7} />
          <FloatingSpheres />
        </Canvas>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">About The Bustlers</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a pioneering startup dedicated to driving innovation and creating sustainable solutions 
            that transform underserved markets across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center border-none bg-card/50 backdrop-blur">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-xl sm:text-2xl mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              To bridge the gap between innovative technology and underserved communities, 
              creating sustainable growth opportunities that transform lives and build thriving economies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our comprehensive approach to marketing, education technology, agriculture, 
              and e-commerce, we empower communities with the tools they need to succeed in the modern economy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Our Vision</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              A world where every community, regardless of location or resources, has access to 
              innovative solutions that drive sustainable growth and prosperity.
            </p>
            <div className="bg-card border p-4 sm:p-6 rounded">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Impact So Far</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li> Launched STEM programs in underserved communities</li>
                <li> Developed sustainable agriculture solutions</li>
                <li> Created marketing frameworks for local businesses</li>
                <li> Built e-commerce platforms for emerging markets</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;