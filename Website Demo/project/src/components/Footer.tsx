import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Our Mission', 'Leadership Team', 'Careers', 'Press Kit']
    },
    {
      title: 'Technology',
      links: ['Propulsion Systems', 'Life Support', 'Communication', 'Research Papers']
    },
    {
      title: 'Missions',
      links: ['Current Projects', 'Timeline', 'Apply to Join', 'Mission Updates']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Access', 'Developer Tools', 'Community']
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RedPlanet Aerospace</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Pioneering the future of human civilization through sustainable Mars colonization 
              and advanced space exploration technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RedPlanet Aerospace. All rights reserved. | Mars Colony Mission in Progress
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;