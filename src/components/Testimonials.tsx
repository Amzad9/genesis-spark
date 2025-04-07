
import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="testimonial-card h-full flex flex-col">
      <div className="text-web3-purple/70 mb-4">
        <Quote className="h-8 w-8" />
      </div>
      
      <p className="text-lg mb-6 flex-grow italic text-muted-foreground">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sophia Chen",
      role: "CTO",
      company: "NexusChain",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      quote: "Genesis Spark has transformed how we approach blockchain integration. Their AI solutions cut our development time in half while improving security metrics across the board."
    },
    {
      name: "Michael Rodriguez",
      role: "Investment Director",
      company: "BlockVenture Capital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      quote: "After reviewing dozens of Web3 startups, Genesis Spark stands out with their innovative approach to decentralized intelligence. Their growth metrics are exceptional."
    },
    {
      name: "Aisha Patel",
      role: "Founder",
      company: "MetaVerse Labs",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
      quote: "Partnering with Genesis Spark allowed us to incorporate advanced AI capabilities into our metaverse platform without compromising our decentralized principles."
    },
    {
      name: "David Kim",
      role: "Head of Innovation",
      company: "Global Blockchain Alliance",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      quote: "The Genesis Spark team delivers solutions that are years ahead of the competition. Their predictive analytics module has become essential to our strategic planning."
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-web3-purple/5 to-background">
      <div className="container mx-auto px-4">
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
            What Our <span className="text-gradient">Partners Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry leaders trust our technology to power their blockchain innovations
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
