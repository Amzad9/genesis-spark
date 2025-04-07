
import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Shield, 
  Zap, 
  Globe, 
  BarChart, 
  Lock,
  Cpu,
  Network
} from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay,
  index
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
  index: number;
}) => {
  return (
    <motion.div 
      className="feature-card p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-5 p-3 rounded-xl w-14 h-14 flex items-center justify-center bg-gradient-to-br from-web3-purple/20 to-web3-teal/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Code className="h-7 w-7 text-web3-purple" />,
      title: "Smart Contract AI",
      description: "Our AI analyzes and optimizes smart contracts for security, efficiency, and gas optimization.",
      delay: 0.1
    },
    {
      icon: <Shield className="h-7 w-7 text-web3-purple" />,
      title: "Decentralized Security",
      description: "Advanced protection systems distributed across the blockchain for unmatched security.",
      delay: 0.2
    },
    {
      icon: <Zap className="h-7 w-7 text-web3-purple" />,
      title: "Lightning Fast Processing",
      description: "Process millions of transactions per second with our proprietary layer-2 solution.",
      delay: 0.3
    },
    {
      icon: <Globe className="h-7 w-7 text-web3-purple" />,
      title: "Global Accessibility",
      description: "Built for worldwide adoption with multi-language support and regional compliance.",
      delay: 0.4
    },
    {
      icon: <BarChart className="h-7 w-7 text-web3-purple" />,
      title: "Predictive Analytics",
      description: "Harness the power of AI to predict market trends and optimize investment strategies.",
      delay: 0.5
    },
    {
      icon: <Lock className="h-7 w-7 text-web3-purple" />,
      title: "Privacy Focused",
      description: "Zero-knowledge proofs ensure your data remains private while maintaining transparency.",
      delay: 0.6
    },
    {
      icon: <Cpu className="h-7 w-7 text-web3-purple" />,
      title: "Quantum Resistant",
      description: "Future-proof cryptography designed to withstand quantum computing advancements.",
      delay: 0.7
    },
    {
      icon: <Network className="h-7 w-7 text-web3-purple" />,
      title: "Seamless Integration",
      description: "Connect with existing blockchain networks and Web2 services through our adaptive API.",
      delay: 0.8
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 mx-auto w-16 h-1 bg-web3-purple rounded-full"
          ></motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cutting-Edge <span className="text-gradient">Technology</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our platform combines the latest advancements in artificial intelligence with blockchain 
            technology to create powerful solutions for the decentralized web.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Enhanced background elements */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-web3-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-32 w-72 h-72 bg-web3-teal/10 rounded-full blur-3xl"></div>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl rounded-full opacity-10 z-0"
        style={{ 
          background: 'radial-gradient(circle, rgba(155,135,245,0.3) 0%, rgba(155,135,245,0) 70%)'
        }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
};

export default Features;
