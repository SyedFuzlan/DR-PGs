import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import HomePage from './pages/HomePage';
import PGsPage from './pages/PGsPage';
import PGDetailPage from './pages/PGDetailPage';
import AmenitiesPage from './pages/AmenitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { pgLocations } from './data/pgData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle initial hash-based routing
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setCurrentPage(newHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (currentPage === 'pgs') {
      return <PGsPage onNavigate={handleNavigate} />;
    }

    if (currentPage === 'amenities') {
      return <AmenitiesPage />;
    }

    if (currentPage === 'gallery') {
      return <GalleryPage />;
    }

    if (currentPage === 'contact') {
      return <ContactPage />;
    }

    if (currentPage.startsWith('pg/')) {
      const slug = currentPage.replace('pg/', '');
      const pg = pgLocations.find(p => p.slug === slug);
      if (pg) {
        return <PGDetailPage pg={pg} />;
      }
      return <HomePage onNavigate={handleNavigate} />;
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow pb-20 md:pb-0">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <MobileBottomBar />
    </div>
  );
}

export default App;
