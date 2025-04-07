
import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Shield,
  DollarSign,
  Building,
  Map,
  ShieldCheck
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  gradient: string;
}

const StatCard = ({ item }: { item: StatItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: item.delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-md p-8 group"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-web3-purple/20 via-transparent to-web3-teal/20 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3,
              scale: 0.5
            }}
            animate={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.2, 0.5, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 6 + Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              background: item.gradient,
              filter: 'blur(8px)'
            }}
          />
        ))}
      </div>
      
      {/* Icon with animation */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 relative">
          {/* Icon background */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-web3-purple to-web3-teal opacity-20 blur-md"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: '100%', height: '100%' }}
          />
          
          {/* Icon container */}
          <div className="relative p-4 rounded-full bg-gradient-to-br from-background via-background/80 to-background/40 border border-white/10 backdrop-blur-sm shadow-xl">
            <motion.div
              animate={{ 
                rotate: [0, 8, 0, -8, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 6, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="w-12 h-12 flex items-center justify-center"
            >
              <div className="w-full h-full" style={{
                background: `linear-gradient(135deg, ${item.gradient.split(' ')[0]}, ${item.gradient.split(' ')[2]})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Value with animated gradient */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: item.delay + 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-6xl font-bold mb-2"
            style={{
              background: `linear-gradient(135deg, ${item.gradient})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            {item.value}
          </motion.h3>
          
          {/* Label */}
          <motion.p 
            className="text-xl font-medium text-white/80 mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay + 0.4 }}
            viewport={{ once: true }}
          >
            {item.label}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats: StatItem[] = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      value: "$24M+",
      label: "Total Investment",
      delay: 0.1,
      gradient: "var(--web3-purple) var(--web3-blue) var(--web3-teal)"
    },
    {
      icon: <Building className="h-10 w-10" />,
      value: "120+",
      label: "Global Partners",
      delay: 0.2,
      gradient: "#F97316 #FFA500 #FBBF24"
    },
    {
      icon: <Map className="h-10 w-10" />,
      value: "32",
      label: "Countries Served",
      delay: 0.3,
      gradient: "#0EA5E9 #38BDF8 #7DD3FC"
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      value: "99.99%",
      label: "Uptime SLA",
      delay: 0.4,
      gradient: "#10B981 #34D399 #6EE7B7"
    }
  ];

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-web3-darkblue/80 to-black z-0"></div>
      
      {/* Animated waves */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(155,135,245,0.3) 0%, rgba(14,165,233,0.1) 70%, transparent 100%)`,
              backgroundSize: `${100 + i * 20}% ${100 + i * 20}%`,
              backgroundPosition: 'center',
              filter: 'blur(30px)',
              transform: 'scale(1.2)'
            }}
            animate={{
              scale: [1.2, 1.4, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mesh grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(var(--web3-purple) 1px, transparent 1px), linear-gradient(90deg, var(--web3-purple) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }} />
      </div>
      
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 500,
          }}
          animate={{
            x: [Math.random() * 1000, Math.random() * 1000],
            y: [Math.random() * 500, Math.random() * 500],
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut",
          }}
          className="absolute rounded-full opacity-30"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            background: i % 2 === 0 ? 'var(--web3-purple)' : 'var(--web3-teal)',
            filter: 'blur(50px)',
          }}
        />
      ))}
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-web3-purple via-web3-blue to-web3-teal bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Growth Metrics
          </motion.h2>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-web3-purple to-web3-teal mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We've achieved significant milestones through innovation and dedication
          </motion.p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} item={stat} />
          ))}
        </div>
      </motion.div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-web3-purple/50 to-transparent"></div>
      <div className="absolute bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-web3-teal/30 to-transparent"></div>
    </section>
  );
};

export default Stats;
