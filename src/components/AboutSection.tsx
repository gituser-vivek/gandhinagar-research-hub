
import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Mechanical Engineering Research Group
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advancing mechanical engineering through innovative research, cutting-edge technology, 
          and collaborative excellence at IIT Gandhinagar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To conduct world-class research in mechanical engineering that addresses global challenges 
              in energy, manufacturing, materials, and sustainability while training the next generation 
              of engineering leaders.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Our Values</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Excellence in research and innovation</li>
              <li>• Collaborative and inclusive environment</li>
              <li>• Ethical and sustainable practices</li>
              <li>• Knowledge sharing and open science</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-orange-500 rounded-xl p-1">
          <div className="bg-white rounded-lg p-8 h-full">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-900 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Principal Investigator</h3>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Dr. [PI Name]</h4>
              <p className="text-gray-600 mb-4">Professor & Research Group Leader</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ph.D. in Mechanical Engineering with 15+ years of research experience in 
                computational mechanics, materials science, and advanced manufacturing technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Research Excellence</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <p className="text-gray-700">Research Publications</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
            <p className="text-gray-700">Active Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
            <p className="text-gray-700">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
