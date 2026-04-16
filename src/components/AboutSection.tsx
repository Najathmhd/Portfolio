
import React from 'react';
import { Code, Database, BarChart, Brain } from 'lucide-react';

const AboutSection = () => {
  const tools = [
    'Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow',
    'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Power BI', 'Tableau'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driven by curiosity and powered by data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:scale-105 hover:text-white p-4 rounded-lg hover:bg-slate-800/30">
                I'm currently pursuing my undergraduate degree in Data Science, where I've discovered my passion for 
                uncovering patterns and insights hidden within data. My academic journey has been complemented by 
                hands-on projects that have taught me the real-world applications of statistical analysis and machine learning.
              </p>
              <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:scale-105 hover:text-white p-4 rounded-lg hover:bg-slate-800/30">
                From predicting customer behavior to analyzing social media trends, I love taking complex datasets 
                and transforming them into clear, actionable insights that drive decision-making. My approach combines 
                technical expertise with strong communication skills to bridge the gap between data and business value.
              </p>
              <p className="text-gray-300 leading-relaxed transform transition-all duration-500 hover:scale-105 hover:text-white p-4 rounded-lg hover:bg-slate-800/30">
                When I'm not coding or analyzing data, you can find me exploring new visualization techniques, 
                contributing to open-source projects, or learning about the latest developments in AI and machine learning.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 group">
                <Code className="text-blue-400 mb-4 group-hover:animate-pulse" size={32} />
                <h4 className="text-white font-semibold mb-2">Programming</h4>
                <p className="text-gray-400 text-sm">Python, SQL, R, JavaScript</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 group">
                <Database className="text-purple-400 mb-4 group-hover:animate-pulse" size={32} />
                <h4 className="text-white font-semibold mb-2">Data Management</h4>
                <p className="text-gray-400 text-sm">MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 group">
                <BarChart className="text-green-400 mb-4 group-hover:animate-pulse" size={32} />
                <h4 className="text-white font-semibold mb-2">Visualization</h4>
                <p className="text-gray-400 text-sm">Tableau, Power BI, D3.js</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 group">
                <Brain className="text-red-400 mb-4 group-hover:animate-pulse" size={32} />
                <h4 className="text-white font-semibold mb-2">Machine Learning</h4>
                <p className="text-gray-400 text-sm">Scikit-learn, TensorFlow, Keras</p>
              </div>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/30 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-lg">
              <h4 className="text-white font-semibold mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={tool}
                    className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20 transform transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
