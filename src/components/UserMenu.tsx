
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Settings } from 'lucide-react';

const UserMenu = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors">
        <User className="w-5 h-5" />
        <span className="hidden md:block">{user.email}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">{user.email}</p>
          </div>
          
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
          
          <button 
            onClick={signOut}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
