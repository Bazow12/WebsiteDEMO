import React, { useEffect, useState } from 'react';
import { Target, Globe, Users, Zap } from 'lucide-react';

const Mission = () => {
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

    const element = document.getElementById('mission');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Sustainable Colonies',
      description: 'Building self-sufficient communities that can thrive independently on Mars surface.'
    },
    {
      icon: Globe,
      title: 'Planetary Terraforming',
      description: 'Developing technologies to gradually transform Mars atmosphere for human habitation.'
    },
    {
      icon: Users,
      title: 'Human Migration',
      description: 'Facilitating safe transportation and settlement of humans to the Red Planet.'
    },
    {
      icon: Zap,
      title: 'Advanced Propulsion',
      description: 'Revolutionary rocket technology reducing travel time and increasing payload capacity.'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Mission to Mars
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We're not just reaching for Mars – we're building humanity's future among the stars. 
            Our comprehensive approach combines cutting-edge technology with sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Mars?</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Mars represents humanity's best opportunity for interplanetary expansion. With its 24-hour day cycle, 
              seasonal patterns similar to Earth, and presence of water ice, Mars offers the foundation for 
              sustainable human settlement. Our mission extends beyond exploration – we're establishing the 
              infrastructure for a thriving multi-planetary civilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;