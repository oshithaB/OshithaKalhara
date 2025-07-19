import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Fullstack Software Engineer with expertise in modern web and mobile technologies. 
                With a strong foundation in both frontend and backend development, I specialize in creating 
                comprehensive solutions that bridge the gap between user experience and robust system architecture.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience spans across various industries, from ERP systems for manufacturing companies to 
                innovative mobile applications with complex integrations. I thrive on tackling challenging problems 
                and delivering high-quality, scalable solutions that make a real impact on businesses and their users.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I'm constantly learning new technologies and staying up-to-date with industry 
                trends to ensure I can provide the best solutions for every project.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full flex items-center justify-center">
                  <User size={120} className="text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;