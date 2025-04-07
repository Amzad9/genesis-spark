
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Check, Sparkles } from "lucide-react";

interface RoadmapItem {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  features: string[];
}

const RoadmapItem = ({ item, index }: { item: RoadmapItem; index: number }) => {
  const statusColors = {
    completed: "bg-green-500",
    current: "bg-web3-purple",
    upcoming: "bg-gray-300"
  };

  const isCompleted = item.status === "completed";

  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={`timeline-dot ${statusColors[item.status]}`}></div>
      <div className="ml-8">
        <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {item.date}
        </span>
        <h3 className="text-xl font-bold mt-1 mb-2 flex items-center gap-2">
          {item.title}
          {item.status === "current" && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-web3-purple/10 text-web3-purple text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              Current Phase
            </span>
          )}
        </h3>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        
        <div className="roadmap-card p-4 bg-white/5">
          <ul className="space-y-2">
            {item.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                {isCompleted ? (
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                ) : (
                  <div className="h-5 w-5 rounded-full border border-muted-foreground mr-2 shrink-0 mt-0.5"></div>
                )}
                <span className={isCompleted ? "" : "text-muted-foreground"}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Roadmap = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      date: "Q1 2024",
      title: "Foundation Phase",
      description: "Establishing core technology and infrastructure",
      status: "completed",
      features: [
        "R&D team assembly",
        "Core algorithm development",
        "Initial investor funding secured",
        "Technology proof-of-concept"
      ]
    },
    {
      date: "Q2 2024",
      title: "Alpha Release",
      description: "First product deployment with limited features",
      status: "completed",
      features: [
        "Smart contract analysis engine",
        "Private testnet deployment",
        "Early partner integrations",
        "Security audit framework"
      ]
    },
    {
      date: "Q3 2024",
      title: "Beta Expansion",
      description: "Broadening platform capabilities and partner network",
      status: "current",
      features: [
        "Public beta release",
        "API ecosystem expansion",
        "Enhanced AI model training",
        "Cross-chain interoperability",
        "Partner ecosystem development"
      ]
    },
    {
      date: "Q4 2024",
      title: "Market Launch",
      description: "Full commercial release and scaling operations",
      status: "upcoming",
      features: [
        "Enterprise solution launch",
        "Global marketing campaign",
        "Additional blockchain support",
        "Advanced security protocols",
        "Expanded developer tools"
      ]
    },
    {
      date: "Q1 2025",
      title: "Global Expansion",
      description: "Scaling to international markets with regional adaptations",
      status: "upcoming",
      features: [
        "Regional compliance frameworks",
        "Localized support in major markets",
        "Strategic global partnerships",
        "Industry-specific solutions"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-background to-web3-teal/5">
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Our <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear vision for our development and growth trajectory
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-web3-purple/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Roadmap;
