import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { pgLocations } from '../data/pgData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const contactNumber = '+91 98765 43210';
  const contactEmail = 'contact@dineshreddypg.com';
  const whatsappNumber = '919876543210';

  return (
    <footer className="bg-[#0a1d38] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dinesh Reddy PG</h3>
            <p className="text-[#89cfeb] mb-4">Your Home Away From Home</p>
            <p className="text-sm text-gray-300">
              Providing clean, comfortable, and caring living spaces across Bangalore for professionals and students.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                >
                  Home
                </button>
              </li>
              {pgLocations.map((pg) => (
                <li key={pg.id}>
                  <button
                    onClick={() => onNavigate(`pg/${pg.slug}`)}
                    className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                  >
                    {pg.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('amenities')}
                  className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#1f8fff] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactNumber}`}
                  className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                >
                  {contactNumber}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#1f8fff] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm text-gray-300 hover:text-[#1f8fff] transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1f8fff] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Bangalore, Karnataka
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1f8fff] rounded-full flex items-center justify-center hover:bg-[#89cfeb] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1f8fff] rounded-full flex items-center justify-center hover:bg-[#89cfeb] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Dinesh Reddy PG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
