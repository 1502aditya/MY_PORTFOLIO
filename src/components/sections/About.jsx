import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#0D1117] rounded-xl p-8 border border-[#30363D]">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-white border-b border-[#30363D] pb-3">
                <User className="mr-3 text-[#00FFAB]" size={28} />
                My Journey
              </h3>
              <p className="text-[#8B949E] leading-relaxed mb-6">
                I am a passionate and driven Computer Science student at Dronacharya Group of Institutions 
                with a strong foundation in web development, machine learning, and programming. My journey in 
                tech is fueled by a curiosity to solve real-world problems and build innovative solutions.
              </p>
              <p className="text-[#8B949E] leading-relaxed">
                Through internships and projects, I've gained hands-on experience in technologies like the 
                MERN stack and Python-based AI frameworks. I am eager to apply my skills and continue 
                learning in a challenging and collaborative environment.
              </p>
            </div>
            <div className="bg-[#0D1117] rounded-xl p-6 border border-[#30363D]">
              <h4 className="font-semibold mb-4 flex items-center text-white">
                <MapPin className="mr-2 text-[#58A6FF]" size={20} />
                Location
              </h4>
              <p className="text-[#8B949E]">Greater Noida 201306</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#0D1117] rounded-xl p-8 border border-[#30363D]">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-white border-b border-[#30363D] pb-3">
                <GraduationCap className="mr-3 text-[#00FFAB]" size={28} />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#00FFAB] pl-4">
                  <h4 className="font-semibold text-lg text-[#E6EDF3]">Bachelor of Technology</h4>
                  <p className="text-[#58A6FF]">Computer Science and Information Technology</p>
                  <p className="text-[#8B949E]">Dronacharya Group of Institutions</p>
                  <p className="text-sm text-[#8B949E]">Oct 2022 - Sept 2026 | Percentage: 86%</p>
                </div>
                <div className="border-l-4 border-[#30363D] pl-4">
                  <h4 className="font-semibold text-lg text-[#E6EDF3]">Intermediate</h4>
                  <p className="text-[#58A6FF]">RPM Academy</p>
                  <p className="text-[#8B949E]">Gorakhpur, India | 2021 | 85.8%</p>
                </div>
                <div className="border-l-4 border-[#30363D] pl-4">
                  <h4 className="font-semibold text-lg text-[#E6EDF3]">High School</h4>
                  <p className="text-[#58A6FF]">Sacred Heart Senior Secondary School</p>
                  <p className="text-[#8B949E]">Nichlaul, Maharajganj, India | 2019 | 90.8%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;