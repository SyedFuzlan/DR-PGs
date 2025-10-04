import { useState } from 'react';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { currentUser, userProfile, signOut } = useAuth();
  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Our PGs', value: 'pgs' },
    { label: 'Amenities', value: 'amenities' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <nav className="bg-[#0a1d38] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-xl font-bold">Dinesh Reddy PG</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`hover:text-[#1f8fff] transition-colors px-3 py-2 ${
                  currentPage === item.value || 
                  (item.value === 'pgs' && currentPage.startsWith('pg/')) 
                    ? 'text-[#1f8fff]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Login/Profile Button */}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="flex items-center space-x-2 hover:text-[#1f8fff] transition-colors"
                >
                  <User size={20} />
                  <span>{userProfile?.displayName || 'Dashboard'}</span>
                </button>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center space-x-2 bg-[#1f8fff] hover:bg-[#1a7ae6] px-4 py-2 rounded-lg transition-colors"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-[#1f2a3c] ${
                  currentPage === item.value || 
                  (item.value === 'pgs' && currentPage.startsWith('pg/')) 
                    ? 'text-[#1f8fff]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Login/Profile */}
            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    onNavigate('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-[#1f2a3c] flex items-center space-x-2"
                >
                  <User size={18} />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-[#1f2a3c] flex items-center space-x-2 text-red-400"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setAuthModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-[#1f2a3c] flex items-center space-x-2 text-[#1f8fff]"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
            )}
          </div>
        )}
      </div>
      
      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </nav>
  );
}
