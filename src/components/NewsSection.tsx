
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Research Group Receives Major Funding from DST",
      summary: "Our team has been awarded ₹2 Crores for developing next-generation manufacturing technologies.",
      date: "2024-03-15",
      type: "Funding",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Paper Accepted in Top-Tier Journal",
      summary: "Our research on AI-driven manufacturing optimization has been accepted in the Journal of Manufacturing Science.",
      date: "2024-03-10",
      type: "Publication",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "PhD Student Wins Best Paper Award",
      summary: "Congratulations to our PhD student for winning the best paper award at the International Manufacturing Conference.",
      date: "2024-03-05",
      type: "Award",
      readTime: "1 min read"
    },
    {
      id: 4,
      title: "New Lab Equipment Installation Complete",
      summary: "Our advanced materials characterization lab is now fully operational with state-of-the-art SEM and XRD systems.",
      date: "2024-02-28",
      type: "Facility",
      readTime: "2 min read"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Research Seminar Series",
      date: "2024-04-15",
      time: "3:00 PM",
      location: "Conference Room A",
      speaker: "Prof. External Speaker"
    },
    {
      id: 2,
      title: "PhD Defense",
      date: "2024-04-20",
      time: "10:00 AM",
      location: "Seminar Hall",
      speaker: "[PhD Student Name]"
    },
    {
      id: 3,
      title: "Industry Collaboration Meeting",
      date: "2024-04-25",
      time: "2:00 PM",
      location: "Meeting Room B",
      speaker: "Industry Partners"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Funding': return 'bg-green-100 text-green-800';
      case 'Publication': return 'bg-blue-100 text-blue-800';
      case 'Award': return 'bg-yellow-100 text-yellow-800';
      case 'Facility': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">News & Events</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest developments from our research group
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Section */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Latest News</h3>
          <div className="space-y-6">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                <p className="text-gray-700 mb-4">{item.summary}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">{event.title}</h4>
                
                <div className="space-y-2 text-sm text-gray-600">
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
                  
                  <div className="pt-2 border-t border-gray-200">
                    <span className="font-medium">{event.speaker}</span>
                  </div>
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
