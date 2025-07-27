
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    { name: 'Java', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'SQL', category: 'Database' },
    { name: 'HTML/CSS', category: 'Web' },
    { name: 'React', category: 'Web' },
    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'NLP', category: 'AI/ML' },
    { name: 'Google Colab', category: 'Tools' },
    { name: 'Git/GitHub', category: 'Tools' },
    { name: 'MERN Stack', category: 'Web' },
    { name: 'Streamlit', category: 'Tools' }
  ];

  const skillCategories = {
    "Programming": <Code className="mr-2 text-[#58A6FF]" />,
    "Database": <Database className="mr-2 text-[#58A6FF]" />,
    "Web": <Code className="mr-2 text-[#58A6FF]" />,
    "AI/ML": <Brain className="mr-2 text-[#58A6FF]" />,
    "Tools": <Cpu className="mr-2 text-[#58A6FF]" />
  }

  return (
    <section id="skills" className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-[#21262D] text-[#E6EDF3] px-5 py-3 rounded-full hover:bg-[#30363D] transition-colors cursor-default flex items-center"
            >
              {skillCategories[skill.category]}
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
