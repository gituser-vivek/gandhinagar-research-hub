
import React from 'react';
import { Mail, ExternalLink, User } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = {
    pi: [
      {
        id: 1,
        name: "Dr. [Principal Investigator]",
        role: "Professor & Group Leader",
        email: "pi@iitgn.ac.in",
        specialization: "Computational Mechanics, Advanced Manufacturing",
        googleScholar: "#",
        orcid: "#"
      }
    ],
    postdocs: [
      {
        id: 2,
        name: "Dr. [Postdoc Name]",
        role: "Postdoctoral Researcher",
        email: "postdoc@iitgn.ac.in",
        specialization: "Materials Science, Nanotechnology",
        googleScholar: "#",
        orcid: "#"
      }
    ],
    phd: [
      {
        id: 3,
        name: "[PhD Student 1]",
        role: "PhD Student",
        email: "phd1@iitgn.ac.in",
        specialization: "Machine Learning in Manufacturing",
        googleScholar: "#",
        orcid: "#"
      },
      {
        id: 4,
        name: "[PhD Student 2]",
        role: "PhD Student",
        email: "phd2@iitgn.ac.in",
        specialization: "Sustainable Energy Systems",
        googleScholar: "#",
        orcid: "#"
      },
      {
        id: 5,
        name: "[PhD Student 3]",
        role: "PhD Student",
        email: "phd3@iitgn.ac.in",
        specialization: "Computational Fluid Dynamics",
        googleScholar: "#",
        orcid: "#"
      }
    ],
    collaborators: [
      {
        id: 6,
        name: "Prof. [Collaborator 1]",
        role: "External Collaborator",
        email: "collab1@university.edu",
        specialization: "Aerospace Engineering",
        googleScholar: "#",
        orcid: "#"
      }
    ]
  };

  const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
      <div className="text-center mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
        <p className="text-orange-500 font-medium">{member.role}</p>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600 text-center">{member.specialization}</p>
      </div>
      
      <div className="flex justify-center space-x-3">
        <a
          href={`mailto:${member.email}`}
          className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
          title="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href={member.googleScholar}
          className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
          title="Google Scholar"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
        <a
          href={member.orcid}
          className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
          title="ORCID"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the brilliant minds driving innovation in mechanical engineering research
        </p>
      </div>

      {/* Principal Investigator */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Principal Investigator</h3>
        <div className="max-w-md mx-auto">
          {teamMembers.pi.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Postdocs */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Postdoctoral Researchers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.postdocs.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* PhD Students */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">PhD Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.phd.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Collaborators */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Collaborators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.collaborators.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-500 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          We're always looking for talented researchers to join our group. 
          If you're passionate about mechanical engineering research, we'd love to hear from you.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            PhD Positions
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors">
            Postdoc Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
