import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Clock, Rocket } from 'lucide-react';

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2024',
      title: 'Orbital Testing Phase',
      description: 'Launch and test our next-generation propulsion systems in Earth orbit.',
      status: 'completed',
      icon: CheckCircle,
      side: 'left'
    },
    {
      year: '2025',
      title: 'Mars Cargo Missions',
      description: 'Begin automated cargo deliveries to establish initial infrastructure.',
      status: 'active',
      icon: Rocket,
      side: 'right'
    },
    {
      year: '2027',
      title: 'First Human Mission',
      description: 'Historic crewed mission to Mars with initial settlement team.',
      status: 'upcoming',
      icon: Clock,
      side: 'left'
    },
    {
      year: '2030',
      title: 'Permanent Base',
      description: 'Establish the first permanent human settlement on Mars.',
      status: 'upcoming',
      icon: Clock,
      side: 'right'
    },
    {
      year: '2035',
      title: 'Self-Sustaining Colony',
      description: 'Achieve complete resource independence and population growth.',
      status: 'upcoming',
      icon: Clock,
      side: 'left'
    },
    {
      year: '2040',
      title: 'Terraforming Initiative',
      description: 'Begin large-scale atmospheric transformation projects.',
      status: 'upcoming',
      icon: Clock,
      side: 'right'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20 border-green-400';
      case 'active': return 'text-orange-400 bg-orange-400/20 border-orange-400';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400';
    }
  };

  return (
    <section id="timeline" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Mars Colonization Roadmap
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our comprehensive timeline for establishing human presence on Mars, 
            from initial missions to self-sustaining colonies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-orange-500 to-red-600" />
          
          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className="md:hidden absolute left-6 w-1 h-full bg-gradient-to-b from-red-600 via-orange-500 to-red-600" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left side content */}
                  <div className={`flex-1 ${milestone.side === 'left' ? 'pr-8 text-right' : ''}`}>
                    {milestone.side === 'left' && (
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                        <div className="flex items-center justify-end space-x-3 mb-3">
                          <Calendar className="h-5 w-5 text-red-400" />
                          <span className="text-red-400 font-bold text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Icon positioned close to text box */}
                  <div className={`${milestone.side === 'left' ? 'pl-4' : 'pr-4'}`}>
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(milestone.status)}`}>
                      <milestone.icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className={`flex-1 ${milestone.side === 'right' ? 'pl-8 text-left' : ''}`}>
                    {milestone.side === 'right' && (
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-red-400 font-bold text-lg">{milestone.year}</span>
                          <Calendar className="h-5 w-5 text-red-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 mr-4">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(milestone.status)}`}>
                      <milestone.icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-red-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-red-400 font-bold text-lg">{milestone.year}</span>
                        <Calendar className="h-5 w-5 text-red-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Journey</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              These milestones represent more than technological achievements – they mark humanity's 
              evolution into a multi-planetary species. Be part of this historic endeavor.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Apply for Mars Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;