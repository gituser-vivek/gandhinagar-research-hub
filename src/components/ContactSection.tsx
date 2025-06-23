
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our research group for collaborations, inquiries, or opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="collaboration">Research Collaboration</option>
                <option value="phd">PhD Opportunities</option>
                <option value="postdoc">Postdoc Positions</option>
                <option value="industry">Industry Partnership</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-900 to-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Mechanical Engineering Department<br />
                    Indian Institute of Technology Gandhinagar<br />
                    Palaj, Gandhinagar - 382355<br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">research.group@iitgn.ac.in</p>
                  <p className="text-gray-600">admin@iitgn.ac.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91-79-2395-2000</p>
                  <p className="text-gray-600">+91-79-2395-2001 (Lab)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Location</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">IIT Gandhinagar Campus</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
                Get Directions
              </button>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-r from-blue-900 to-orange-500 rounded-xl p-6 text-white">
            <h4 className="text-lg font-bold mb-4">Office Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
