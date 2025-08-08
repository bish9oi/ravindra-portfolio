import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from './3d/Scene3D';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-neon">
                RB
              </div>
            </div>
            <div className="absolute inset-0 rounded-full animate-pulse" style={{ boxShadow: 'var(--glow-primary)' }} />
          </motion.div>
          
          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-4 glitch text-neon"
            data-text="Ravindra Bishnoi"
          >
            Ravindra Bishnoi
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            <span className="text-neon-secondary">Final-year Student</span> &{' '}
            <span className="text-neon">MERN Stack Developer</span>
          </motion.p>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I merge stunning design with flawless functionality to create immersive online experiences 
            and thrive in the world of coding challenges. <span className="text-neon">450+ problems solved</span> 
            across multiple platforms.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button className="btn-cyber" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button className="btn-cyber-secondary" asChild>
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com/bish9oi" className="p-3 rounded-full border border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ravindra-bishnoi-1601a125a/" className="p-3 rounded-full border border-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:bishnoiravindra344@gmail.com" className="p-3 rounded-full border border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};