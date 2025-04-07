
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Zap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "features", label: "Features" },
    { id: "about", label: "About" },
    { id: "roadmap", label: "Roadmap" },
    { id: "pricing", label: "Pricing" },
    { id: "team", label: "Team" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-3" : "py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2 z-50">
          <div className="relative">
            <Layers className="h-8 w-8 text-web3-purple" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-web3-teal rounded-full animate-pulse-light" />
          </div>
          <span className="font-bold text-xl">Genesis<span className="text-web3-purple">Spark</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className="text-sm font-medium transition-colors hover:text-web3-purple"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            onClick={() => scrollToSection("contact")} 
            variant="default" 
            className="hidden md:flex bg-web3-purple hover:bg-web3-purple/90 text-white rounded-full px-6 shadow-md shadow-web3-purple/10 hover:shadow-web3-purple/20"
          >
            <Zap className="h-4 w-4 mr-2" /> 
            Contact
          </Button>
          
          <button 
            className="md:hidden text-foreground hover:text-web3-purple transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-background backdrop-blur-md border-b border-border shadow-lg"
          >
            <div className="container py-6 px-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="py-2 text-left font-medium hover:text-web3-purple transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="default" 
                className="mt-2 bg-web3-purple hover:bg-web3-purple/90 text-white rounded-full"
              >
                <Zap className="h-4 w-4 mr-2" /> 
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
