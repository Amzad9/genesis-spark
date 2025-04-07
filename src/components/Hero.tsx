
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 30;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 15 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 20 + 10;
      const opacity = Math.random() * 0.3 + 0.1;
      
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = opacity.toString();
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
        const moveX = (x - 0.5) * speed * 100;
        const moveY = (y - 0.5) * speed * 50;
        
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-web3-purple/40 via-web3-blue/30 to-web3-teal/30 animate-gradient-shift"></div>
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
        
        {/* Added animated shapes */}
        <div className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-web3-purple/20 blur-3xl animate-pulse-slow parallax-element" data-speed="0.03"></div>
        <div className="absolute bottom-[15%] right-[10%] w-40 h-40 rounded-full bg-web3-teal/20 blur-3xl animate-pulse-slow parallax-element" data-speed="0.05"></div>
        <div className="absolute top-[60%] left-[65%] w-24 h-24 rounded-full bg-web3-blue/20 blur-3xl animate-pulse-slow parallax-element" data-speed="0.04"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 pt-10 md:pt-0 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-fade-in parallax-element" data-speed="0.02" style={{ animationDelay: "0.2s" }}>
            <span className="px-3 py-1 rounded-full bg-web3-purple/10 border border-web3-purple/20 text-web3-purple text-xs font-medium flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Revolutionizing Web3 with AI
            </span>
          </div>
          
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in parallax-element" data-speed="0.01" style={{ animationDelay: "0.4s" }}>
            The Future of <span className="text-gradient relative">
              Decentralized Intelligence
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-web3-purple to-web3-teal"></span>
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Genesis Spark combines cutting-edge AI with blockchain technology to create a new generation of
            intelligent, secure, and transparent applications for the Web3 ecosystem.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              className="rounded-full px-8 py-7 bg-web3-purple hover:bg-web3-purple/90 text-white text-lg font-semibold shadow-lg shadow-web3-purple/20 transition-all duration-300 hover:shadow-xl hover:shadow-web3-purple/30"
              onClick={() => scrollToFeatures()}
            >
              Explore Our Technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-7 border-2 border-web3-purple/20 text-web3-purple text-lg font-semibold hover:bg-web3-purple/5 transition-all duration-300"
            >
              Investor Relations
            </Button>
          </div>
          
          <div className="mt-28 md:mt-36 animate-bounce">
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
