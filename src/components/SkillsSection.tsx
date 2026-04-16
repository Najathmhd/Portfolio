
import React from 'react';
import { Database, Brain, BarChart3, TrendingUp, Code, LineChart, PieChart, Monitor, Layout } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Python', level: 90, icon: <Code size={18} /> },
    { name: 'SQL', level: 85, icon: <Database size={18} /> },
    { name: 'Machine Learning', level: 80, icon: <Brain size={18} /> },
    { name: 'Data Visualization', level: 85, icon: <BarChart3 size={18} /> },
    { name: 'Statistical Analysis', level: 75, icon: <TrendingUp size={18} /> },
    { name: 'Power BI', level: 70, icon: <PieChart size={18} /> },
    { name: 'Tableau', level: 65, icon: <LineChart size={18} /> },
    { name: 'R', level: 60, icon: <Monitor size={18} /> },
  ];

  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Communication',
    'Team Collaboration',
    'Project Management',
    'Attention to Detail',
    'Curiosity & Learning',
    'Business Acumen',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for data science and analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in text-center lg:text-left" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-white mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h4 className="text-white font-semibold mb-4">Currently Learning</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg text-sm border border-blue-500/30 transform transition-all duration-300 hover:scale-110 hover:bg-blue-500/30 animate-pulse">
                  Deep Learning
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg text-sm border border-purple-500/30 transform transition-all duration-300 hover:scale-110 hover:bg-purple-500/30 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  MLOps
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg text-sm border border-green-500/30 transform transition-all duration-300 hover:scale-110 hover:bg-green-500/30 animate-pulse" style={{ animationDelay: '1s' }}>
                  Cloud Computing (AWS)
                </span>
                <span className="bg-red-500/20 text-red-300 px-3 py-2 rounded-lg text-sm border border-red-500/30 transform transition-all duration-300 hover:scale-110 hover:bg-red-500/30 animate-pulse" style={{ animationDelay: '1.5s' }}>
                  Docker & Kubernetes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
