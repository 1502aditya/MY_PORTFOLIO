import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projectData = [
    {
      title: 'AI-Powered Health Assistant',
      description: 'Built using Streamlit, NLP, and Speech Recognition for real-time medical guidance with GPT-based responses and appointment booking.',
      tech: ['Streamlit', 'NLP', 'Speech Recognition', 'GPT', 'TTS'],
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/18a2dd9d-196b-416e-88bc-142d2681317f/bb64d4ba63e5875bc187c3ce100725e3.jpg',
      githubLink: 'https://github.com/1502aditya/AI-Powered-Health-Assistant'
    },
    {
      title: 'Personal Finance Manager',
      description: 'MERN-based finance management system with real-time expense tracking, document management, and financial analytics.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/18a2dd9d-196b-416e-88bc-142d2681317f/402e69ee453bcb5407816c88ab8e147c.jpg',
      githubLink: 'https://github.com/1502aditya/Personal-Finance-Manager-with-MERN-Technology'
    },
    {
      title: 'Brain Posterior Evidential Network',
      description: 'Python-based uncertainty modeling and algorithm implementation for brain network analysis.',
      tech: ['Python', 'TensorFlow', 'NumPy', 'Scikit-learn'],
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/18a2dd9d-196b-416e-88bc-142d2681317f/221ad8e88f3e71a4f284c7c68058a307.webp',
      githubLink: 'https://github.com/1502aditya/BPEN-Brain-Posterior-Evidential-Network-'
    }
  ];
  
  const handleLinkClick = (isImplemented, url) => {
    if (isImplemented && url) {
      window.open(url, '_blank');
    } else {
      toast({
        title: "🚧 Feature not implemented",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        variant: 'destructive'
      });
    }
  }

  return (
    <section id="projects" className="py-24 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0D1117] rounded-xl overflow-hidden border border-[#30363D] shadow-md hover:shadow-lg hover:border-[#00FFAB] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={`${project.title} - Project screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-[#8B949E] mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#21262D] text-[#8B949E] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  <Button
                    onClick={() => handleLinkClick(true, project.githubLink)}
                    className="w-full text-[#58A6FF] hover:underline bg-transparent hover:bg-transparent p-0 justify-start"
                  >
                    <Github className="mr-2" size={16} /> GitHub
                  </Button>
                  <Button
                    onClick={() => handleLinkClick(false, '')}
                    className="w-full bg-[#00FFAB] text-black hover:bg-opacity-80 font-semibold"
                  >
                    <ExternalLink className="mr-2" size={16} /> Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;