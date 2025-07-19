import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Oshitha Kalhara
            </div>
            <p className="text-gray-400 mb-6">
              Building the future, one line of code at a time.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/oshithakalhara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/oshithakalhara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:oshitha.kalhara@example.com"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Oshitha Kalhara. Made with</span>
              <Heart size={16} className="text-teal-400" />
              <span>and lots of coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;