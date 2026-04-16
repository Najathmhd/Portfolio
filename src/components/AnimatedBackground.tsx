
import React from 'react';
import { Database, BarChart3, Brain, Code, TrendingUp, PieChart, Zap, Target, Globe, Settings } from 'lucide-react';

const AnimatedBackground = () => {
  const icons = [
    { Icon: Database, delay: '0s', duration: '20s' },
    { Icon: BarChart3, delay: '2s', duration: '25s' },
    { Icon: Brain, delay: '4s', duration: '18s' },
    { Icon: Code, delay: '6s', duration: '22s' },
    { Icon: TrendingUp, delay: '8s', duration: '24s' },
    { Icon: PieChart, delay: '10s', duration: '19s' },
    { Icon: Zap, delay: '12s', duration: '21s' },
    { Icon: Target, delay: '14s', duration: '23s' },
    { Icon: Globe, delay: '16s', duration: '26s' },
    { Icon: Settings, delay: '18s', duration: '20s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* More floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            {i % 3 === 0 && (
              <div className="w-4 h-4 border border-purple-400/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            )}
            {i % 3 === 1 && (
              <div className="w-3 h-3 bg-green-400/20 rounded-full animate-bounce"></div>
            )}
            {i % 3 === 2 && (
              <div className="w-5 h-1 bg-blue-400/25 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced moving data science icons */}
      <div className="absolute inset-0">
        {icons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute opacity-15 text-blue-400"
            style={{
              left: `${5 + (index * 10)}%`,
              top: `${15 + (index * 8)}%`,
              animation: `float ${duration} infinite linear`,
              animationDelay: delay,
            }}
          >
            <Icon size={35 + Math.random() * 25} />
          </div>
        ))}
      </div>

      {/* Additional rotating icons layer */}
      <div className="absolute inset-0">
        {icons.slice(0, 6).map(({ Icon, delay }, index) => (
          <div
            key={`rotate-${index}`}
            className="absolute opacity-10 text-purple-400 animate-spin"
            style={{
              right: `${10 + (index * 12)}%`,
              bottom: `${20 + (index * 10)}%`,
              animationDuration: `${15 + index * 3}s`,
              animationDelay: delay,
            }}
          >
            <Icon size={30 + Math.random() * 20} />
          </div>
        ))}
      </div>

      {/* Enhanced gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Enhanced neural network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400/25"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated connecting lines */}
        <g className="animate-pulse">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="2" className="text-blue-400/40" />
          <line x1="30%" y1="40%" x2="60%" y2="30%" stroke="currentColor" strokeWidth="2" className="text-purple-400/40" />
          <line x1="60%" y1="30%" x2="80%" y2="60%" stroke="currentColor" strokeWidth="2" className="text-blue-400/40" />
          <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-purple-400/40" />
          <line x1="50%" y1="80%" x2="90%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-blue-400/40" />
          <line x1="70%" y1="10%" x2="40%" y2="25%" stroke="currentColor" strokeWidth="1" className="text-green-400/35" />
          <line x1="15%" y1="50%" x2="45%" y2="15%" stroke="currentColor" strokeWidth="1" className="text-pink-400/35" />
        </g>
      </svg>

      {/* Floating code-like elements */}
      <div className="absolute inset-0">
        {['Python', 'SQL', 'ML', 'AI', 'Data', 'Stats'].map((text, index) => (
          <div
            key={text}
            className="absolute text-xs font-mono text-blue-300/20 animate-pulse select-none"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${30 + Math.random() * 40}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
