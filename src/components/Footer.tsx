
import React from "react";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 bg-web3-darkblue/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-web3-purple/10 hover:bg-web3-purple/20 text-web3-purple transition-colors"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-web3-purple/20 flex items-center justify-center">
                <span className="text-web3-purple font-bold">GS</span>
              </div>
              <span className="font-bold text-lg">Genesis<span className="text-web3-purple">Spark</span></span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Revolutionizing Web3 with advanced AI technology and blockchain solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Genesis Spark. All rights reserved.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-web3-purple transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
          <p>
            Genesis Spark is a fictional brand created for demonstration purposes only.
          </p>
          <p className="mt-2">
            Design & development by Web3 Genesis Spark Team. Images provided by Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
