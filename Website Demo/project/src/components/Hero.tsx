import React, { useEffect, useState } from 'react';
import { ChevronDown, Rocket } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-red-900/20 to-orange-900/30">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(234, 88, 12, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(30, 64, 175, 0.2) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-2 md:mb-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-2 md:mb-6">
            <Rocket className="h-4 w-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Pioneering Mars Exploration</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block">Journey to</span>
          <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Mars
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're building the future of human civilization beyond Earth. Join us as we pioneer 
          sustainable colonies on Mars and unlock the next chapter of human exploration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
            Explore Our Mission
          </button>
          <button className="border-2 border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Watch Launch
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;