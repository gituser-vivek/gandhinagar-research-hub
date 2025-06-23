
import React from 'react';
import { LogIn, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLoginClick: () => void;
}

const Navigation = ({ activeSection, setActiveSection, onLoginClick }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();
  
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
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ME</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 dark:text-white">Mechanical Engineering</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Research Group • IIT Gandhinagar</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={onLoginClick}
              className="ml-2 flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <LogIn size={16} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
