
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleContactClick = (type) => {
    if (type === 'email') {
      window.open('mailto:7318adityagupta@gmail.com');
    } else if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/aditya-kumar-gupta-59311b262/', '_blank');
    } else if (type === 'github') {
      window.open('https://github.com/1502aditya', '_blank');
    }
  };

  return (
    <footer className="bg-[#0D1117] text-[#8B949E] text-sm py-8 border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center space-x-6 mb-6"
        >
          <button onClick={() => handleContactClick('github')} className="text-[#8B949E] hover:text-[#00FFAB] transition-colors">
            <Github size={24} />
          </button>
          <button onClick={() => handleContactClick('linkedin')} className="text-[#8B949E] hover:text-[#58A6FF] transition-colors">
            <Linkedin size={24} />
          </button>
          <button onClick={() => handleContactClick('email')} className="text-[#8B949E] hover:text-[#E6EDF3] transition-colors">
            <Mail size={24} />
          </button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          © {new Date().getFullYear()} Aditya Kumar Gupta. Built with passion and React.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs mt-1"
        >
          Design inspired by modern tech aesthetics.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
