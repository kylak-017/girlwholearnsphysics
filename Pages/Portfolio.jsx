import React, { useEffect } from 'react';
import Navigation from '../components/portfolio/Navigation';
import PersonalVision from '../components/portfolio/PersonalVision';
import ResearchSection from '../components/portfolio/ResearchSection';
import TeamProjects from '../components/portfolio/TeamProjects';
import PersonalProjects from '../components/portfolio/PersonalProjects';
import Contact from '../components/portfolio/Contact';

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PersonalVision />
      <ResearchSection />
      <TeamProjects />
      <PersonalProjects />
      <Contact />
    </div>
  );
}