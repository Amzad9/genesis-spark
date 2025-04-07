
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const technologies = [
    { name: "Blockchain", percentage: 90 },
    { name: "Neural Networks", percentage: 85 },
    { name: "Quantum Computing", percentage: 70 },
    { name: "Smart Contracts", percentage: 95 },
    { name: "Zero-Knowledge Proofs", percentage: 80 },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-web3-darkblue/10 to-web3-purple/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Genesis Spark</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2024, Genesis Spark emerged from a vision to bridge the gap between 
              artificial intelligence and blockchain technology. Our team of industry veterans 
              and brilliant newcomers has created a platform that is revolutionizing how 
              decentralized applications operate.
            </p>
            <p className="text-muted-foreground mb-6">
              At Genesis Spark, we believe in a future where intelligent systems and 
              decentralized networks converge to create unprecedented value and opportunity. 
              Our mission is to accelerate the adoption of Web3 technologies by making them 
              more intelligent, accessible, and secure.
            </p>

            <div className="hidden md:block">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-web3-purple/30 to-transparent my-8"></div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-web3-purple font-medium">$14M+</span>
                <span className="text-web3-purple font-medium">$80M+</span>
                <span className="text-web3-purple font-medium">24+</span>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Funding Raised</span>
                <span>Market Valuation</span>
                <span>Global Partners</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-6">Our Technology Stack</h3>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.percentage}%</span>
                  </div>
                  <motion.div 
                    className="h-2 bg-gray-200/20 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-web3-purple to-web3-teal"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percentage}%` }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:hidden mt-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-web3-purple/30 to-transparent my-8"></div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-web3-purple font-medium">$14M+</p>
                  <p className="text-xs text-muted-foreground">Funding Raised</p>
                </div>
                <div className="text-center">
                  <p className="text-web3-purple font-medium">$80M+</p>
                  <p className="text-xs text-muted-foreground">Market Valuation</p>
                </div>
                <div className="text-center">
                  <p className="text-web3-purple font-medium">24+</p>
                  <p className="text-xs text-muted-foreground">Global Partners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
