import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection }) => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1Jab2dCviCh74daRQyICsuRNFMFeyYT8s/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-[#0D1117]/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#30363D] shadow-lg">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/18a2dd9d-196b-416e-88bc-142d2681317f/54e70df02c827e41471c9d462820b347.png"
                alt="Aditya Kumar Gupta - Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full border-2 border-[#00FFAB] opacity-30 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I'm Aditya Kumar Gupta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#00FFAB] font-medium mb-8"
        >
          Budding Software Engineer & AI Explorer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-[#8B949E] mb-12 max-w-3xl mx-auto"
        >
          A Computer Science student passionate about building dynamic web applications
          and exploring the world of Artificial Intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-[#00FFAB] text-black hover:bg-opacity-80 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <Code className="mr-2" size={20} />
            View Projects
          </Button>
          
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            className="border-2 border-[#30363D] text-[#8B949E] hover:bg-[#161B22] hover:text-[#E6EDF3] px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-[#00FFAB]" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;