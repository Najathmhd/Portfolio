import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const ProjectsSection = () => {
  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ];

  const customerData = [
    { segment: 'Enterprise', value: 40 },
    { segment: 'SMB', value: 35 },
    { segment: 'Startup', value: 25 },
  ];

  const sentimentData = [
    { category: 'Positive', count: 450 },
    { category: 'Neutral', count: 300 },
    { category: 'Negative', count: 150 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#EF4444'];

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn using historical transaction data, achieving 87% accuracy with Random Forest algorithm.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      ),
      github: "#",
      demo: "#"
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Created an interactive dashboard to visualize sales performance across different regions and time periods using Power BI and SQL.",
      tech: ["Power BI", "SQL", "Python", "DAX"],
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Bar dataKey="sales" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      ),
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "Analyzed Twitter sentiment data using NLP techniques to understand public opinion on trending topics, processing over 100k tweets.",
      tech: ["Python", "NLTK", "TextBlob", "Twitter API"],
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={sentimentData}
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              dataKey="count"
              label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
            >
              {sentimentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
          </PieChart>
        </ResponsiveContainer>
      ),
      github: "#",
      demo: "#"
    },
    {
      title: "Stock Price Prediction",
      description: "Developed a time series forecasting model using LSTM neural networks to predict stock prices with technical indicators.",
      tech: ["Python", "TensorFlow", "Keras", "Yahoo Finance API"],
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Line type="monotone" dataKey="sales" stroke="#EF4444" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      ),
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my data science projects with real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 group transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6">
                <div className="mb-4 transform transition-all duration-300 group-hover:scale-105">
                  {project.chart}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20 transform transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 animate-fade-in"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
