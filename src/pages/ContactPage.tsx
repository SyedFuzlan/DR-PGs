import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { pgLocations } from '../data/pgData';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const contactNumber = '+91 98765 43210';
  const contactEmail = 'contact@dineshreddypg.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', phone: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="bg-white">
      <section className="relative h-80 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-[#0a1d38]/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-[#89cfeb]">
            We're here to help you find your perfect stay
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1d38] mb-4">Phone</h3>
              <a
                href={`tel:${contactNumber}`}
                className="text-[#1f8fff] hover:text-[#1a7ae6] font-semibold transition-colors"
              >
                {contactNumber}
              </a>
              <p className="text-[#607080] text-sm mt-2">Mon-Sun, 8:00 AM - 9:00 PM</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1d38] mb-4">Email</h3>
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#1f8fff] hover:text-[#1a7ae6] font-semibold transition-colors break-all"
              >
                {contactEmail}
              </a>
              <p className="text-[#607080] text-sm mt-2">24-48 hour response time</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1d38] mb-4">Address</h3>
              <p className="text-[#3a4959] font-semibold">Bangalore, Karnataka</p>
              <p className="text-[#607080] text-sm mt-2">Multiple locations across the city</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-[#0a1d38] mb-6">Send us a message</h2>
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-800 font-semibold mb-2">
                      Thank you for contacting us!
                    </p>
                    <p className="text-green-700">We'll get back to you soon.</p>
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
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '450px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1d38] mb-12 text-center">
            All PG Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pgLocations.map((pg) => (
              <div key={pg.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#0a1d38] mb-3">{pg.name}</h3>
                <div className="space-y-3 text-[#3a4959]">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#1f8fff] flex-shrink-0 mt-0.5" />
                    <span>{pg.address}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#1f8fff] flex-shrink-0 mt-0.5" />
                    <a
                      href={`tel:${contactNumber}`}
                      className="text-[#1f8fff] hover:text-[#1a7ae6] transition-colors"
                    >
                      {contactNumber}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pg.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-[#1f8fff] hover:bg-[#1a7ae6] text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
