import React, { useState, useEffect } from 'react';
import { Rocket, Satellite, Cpu, Shield } from 'lucide-react';

const Technology = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('technology');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      icon: Rocket,
      title: 'Next-Gen Propulsion',
      description: 'Revolutionary fusion-powered engines reducing Mars travel time to 45 days.',
      specs: ['Fusion-Electric Hybrid', '15x Faster Than Chemical', '99.9% Reliability'],
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Satellite,
      title: 'Mars Communication Grid',
      description: 'Advanced satellite constellation ensuring 24/7 Earth-Mars connectivity.',
      specs: ['Quantum Entanglement', 'Zero-Latency Links', 'Unlimited Bandwidth'],
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Cpu,
      title: 'AI Colony Management',
      description: 'Autonomous systems managing life support, agriculture, and infrastructure.',
      specs: ['Predictive Analytics', 'Self-Healing Systems', 'Resource Optimization'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Radiation Protection',
      description: 'Advanced shielding technology protecting colonists from cosmic radiation.',
      specs: ['Magnetic Field Generation', '99% Radiation Blocking', 'Energy Efficient'],
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Breakthrough Technologies
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our cutting-edge innovations make Mars colonization not just possible, but practical. 
            Each technology represents years of research and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500'
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-red-600 to-orange-600' 
                      : 'bg-gray-700'
                  }`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className={`bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative h-64 overflow-hidden">
              <img
                src={technologies[activeTab].image}
                alt={technologies[activeTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {technologies[activeTab].title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {technologies[activeTab].description}
              </p>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Key Specifications:</h4>
                {technologies[activeTab].specs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;