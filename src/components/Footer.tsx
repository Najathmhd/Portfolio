
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>najamhd037@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Warakapola, Sabaragamuwa Province, Sri Lanka</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
              <a href="#resume" className="block text-gray-400 hover:text-white transition-colors text-sm">Resume</a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:najamhd037@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2025 All Rights Reserved | By Najath Mohomed.
            <Heart size={14} className="text-red-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
