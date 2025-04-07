
import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Shield
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ item }: { item: StatItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: item.delay }}
      viewport={{ once: true }}
      className="glow-effect text-center p-6"
    >
      <div className="mx-auto mb-5 p-3 rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br from-web3-purple/20 to-web3-teal/20">
        <motion.div
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 5, 
            ease: "easeInOut", 
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 0
          }}
        >
          {item.icon}
        </motion.div>
      </div>
      <motion.h3 
        className="text-4xl font-bold mb-2 bg-gradient-to-r from-web3-purple to-web3-teal bg-clip-text text-transparent"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        {item.value}
      </motion.h3>
      <p className="text-muted-foreground">{item.label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats: StatItem[] = [
    {
      icon: <TrendingUp className="h-8 w-8 text-web3-purple" />,
      value: "$24M+",
      label: "Total Investment",
      delay: 0.1
    },
    {
      icon: <Users className="h-8 w-8 text-web3-purple" />,
      value: "120+",
      label: "Global Partners",
      delay: 0.2
    },
    {
      icon: <Globe className="h-8 w-8 text-web3-purple" />,
      value: "32",
      label: "Countries Served",
      delay: 0.3
    },
    {
      icon: <Shield className="h-8 w-8 text-web3-purple" />,
      value: "99.99%",
      label: "Uptime SLA",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-web3-purple/5 via-transparent to-web3-teal/5 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              backgroundColor: Math.random() > 0.5 ? 'var(--web3-purple)' : 'var(--web3-teal)',
              filter: 'blur(60px)',
              animation: `pulse-slow ${Math.random() * 10 + 5}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} item={stat} />
          ))}
        </motion.div>
      </div>
      
      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-web3-purple/30 to-transparent"></div>
      <div className="absolute bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-web3-teal/20 to-transparent"></div>
    </section>
  );
};

export default Stats;
