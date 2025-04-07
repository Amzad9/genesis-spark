
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamMember: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div 
      className="feature-card p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
        <img 
          src={member.image} 
          alt={member.name} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
      
      <div className="flex gap-3">
        {member.socials.twitter && (
          <a 
            href={member.socials.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-web3-purple transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
        )}
        {member.socials.linkedin && (
          <a 
            href={member.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-web3-purple transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {member.socials.github && (
          <a 
            href={member.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-web3-purple transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Alexandra Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Marcus Reynolds",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      socials: {
        twitter: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Priya Sharma",
      role: "Chief AI Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      socials: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Okafor",
      role: "Blockchain Lead",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      socials: {
        twitter: "#",
        github: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-muted-foreground">
            We've assembled a world-class team of researchers, engineers, and visionaries 
            who are passionate about creating the future of Web3 technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
