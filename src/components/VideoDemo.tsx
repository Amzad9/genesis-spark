
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video-demo" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-gradient">Genesis Spark</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our revolutionary AI-powered Web3 technology is transforming the digital landscape through secure, decentralized intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-web3-purple/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-web3-teal/30 blur-3xl"></div>
          
          {/* Video container with glassmorphism effect */}
          <div className="glass p-3 rounded-2xl border border-white/30 relative overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                muted
                playsInline
                loop
              >
                <source src="https://cdn.dribbble.com/users/924869/videos/50649/big_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Custom video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  onClick={handlePlayPause}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                </Button>
                
                <Button 
                  onClick={handleMuteToggle}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </div>
              
              <Button 
                onClick={handleFullscreen}
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Play overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayPause}
              >
                <div className="h-20 w-20 rounded-full bg-web3-purple/80 flex items-center justify-center shadow-lg shadow-web3-purple/30 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
            )}
          </div>
          
          {/* Animated particles on top of video */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite alternate`
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Feature highlights below the video */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Analysis",
              description: "Real-time data processing with advanced neural networks",
              icon: "✨",
              delay: 0.1
            },
            {
              title: "Blockchain Security",
              description: "Enterprise-grade protection with decentralized verification",
              icon: "🔐",
              delay: 0.2
            },
            {
              title: "Seamless Integration",
              description: "Works with your existing systems out of the box",
              icon: "🔄",
              delay: 0.3
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border border-white/20"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
