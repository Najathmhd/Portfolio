
import React, { useState } from 'react';
import { Download, Github, Linkedin, ChevronDown, MapPin, Database, Brain, BarChart3, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left animate-scale-in">
            {/* Profile Image - Mobile/Tablet View */}
            <div className="lg:hidden mb-8 flex justify-center">
              <div className="relative">
                <div
                  className="w-40 h-40 sm:w-48 sm:h-52 relative flip-card cursor-pointer"
                  onClick={toggleFlip}
                >
                  <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                      <img
                        src="/lovable-uploads/profile_new.jpg"
                        alt="Najath Mohomed"
                        className="w-full h-full rounded-2xl object-cover shadow-2xl"
                      />
                    </div>
                    <div className="flip-card-back">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-2xl">
                        <div className="text-center px-2">
                          <Database className="mx-auto mb-2" size={20} />
                          <div className="text-xs mb-1">Data Science</div>
                          <div className="text-xs">Analytics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Najath Mohomed
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Data Analyst | Aspiring Machine Learning Engineer
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <MapPin size={18} className="text-purple-400" />
              <span className="text-sm sm:text-base">Warakapola, Sabaragamuwa Province, Sri Lanka</span>
            </div>

            {/* Education Section */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 mb-6 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <div className="flex flex-col items-center lg:items-start">
                <div className="space-y-4 w-fit text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-semibold block leading-tight">BSc (Hons) in Data Science</span>
                      <p className="text-blue-300 text-sm mt-1">London Met University (UK)</p>
                      <p className="text-gray-400 text-xs mt-1">(Present)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-semibold block leading-tight">Advanced Level - Engineering Technology</span>
                      <p className="text-purple-300 text-sm mt-1">Kekunagolla National School</p>
                      <p className="text-gray-400 text-xs mt-1">(2021)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl animate-fade-in mx-auto lg:mx-0" style={{ animationDelay: '0.4s' }}>
              “I am a Data Analyst passionate about working with data, creating meaningful visualizations, and building predictive models.
              I enjoy solving real-world problems using data-driven approaches and continuously improving my skills in machine learning.”
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="/lovable-uploads/Najath - Resume.pdf" download="Najath_Mohomed_Resume.pdf" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </a>
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto border border-gray-500 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer flex items-center justify-center"
              >
                View Projects
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com/Najathmhd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/najath-m-7321812a3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Profile Section - Desktop Only */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main Profile Container with 3D Flip Effect */}
              <div className="relative w-96 h-96 flex items-center justify-center perspective-1000">
                {/* Profile Image with Manual Flip */}
                <div
                  className="relative w-80 h-80 flip-card-auto cursor-pointer"
                  onClick={toggleFlip}
                >
                  <div className={`flip-card-inner-auto ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front Side */}
                    <div className="flip-card-front-auto">
                      <img
                        src="/lovable-uploads/profile_new.jpg"
                        alt="Najath Mohomed"
                        className="w-full h-full object-cover rounded-3xl shadow-2xl"
                      />
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back-auto">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex flex-col items-center justify-center text-white shadow-2xl">
                        <Brain size={48} className="mb-4 text-blue-200" />
                        <h3 className="text-xl font-bold mb-2">Data Science</h3>
                        <p className="text-center text-sm px-4 leading-relaxed">
                          Transforming data into insights through machine learning and analytics
                        </p>
                        <div className="flex gap-3 mt-4">
                          <Database size={20} className="text-blue-300" />
                          <BarChart3 size={20} className="text-purple-300" />
                          <TrendingUp size={20} className="text-indigo-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce flex items-center justify-center shadow-lg" style={{ animationDelay: '1s' }}>
                  <Database size={16} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce flex items-center justify-center shadow-lg" style={{ animationDelay: '2s' }}>
                  <Brain size={12} className="text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500/20 rounded-full animate-ping flex items-center justify-center" style={{ animationDelay: '3s' }}>
                  <BarChart3 size={20} className="text-green-400" />
                </div>
                <div className="absolute top-8 -left-8 w-7 h-7 bg-yellow-500/30 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '4s' }}>
                  <TrendingUp size={14} className="text-yellow-400" />
                </div>
              </div>

              {/* Skill Pills */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 backdrop-blur-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 backdrop-blur-sm">SQL</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30 backdrop-blur-sm">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 hover:text-white transition-colors duration-300" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
