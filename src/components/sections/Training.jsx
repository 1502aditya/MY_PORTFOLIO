
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Star, Calendar } from 'lucide-react';

const Training = () => {
  const trainingData = [
    {
      title: 'Winter Research Internship',
      company: 'IIT (ISM) Dhanbad',
      duration: 'Jan 2025 - March 2025',
      description: 'Exploring LLMs Capability in Cryptography - AI-driven encryption, cryptanalysis, and key management.',
      type: 'Research'
    },
    {
      title: 'Software Development Intern',
      company: 'Blue Planet Infosolutions',
      duration: 'Feb 2025 - Aug 2025',
      description: 'Backend development using Python, code debugging, testing, and collaborative development.',
      type: 'Internship'
    },
    {
      title: 'Summer Research Intern',
      company: 'IIT (ISM) Dhanbad',
      duration: 'May 2025 - July 2025',
      description: 'Brain Posterior Evidential Network - Python uncertainty modeling and algorithm implementation.',
      type: 'Research'
    }
  ];

  const certifications = [
    'Cryptography Network Security - IIT(ISM) Dhanbad',
    'Embedded Systems and Robotics - e-Yantra Lab Setup Initiative by IIT Bombay',
    'Cybersecurity Essentials - CISCO Networking Academy',
    'C Training - IIT BOMBAY'
  ];

  return (
    <section id="training" className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Training & Internships
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {trainingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#161B22] rounded-xl p-8 border border-[#30363D]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center text-white">
                    <Briefcase className="mr-3 text-[#00FFAB]" size={24} />
                    {item.title}
                  </h3>
                  <p className="text-[#58A6FF] font-semibold">{item.company}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-[#8B949E]">
                  <Calendar className="mr-2" size={16} />
                  <span>{item.duration}</span>
                </div>
              </div>
              <p className="text-[#8B949E] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-white">
            <Award className="mr-3 text-[#00FFAB]" size={28} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#161B22] rounded-lg p-6 border border-[#30363D] hover:border-[#00FFAB] transition-colors"
              >
                <div className="flex items-center">
                  <Star className="text-[#00FFAB] mr-3 flex-shrink-0" size={20} />
                  <p className="text-[#E6EDF3]">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
