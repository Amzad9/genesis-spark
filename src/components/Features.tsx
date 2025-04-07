
import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Shield, 
  Zap, 
  Globe, 
  BarChart, 
  Lock
} from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="feature-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-4 p-3 rounded-full w-12 h-12 flex items-center justify-center bg-web3-purple/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-web3-purple" />,
      title: "Smart Contract AI",
      description: "Our AI analyzes and optimizes smart contracts for security, efficiency, and gas optimization.",
      delay: 0.1
    },
    {
      icon: <Shield className="h-6 w-6 text-web3-purple" />,
      title: "Decentralized Security",
      description: "Advanced protection systems distributed across the blockchain for unmatched security.",
      delay: 0.2
    },
    {
      icon: <Zap className="h-6 w-6 text-web3-purple" />,
      title: "Lightning Fast Processing",
      description: "Process millions of transactions per second with our proprietary layer-2 solution.",
      delay: 0.3
    },
    {
      icon: <Globe className="h-6 w-6 text-web3-purple" />,
      title: "Global Accessibility",
      description: "Built for worldwide adoption with multi-language support and regional compliance.",
      delay: 0.4
    },
    {
      icon: <BarChart className="h-6 w-6 text-web3-purple" />,
      title: "Predictive Analytics",
      description: "Harness the power of AI to predict market trends and optimize investment strategies.",
      delay: 0.5
    },
    {
      icon: <Lock className="h-6 w-6 text-web3-purple" />,
      title: "Privacy Focused",
      description: "Zero-knowledge proofs ensure your data remains private while maintaining transparency.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cutting-Edge <span className="text-gradient">Technology</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our platform combines the latest advancements in artificial intelligence with blockchain 
            technology to create powerful solutions for the decentralized web.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-web3-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-web3-teal/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
