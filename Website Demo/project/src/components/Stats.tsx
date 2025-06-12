import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Rocket, Globe } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    missions: 0,
    astronauts: 0,
    distance: 0,
    funding: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        missions: 15,
        astronauts: 247,
        distance: 225,
        funding: 2.8
      };

      const intervals = Object.keys(targets).map(key => {
        const target = targets[key as keyof typeof targets];
        const increment = target / 50;
        let current = 0;

        const intervalId = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervalId);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current * 10) / 10 }));
        }, 50);

        return intervalId;
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Rocket,
      value: counts.missions,
      label: 'Successful Missions',
      suffix: ''
    },
    {
      icon: Users,
      value: counts.astronauts,
      label: 'Trained Astronauts',
      suffix: ''
    },
    {
      icon: Globe,
      value: counts.distance,
      label: 'Million KM to Mars',
      suffix: 'M'
    },
    {
      icon: TrendingUp,
      value: counts.funding,
      label: 'Billion in Funding',
      suffix: 'B'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-r from-red-900/20 via-gray-900 to-orange-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Mission Progress
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Real-time data showcasing our achievements and progress toward Mars colonization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-full w-fit mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
              Live Mars Weather
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Temperature:</span>
                <span className="text-white">-63°C (-81°F)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pressure:</span>
                <span className="text-white">0.636 kPa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wind Speed:</span>
                <span className="text-white">12 m/s</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse" />
              Next Launch Window
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">March 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">45 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Distance:</span>
                <span className="text-white">225M km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;