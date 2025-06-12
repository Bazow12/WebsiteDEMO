import React, { useState, useEffect } from 'react';
import { Award, MapPin, ExternalLink } from 'lucide-react';

const Team = () => {
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

    const element = document.getElementById('team');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      location: 'Los Angeles, CA',
      bio: 'Former NASA engineer with 15 years of experience in spacecraft design and mission planning.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Mars Mission Planner', 'Propulsion Expert', 'Team Leader']
    },
    {
      name: 'Dr. Marcus Rodriguez',
      role: 'Chief Technology Officer',
      location: 'Houston, TX',
      bio: 'Pioneering fusion propulsion technology and sustainable life support systems for deep space.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Fusion Pioneer', 'Systems Engineer', 'Innovation Leader']
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Life Sciences',
      location: 'Boston, MA',
      bio: 'Leading research in closed-loop ecosystems and human adaptation to Martian conditions.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Ecosystem Expert', 'Biologist', 'Research Director']
    },
    {
      name: 'Alex Thompson',
      role: 'Mission Commander',
      location: 'Cape Canaveral, FL',
      bio: 'Veteran astronaut with multiple ISS missions and extensive EVA experience.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Veteran Astronaut', 'EVA Specialist', 'Mission Commander']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Leadership Team
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Meet the visionaries and experts driving humanity's expansion to Mars. 
            Our diverse team brings decades of experience from NASA, SpaceX, and leading research institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-medium mb-2">{member.role}</p>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {member.location}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center space-x-2">
                      <Award className="h-3 w-3 text-orange-400" />
                      <span className="text-gray-400 text-xs">{achievement}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-4 flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200">
                  <span className="text-sm">View Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              We're actively seeking talented individuals to join our growing team. 
              From engineers to scientists, mission specialists to support staff – 
              help us build the future of human space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border-2 border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;