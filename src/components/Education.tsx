import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg">
                <GraduationCap size={32} className="text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  BSc (Hons) in Information Technology
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-300 mb-4">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <MapPin size={16} />
                    <span>Cardiff Metropolitan University</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Currently Pursuing</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">
                  via ICBT Campus
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Pursuing a comprehensive degree in Information Technology with focus on software engineering, 
                  system design, and modern development practices. The program covers advanced topics in 
                  computer science, software architecture, and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;