import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Training from '@/components/sections/Training';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Aditya Kumar Gupta - Portfolio | Budding Software Engineer & AI Explorer</title>
        <meta name="description" content="Portfolio of Aditya Kumar Gupta - Computer Science student passionate about web development, AI, and machine learning. Explore my projects, skills, and experience." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3]">
        <Header scrollToSection={scrollToSection} />
        <main>
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Training />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;