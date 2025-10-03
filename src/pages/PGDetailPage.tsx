import { useState } from 'react';
import { MapPin, Wifi, Shield, Zap, Droplet, Car, Tv, Wind, Coffee, UtensilsCrossed } from 'lucide-react';
import { PGLocation } from '../types';

interface PGDetailPageProps {
  pg: PGLocation;
}

export default function PGDetailPage({ pg }: PGDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const amenityIcons: Record<string, any> = {
    'Wi-Fi': Wifi,
    'High-speed Wi-Fi': Wifi,
    '24/7 Security': Shield,
    'Power Backup': Zap,
    'Hot Water': Droplet,
    'Parking': Car,
    'TV/Entertainment': Tv,
    'AC': Wind,
    'RO Water': Coffee,
  };

  const getAmenityIcon = (amenity: string) => {
    for (const [key, Icon] of Object.entries(amenityIcons)) {
      if (amenity.includes(key)) return Icon;
    }
    return UtensilsCrossed;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', phone: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="bg-white">
      <section className="relative h-[500px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pg.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d38]/90 via-[#0a1d38]/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center space-x-2 text-white mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-[#89cfeb]">{pg.area}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pg.name}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg inline-flex items-center mb-2 sm:mb-0">
              <span className="text-white font-semibold">
                {pg.type === 'mens' ? "Men's PG" : 'Coliving Space'}
              </span>
            </div>
            <div className="text-white">
              <span className="text-lg">Starting from </span>
              <span className="text-3xl font-bold text-[#89cfeb]">
                ₹{pg.startingPrice.toLocaleString()}/month
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-6">About This PG</h2>
          <p className="text-[#3a4959] text-lg leading-relaxed mb-6">{pg.about}</p>
          <div>
            <h3 className="text-xl font-semibold text-[#0a1d38] mb-4">Nearby Landmarks</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pg.nearbyLandmarks.map((landmark, index) => (
                <li key={index} className="flex items-center space-x-2 text-[#3a4959]">
                  <MapPin className="w-5 h-5 text-[#1f8fff] flex-shrink-0" />
                  <span>{landmark}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-12 text-center">
            Room Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pg.rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1d38] mb-2">{room.type}</h3>
                  <div className="text-3xl font-bold text-[#1f8fff] mb-4">
                    ₹{room.price.toLocaleString()}<span className="text-base text-[#607080]">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-[#3a4959]">
                        <span className="text-[#1f8fff] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+919876543210"
                    className="block w-full text-center bg-[#1f8fff] hover:bg-[#1a7ae6] text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-12 text-center">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {pg.amenities.map((amenity, index) => {
              const Icon = getAmenityIcon(amenity);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1f8fff]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#1f8fff]" />
                  </div>
                  <div className="text-sm text-[#3a4959] font-medium">{amenity}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-12 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pg.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-6 text-center">
            Delicious Homely Food
          </h2>
          <p className="text-[#3a4959] text-center mb-8 leading-relaxed">
            Enjoy three wholesome meals daily prepared with care and hygiene. Our menu features a variety of North and South Indian dishes to cater to different tastes and preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pg.foodImages.map((image, index) => (
              <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Food ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-8 text-center">House Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pg.houseRules.map((rule, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-[#0a1d38] mb-2">{rule.title}</h3>
                <p className="text-[#607080]">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-8 text-center">Location</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="font-semibold text-[#0a1d38] mb-2">Address</h3>
              <p className="text-[#3a4959]">{pg.address}</p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe
                src={pg.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#0a1d38] mb-6 text-center">
              Request a Visit
            </h2>
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold mb-2">Thank you for your inquiry!</p>
                <p className="text-green-700">We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1d38] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f8fff] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1d38] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f8fff] focus:border-transparent outline-none transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1f8fff] hover:bg-[#1a7ae6] text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Request a Visit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
