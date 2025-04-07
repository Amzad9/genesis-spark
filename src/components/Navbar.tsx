
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Zap } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="relative">
            <Layers className="h-8 w-8 text-web3-purple" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-web3-teal rounded-full animate-pulse-light" />
          </div>
          <span className="font-bold text-xl">Genesis<span className="text-web3-purple">Spark</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("features")} 
            className="text-sm font-medium transition-colors hover:text-web3-purple"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-sm font-medium transition-colors hover:text-web3-purple"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("team")} 
            className="text-sm font-medium transition-colors hover:text-web3-purple"
          >
            Team
          </button>
        </div>

        <div>
          <Button 
            onClick={() => scrollToSection("contact")} 
            variant="default" 
            className="bg-web3-purple hover:bg-web3-purple/90 text-white rounded-full px-6"
          >
            <Zap className="h-4 w-4 mr-2" /> 
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
