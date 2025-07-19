import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PowerKey ERP System',
      description: 'Modern ERP system designed specifically for a solar accessories company. Built with React frontend and Node.js backend, featuring real-time data processing and intuitive user interface.',
      techStack: ['React', 'Node.js', 'MySQL', 'Express.js', 'Tailwind CSS'],
      link: '#',
      image: process.env.PUBLIC_URL + '/powerkey.png', // use absolute path and .jpg (or .png if you have only png)
      type: 'ERP System'
    },
    {
      title: 'Oricado & Riyon ERP System',
      description: 'Complete ERP solution for a roller door and machinery company built in just 3 months with a small team. Features comprehensive business management, inventory tracking, and customer relationship management.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
      link: 'https://drive.google.com/file/d/1IygHGIA2xdjT2bmEPXMAO1HtvgNbWbJD/view?usp=sharing',
       image: process.env.PUBLIC_URL + '/oricado.png', // use absolute path and .jpg (or .png if you have only png)
      type: 'ERP System'
    },
    {
      title: 'Meeting Scheduler App Nebule',
      description: 'Full-stack mobile application developed during internship at Jawo Software. Features meeting scheduling with Zoom integration, cloud file storage, and secure payment processing.',
      techStack: ['React Native', 'NestJS', 'Zoom API', 'AWS S3', 'Stripe', 'PostgreSQL'],
      link: '#',
      image: '/meeting-scheduler.jpg', // use absolute path and .jpg (or .png if you have only png)
      type: 'Mobile Application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Project Image */}
                <div className="relative" style={{height: '192px', background: 'linear-gradient(to bottom right, #14b8a6 20%, #2563eb 80%)'}}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                    style={{display: 'block'}}
                    onError={e => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = "absolute inset-0 flex items-center justify-center";
                        fallback.innerHTML = `<span class="text-6xl text-teal-400/30 font-bold">${project.title.split(' ')[0][0]}</span>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm z-10">
                    {project.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;