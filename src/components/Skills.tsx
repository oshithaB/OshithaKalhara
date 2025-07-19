import React from 'react';
import { Code2, Database, Smartphone, Server, Globe, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native', 'Cross-platform Apps', 'Mobile UI/UX'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'REST APIs'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database Management',
      icon: <Database className="w-8 h-8" />,
      skills: ['MySQL', 'Database Design', 'Query Optimization'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud & Integration',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS S3', 'Payment Integration', 'API Integration', 'Stripe'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Development Tools',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['Git', 'Docker', 'Zoom API', 'Third-party APIs'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-teal-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 group-hover:bg-gray-600/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;