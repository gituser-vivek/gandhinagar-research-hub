
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ResearchSection from '../components/ResearchSection';
import PublicationsSection from '../components/PublicationsSection';
import FacilitiesSection from '../components/FacilitiesSection';
import TeamSection from '../components/TeamSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import LoginModal from '../components/LoginModal';
import { ThemeProvider } from '../components/ThemeProvider';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showLogin, setShowLogin] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'research':
        return <ResearchSection />;
      case 'publications':
        return <PublicationsSection />;
      case 'facilities':
        return <FacilitiesSection />;
      case 'team':
        return <TeamSection />;
      case 'news':
        return <NewsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navigation 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onLoginClick={() => setShowLogin(true)}
        />
        
        <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            {renderActiveSection()}
          </div>
        </main>

        {showLogin && (
          <LoginModal onClose={() => setShowLogin(false)} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
