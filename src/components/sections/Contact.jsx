
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleContactClick = (type) => {
    if (type === 'email') {
      window.open('mailto:7318adityagupta@gmail.com');
    } else if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/aditya-kumar-gupta-59311b262/', '_blank');
    } else if (type === 'github') {
      window.open('https://github.com/1502aditya', '_blank');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 Form submission is for demonstration only!',
      description: "This feature isn't fully implemented yet, but you can request it next! 🚀",
      variant: 'destructive',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto"></div>
          <p className="text-[#8B949E] mt-6 max-w-2xl mx-auto">
            I'm currently seeking new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div onClick={() => handleContactClick('email')} className="bg-[#0D1117] p-6 rounded-lg border border-[#30363D] flex items-center gap-4 cursor-pointer hover:border-[#00FFAB] transition-colors">
              <Mail className="text-[#00FFAB]" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-[#8B949E] break-all">7318adityagupta@gmail.com</p>
              </div>
            </div>
            <div onClick={() => handleContactClick('linkedin')} className="bg-[#0D1117] p-6 rounded-lg border border-[#30363D] flex items-center gap-4 cursor-pointer hover:border-[#58A6FF] transition-colors">
              <Linkedin className="text-[#58A6FF]" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <p className="text-[#8B949E]">aditya-kumar-gupta</p>
              </div>
            </div>
            <div onClick={() => handleContactClick('github')} className="bg-[#0D1117] p-6 rounded-lg border border-[#30363D] flex items-center gap-4 cursor-pointer hover:border-[#E6EDF3] transition-colors">
              <Github className="text-[#E6EDF3]" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <p className="text-[#8B949E]">1502aditya</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0D1117] p-8 rounded-lg border border-[#30363D]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8B949E] mb-2">Name</label>
                <input type="text" name="name" id="name" required className="w-full bg-[#0D1117] border border-[#30363D] text-white rounded-md p-3 focus:ring-2 focus:ring-[#00FFAB] focus:outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#8B949E] mb-2">Email</label>
                <input type="email" name="email" id="email" required className="w-full bg-[#0D1117] border border-[#30363D] text-white rounded-md p-3 focus:ring-2 focus:ring-[#00FFAB] focus:outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#8B949E] mb-2">Message</label>
                <textarea name="message" id="message" rows="4" required className="w-full bg-[#0D1117] border border-[#30363D] text-white rounded-md p-3 focus:ring-2 focus:ring-[#00FFAB] focus:outline-none transition-colors"></textarea>
              </div>
              <Button type="submit" className="w-full bg-[#00FFAB] text-black hover:bg-opacity-80 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
