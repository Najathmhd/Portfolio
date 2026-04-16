
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <AboutSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <ProjectsSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <SkillsSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <ResumeSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <ContactSection />
        </div>
        <div className="text-center py-8 px-4">
          <p className="text-gray-400 text-sm">
            © 2025 All Rights Reserved | By Najath Mohomed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
