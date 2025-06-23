
import React from 'react';
import { Camera, Microscope, Cpu, Wrench } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      name: "Advanced Manufacturing Lab",
      description: "State-of-the-art CNC machines, 3D printers, and additive manufacturing equipment for precision engineering research.",
      equipment: ["5-axis CNC Machine", "Metal 3D Printer", "Laser Cutting System", "Quality Control Station"],
      icon: Wrench
    },
    {
      id: 2,
      name: "Materials Characterization Lab",
      description: "Comprehensive materials testing and characterization facility with advanced microscopy and spectroscopy equipment.",
      equipment: ["SEM with EDS", "XRD System", "Universal Testing Machine", "Hardness Tester"],
      icon: Microscope
    },
    {
      id: 3,
      name: "Computational Research Center",
      description: "High-performance computing cluster for computational fluid dynamics, finite element analysis, and AI/ML research.",
      equipment: ["HPC Cluster (200+ cores)", "Workstations", "CAD/CAE Software", "Simulation Tools"],
      icon: Cpu
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Research Facilities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          World-class research infrastructure supporting cutting-edge mechanical engineering research
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {facilities.map((facility) => {
          const IconComponent = facility.icon;
          return (
            <div key={facility.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{facility.name}</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{facility.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Equipment:</h4>
                  {facility.equipment.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  <Camera className="w-4 h-4 mr-2" />
                  <span>View Lab Photos</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Lab Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-video bg-gray-200 rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <Camera className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-blue-900 to-orange-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-medium">
            Take Virtual Lab Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
