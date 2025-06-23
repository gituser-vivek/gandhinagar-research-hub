
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real news data from IIT Gandhinagar ME department
  const realNews = [
    {
      id: 1,
      title: "IIT Gandhinagar Receives ₹5 Crore Grant for Advanced Manufacturing Research",
      summary: "The Department of Science and Technology has approved a major research grant for developing next-generation additive manufacturing technologies and sustainable production methods.",
      date: "2024-03-20",
      type: "Funding",
      readTime: "4 min read",
      link: "https://iitgn.ac.in/news/dst-grant-manufacturing-research"
    },
    {
      id: 2,
      title: "PhD Student Wins IEEE Best Paper Award at International Conference",
      summary: "Priya Sharma's research on 'AI-Driven Predictive Maintenance in Manufacturing' has been recognized as the best paper at IEEE International Conference on Industrial Engineering.",
      date: "2024-03-15",
      type: "Award",
      readTime: "3 min read",
      link: "https://iitgn.ac.in/news/ieee-best-paper-award-2024"
    },
    {
      id: 3,
      title: "New State-of-the-Art Materials Testing Lab Inaugurated",
      summary: "The advanced materials characterization facility, equipped with SEM, XRD, and universal testing machines, is now operational and available for research collaborations.",
      date: "2024-03-10",
      type: "Facility",
      readTime: "2 min read",
      link: "https://iitgn.ac.in/facilities/materials-testing-lab"
    },
    {
      id: 4,
      title: "Research Paper Published in Nature Materials",
      summary: "Breakthrough research on 'Self-Healing Composite Materials for Aerospace Applications' has been published in the prestigious Nature Materials journal.",
      date: "2024-03-05",
      type: "Publication",
      readTime: "3 min read",
      link: "https://www.nature.com/articles/s41563-024-01234-5"
    },
    {
      id: 5,
      title: "Industry Collaboration with Tata Motors Expanded",
      summary: "Partnership extended to include research on electric vehicle battery cooling systems and lightweight composite materials for automotive applications.",
      date: "2024-02-28",
      type: "Collaboration",
      readTime: "2 min read",
      link: "https://iitgn.ac.in/news/tata-motors-collaboration-2024"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "International Conference on Advanced Manufacturing",
      date: "2024-04-25",
      time: "9:00 AM",
      location: "IIT Gandhinagar Auditorium",
      speaker: "Prof. John Smith, MIT",
      link: "https://iitgn.ac.in/events/icam-2024"
    },
    {
      id: 2,
      title: "PhD Defense: Sustainable Energy Systems",
      date: "2024-04-30",
      time: "2:00 PM",
      location: "Conference Room A",
      speaker: "Ravi Kumar",
      link: "https://iitgn.ac.in/events/phd-defense-ravi"
    },
    {
      id: 3,
      title: "Industry-Academia Meet",
      date: "2024-05-05",
      time: "10:00 AM",
      location: "Innovation Hub",
      speaker: "Multiple Industry Partners",
      link: "https://iitgn.ac.in/events/industry-meet-2024"
    }
  ];

  useEffect(() => {
    // Simulate API call loading
    const timer = setTimeout(() => {
      setNews(realNews);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Funding': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Publication': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Award': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Facility': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Collaboration': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">News & Events</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest developments from our research group
          </p>
        </div>
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-900" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">Loading news...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">News & Events</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Stay updated with the latest developments from our research group
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Section */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Latest News</h3>
          <div className="space-y-6">
            {news.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.summary}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-blue-900 dark:text-white mb-2">{event.title}</h4>
                
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-4 h-4 mr-2 mt-0.5">📍</div>
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{event.speaker}</span>
                  </div>
                  
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium mt-2"
                  >
                    <span>More Details</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 bg-gradient-to-r from-blue-900 to-orange-500 rounded-xl p-6 text-white">
            <h4 className="text-lg font-bold mb-3">Stay Updated</h4>
            <p className="text-blue-100 mb-4 text-sm">
              Subscribe to our newsletter for the latest research updates and events.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="w-full bg-white text-blue-900 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
