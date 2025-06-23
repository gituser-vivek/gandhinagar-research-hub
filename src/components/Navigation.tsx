
import React from 'react';
import { useTheme } from './ThemeProvider';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from './UserMenu';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLoginClick: () => void;
}

const Navigation = ({ activeSection, setActiveSection, onLoginClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'team', label: 'Team' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-900 dark:bg-gray-900 shadow-lg z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            ME Research Group
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-white hover:text-orange-300 transition-colors ${
                  activeSection === item.id ? 'text-orange-300 border-b-2 border-orange-300' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-orange-300 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user ? (
              <UserMenu />
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Login
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-orange-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 dark:bg-gray-800 transition-colors">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-white hover:text-orange-300 transition-colors ${
                    activeSection === item.id ? 'text-orange-300' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
