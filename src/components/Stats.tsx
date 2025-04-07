
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
      className="text-center p-6"
    >
      <div className="mx-auto mb-5 p-3 rounded-full w-16 h-16 flex items-center justify-center bg-web3-purple/10">
        {item.icon}
      </div>
      <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-web3-purple to-web3-teal bg-clip-text text-transparent">
        {item.value}
      </h3>
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
    <section className="py-20 bg-gradient-to-r from-web3-purple/10 to-web3-teal/10">
      <div className="container mx-auto px-4">
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
    </section>
  );
};

export default Stats;
