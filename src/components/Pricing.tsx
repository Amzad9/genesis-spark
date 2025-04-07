
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  buttonText: string;
}

const PricingCard = ({ tier, index }: { tier: PricingTier; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className={`pricing-card p-8 flex flex-col h-full ${tier.featured ? "featured" : ""}`}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-web3-purple text-white px-4 py-1 rounded-full text-sm font-medium z-10">
          Popular Choice
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{tier.price}</span>
        {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
      </div>
      <p className="text-muted-foreground mb-6">{tier.description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-web3-purple mr-2 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        className={`${
          tier.featured
            ? "bg-web3-purple hover:bg-web3-purple/90"
            : "bg-white/10 hover:bg-white/20 text-foreground"
        } rounded-lg py-6 w-full font-medium transition-all duration-300 mt-auto`}
      >
        {tier.featured && <Zap className="mr-2 h-5 w-5" />}
        {tier.buttonText}
      </Button>
    </motion.div>
  );
};

const Pricing = () => {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for early-stage startups exploring Web3 integration",
      features: [
        "Smart Contract Analysis (up to 10/month)",
        "Basic Security Audits",
        "Access to Core AI Models",
        "Community Support",
        "Developer Documentation",
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Growth",
      price: "$1,499",
      description: "For established businesses ready to scale blockchain operations",
      features: [
        "Smart Contract Analysis (unlimited)",
        "Advanced Security Protocols",
        "Custom AI Model Training",
        "Priority Support (24/7)",
        "API Access with 1M requests/month",
        "Dedicated Account Manager"
      ],
      featured: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with complex requirements",
      features: [
        "Full Platform Access",
        "Custom Integration Services",
        "Private Blockchain Deployment",
        "White-label Solutions",
        "Compliance & Regulatory Support",
        "On-premise Installation Options",
        "Custom SLAs"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-web3-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
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
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include our core features with different levels of support and capacity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Need a custom solution? <a href="#contact" className="text-web3-purple hover:underline">Contact our sales team</a> for enterprise pricing.
          </p>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-web3-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-web3-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Pricing;
