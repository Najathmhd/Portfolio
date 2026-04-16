
import React from 'react';
import { Download, FileText, Award, Calendar, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
  const achievements = [
    "BSc (Hons) in Data Science - London Met University (In Progress)",
    "Advanced Level Engineering Technology - Kekunagolla National School (2021)",
    "Agile Leadership: Introduction to Change Certification (2023)",
    "Python Programming & Data Analysis Expertise",
    "SQL Database Management & Analytics",
    "Machine Learning & Statistical Modeling",
    "Business Intelligence & Data Visualization"
  ];

  const handleDownloadResume = () => {
    // Create a mailto link for resume request
    const mailtoLink = `mailto:najamhd037@gmail.com?subject=${encodeURIComponent('Resume Request')}&body=${encodeURIComponent(
      'Hi Najath,\n\nI would like to request a copy of your resume.\n\nThank you!'
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Download my complete resume or view my key achievements and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50">
              <div className="text-center mb-8">
                <FileText className="text-blue-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-white mb-2">Complete Resume</h3>
                <p className="text-gray-400 mb-6">
                  Get the full details of my education, experience, and projects. Click below to request my latest resume.
                </p>
                <button 
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                >
                  <ExternalLink size={20} />
                  Request Resume
                </button>
              </div>
              
              <div className="border-t border-slate-700 pt-6">
                <p className="text-gray-400 text-sm text-center">
                  Last updated: January 2025 • Available on request
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Award className="text-yellow-400" size={28} />
                Key Qualifications & Skills
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Calendar className="text-green-400" size={28} />
                Educational Journey
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"></div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <h4 className="text-white font-semibold">BSc (Hons) in Data Science</h4>
                    <p className="text-blue-400">London Met University (UK) • Current</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Specialized coursework in Machine Learning, Advanced Statistics, 
                      Database Systems, Data Mining, Python Programming, Business Analytics, 
                      and Data Visualization
                    </p>
                  </div>
                </div>
                <div className="border-l-2 border-purple-500 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-2"></div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <h4 className="text-white font-semibold">Advanced Level - Engineering Technology</h4>
                    <p className="text-purple-400">Kekunagolla National School • 2021</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Comprehensive foundation in engineering principles, technology applications, 
                      and analytical problem-solving methodologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
