
import React, { useState } from 'react';
import { Calendar, Users, DollarSign, ExternalLink } from 'lucide-react';

const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const ongoingProjects = [
    {
      id: 1,
      title: "AI-Driven Manufacturing Optimization",
      description: "Developing machine learning algorithms to optimize manufacturing processes and reduce waste in automotive industry.",
      team: ["Dr. Smith", "PhD Student A", "PhD Student B"],
      funding: "Department of Science & Technology",
      amount: "₹45 Lakhs",
      duration: "2023-2026",
      publications: 3,
      status: "ongoing"
    },
    {
      id: 2,
      title: "Sustainable Energy Systems",
      description: "Research on renewable energy integration and energy storage solutions for rural electrification.",
      team: ["Dr. Johnson", "Postdoc A", "PhD Student C"],
      funding: "Ministry of New & Renewable Energy",
      amount: "₹38 Lakhs",
      duration: "2024-2027",
      publications: 2,
      status: "ongoing"
    }
  ];

  const completedProjects = [
    {
      id: 3,
      title: "Advanced Materials Characterization",
      description: "Comprehensive study of nanomaterials for aerospace applications using advanced characterization techniques.",
      team: ["Dr. Brown", "PhD Student D", "PhD Student E"],
      funding: "ISRO",
      amount: "₹52 Lakhs",
      duration: "2020-2023",
      publications: 8,
      status: "completed"
    }
  ];

  const projects = activeTab === 'ongoing' ? ongoingProjects : completedProjects;

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Research Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring frontiers in mechanical engineering through interdisciplinary research
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'ongoing'
                ? 'bg-blue-900 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Ongoing Projects
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'completed'
                ? 'bg-blue-900 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Completed Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'ongoing' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status === 'ongoing' ? 'Active' : 'Completed'}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{project.duration}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>{project.funding} • {project.amount}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{project.team.join(', ')}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <span className="text-sm text-gray-600">{project.publications} Publications</span>
                <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default ResearchSection;
