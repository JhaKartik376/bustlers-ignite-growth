import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import heroImage from "@/assets/hero-bg.jpg";


import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// Modern animated floating, color-shifting 3D sphere
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh | null>(null);
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
      // Rotation
      meshRef.current.rotation.y += 0.01;
      // Color shift
      const t = state.clock.getElapsedTime();
      meshRef.current.material.color.setHSL((t * 0.1) % 1, 0.7, 0.6);
    }
  });
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[0.9, 64, 64]} />
      <meshStandardMaterial color="#fff" roughness={0.2} metalness={0.7} />
    </mesh>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* 3D Animation: Modern Animated Sphere */}
      <div className="absolute left-1/2 top-10 sm:top-20 -translate-x-1/2 z-0 w-40 h-40 sm:w-64 sm:h-64 opacity-90 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 3] }} shadows>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 4, 2]} intensity={1.2} castShadow />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-0 sm:px-6 text-center text-foreground flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-light mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pioneering Innovation for
            <span className="block text-muted-foreground">
              Underserved Markets
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Bustlers drives innovation in marketing, ed-tech, agriculture, and e-commerce, 
            creating sustainable solutions that transform communities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="default" size="lg" className="w-full sm:w-auto px-8">
              Enquire Now
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto px-8">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;