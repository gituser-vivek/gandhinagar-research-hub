
import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';

const PublicationsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const publications = [
    {
      id: 1,
      title: "Machine Learning Applications in Advanced Manufacturing: A Comprehensive Review",
      authors: ["Dr. Smith, A.", "Kumar, P.", "Johnson, B."],
      venue: "Journal of Manufacturing Science and Engineering",
      year: 2024,
      type: "Journal",
      doi: "10.1115/1.4054321",
      citations: 15
    },
    {
      id: 2,
      title: "Sustainable Energy Integration in Rural Electrification: Challenges and Opportunities",
      authors: ["Dr. Johnson, R.", "Patel, S.", "Brown, M."],
      venue: "Renewable Energy Conference 2024",
      year: 2024,
      type: "Conference",
      doi: "10.1016/j.renene.2024.03.045",
      citations: 8
    },
    {
      id: 3,
      title: "Nanomaterial Characterization for Aerospace Applications: Novel Approaches",
      authors: ["Dr. Brown, L.", "Singh, K.", "Wilson, J."],
      venue: "Materials Science & Engineering A",
      year: 2023,
      type: "Journal",
      doi: "10.1016/j.msea.2023.145234",
      citations: 23
    },
    {
      id: 4,
      title: "Computational Fluid Dynamics in Heat Transfer Optimization",
      authors: ["Dr. Sharma, V.", "Gupta, A.", "Thompson, R."],
      venue: "International Heat Transfer Conference",
      year: 2023,
      type: "Conference",
      doi: "10.1615/IHTC17.2023.12345",
      citations: 12
    }
  ];

  const filteredPublications = publications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
    pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Publications</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our research contributions to the scientific community
        </p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredPublications.map((pub) => (
          <div key={pub.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-gray-700 mb-2">
                  {pub.authors.join(', ')}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="font-medium">{pub.venue}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    pub.type === 'Journal' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {pub.type}
                  </span>
                </div>
              </div>
              <div className="ml-6 text-right">
                <div className="text-sm text-gray-600 mb-2">
                  {pub.citations} citations
                </div>
                <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  <span>DOI</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-500">DOI: {pub.doi}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No publications found matching your search.</p>
        </div>
      )}

      <div className="mt-12 bg-gradient-to-r from-blue-900 to-orange-500 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Publication Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold">{publications.length}</div>
            <div className="text-blue-100">Total Publications</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {publications.reduce((sum, pub) => sum + pub.citations, 0)}
            </div>
            <div className="text-blue-100">Total Citations</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {publications.filter(pub => pub.type === 'Journal').length}
            </div>
            <div className="text-blue-100">Journal Papers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {publications.filter(pub => pub.type === 'Conference').length}
            </div>
            <div className="text-blue-100">Conference Papers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;
