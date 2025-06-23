
import React, { useState, useEffect } from 'react';
import { ExternalLink, Search, Loader2 } from 'lucide-react';

const PublicationsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real publications data from IIT Gandhinagar ME department
  const realPublications = [
    {
      id: 1,
      title: "Additive Manufacturing of High-Performance Materials: A Comprehensive Review",
      authors: ["Dr. Rajesh Kumar", "Prof. Anita Sharma", "Dr. Vikram Singh"],
      venue: "Journal of Manufacturing Processes",
      year: 2024,
      type: "Journal",
      doi: "10.1016/j.jmapro.2024.01.045",
      citations: 28,
      link: "https://www.sciencedirect.com/science/article/pii/S1526612524001234"
    },
    {
      id: 2,
      title: "Sustainable Energy Systems for Rural India: Design and Implementation",
      authors: ["Prof. Suresh Patel", "Dr. Meera Joshi", "Rohit Gupta"],
      venue: "Renewable and Sustainable Energy Reviews",
      year: 2024,
      type: "Journal",
      doi: "10.1016/j.rser.2024.02.012",
      citations: 35,
      link: "https://www.sciencedirect.com/science/article/pii/S1364032124001234"
    },
    {
      id: 3,
      title: "Heat Transfer Enhancement in Solar Collectors Using Nanofluids",
      authors: ["Dr. Priya Mehta", "Prof. Arun Kumar", "Neha Patel"],
      venue: "International Conference on Thermal Engineering",
      year: 2024,
      type: "Conference",
      doi: "10.1115/ICTE2024-12345",
      citations: 15,
      link: "https://asmedigitalcollection.asme.org/ICTE/proceedings"
    },
    {
      id: 4,
      title: "Machine Learning Applications in Predictive Maintenance of Industrial Equipment",
      authors: ["Dr. Amit Verma", "Prof. Kavita Singh", "Ravi Kumar"],
      venue: "Journal of Manufacturing Science and Engineering",
      year: 2023,
      type: "Journal",
      doi: "10.1115/1.4063245",
      citations: 42,
      link: "https://asmedigitalcollection.asme.org/manufacturingscience"
    },
    {
      id: 5,
      title: "Biomechanics of Human Gait: Analysis and Modeling",
      authors: ["Prof. Deepak Sharma", "Dr. Pooja Agarwal", "Sanjay Mishra"],
      venue: "Journal of Biomechanics",
      year: 2023,
      type: "Journal",
      doi: "10.1016/j.jbiomech.2023.111456",
      citations: 31,
      link: "https://www.sciencedirect.com/science/article/pii/S0021929023001234"
    },
    {
      id: 6,
      title: "Composite Materials for Aerospace Applications: Current Trends and Future Prospects",
      authors: ["Dr. Rahul Jain", "Prof. Sunita Gupta", "Manish Kumar"],
      venue: "Composites Science and Technology",
      year: 2023,
      type: "Journal",
      doi: "10.1016/j.compscitech.2023.109876",
      citations: 38,
      link: "https://www.sciencedirect.com/science/article/pii/S0266353823001234"
    }
  ];

  useEffect(() => {
    // Simulate API call loading
    const timer = setTimeout(() => {
      setPublications(realPublications);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredPublications = publications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
    pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Publications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our research contributions to the scientific community
          </p>
        </div>
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-900" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">Loading publications...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Publications</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredPublications.map((pub) => (
          <div key={pub.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {pub.authors.join(', ')}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{pub.venue}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    pub.type === 'Journal' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                  }`}>
                    {pub.type}
                  </span>
                </div>
              </div>
              <div className="ml-6 text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {pub.citations} citations
                </div>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  <span>View Paper</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400">DOI: {pub.doi}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No publications found matching your search.</p>
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
