
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 20;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 20 + 10;
      
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-web3-purple/20 via-web3-blue/10 to-web3-teal/20 animate-gradient-shift"></div>
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 pt-10 md:pt-0 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="px-3 py-1 rounded-full bg-web3-purple/10 border border-web3-purple/20 text-web3-purple text-xs font-medium">
              Revolutionizing Web3 with AI
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
            The Future of <span className="text-gradient">Decentralized Intelligence</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Genesis Spark combines cutting-edge AI with blockchain technology to create a new generation of
            intelligent, secure, and transparent applications for the Web3 ecosystem.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              className="rounded-full px-8 py-6 bg-web3-purple hover:bg-web3-purple/90 text-white"
              onClick={() => scrollToFeatures()}
            >
              Explore Our Technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 border-web3-purple/20 text-web3-purple hover:bg-web3-purple/5"
            >
              Investor Relations
            </Button>
          </div>
          
          <div className="mt-32 md:mt-40 animate-bounce">
            <button onClick={scrollToFeatures} className="text-muted-foreground hover:text-web3-purple transition-colors">
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
