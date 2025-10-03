import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          </div>
        )}
      </div>
    </nav>
  );
}
