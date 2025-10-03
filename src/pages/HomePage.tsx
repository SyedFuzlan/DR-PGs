import { Utensils, Shield, Clock, Users, Building2, Award, Star } from 'lucide-react';
import { pgLocations, testimonials } from '../data/pgData';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d38]/90 to-[#0a1d38]/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Home Away From Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#89cfeb]">
            Premium PG Accommodations Across Bangalore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('our-pgs')}
              className="bg-[#1f8fff] hover:bg-[#1a7ae6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Locations
            </button>
            <a
              href="tel:+919876543210"
              className="bg-white hover:bg-gray-100 text-[#0a1d38] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1d38] mb-4">Homely Food</h3>
              <p className="text-[#607080] leading-relaxed">
                Delicious, nutritious meals prepared with care, offering both North and South Indian cuisines.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1d38] mb-4">24/7 Security</h3>
              <p className="text-[#607080] leading-relaxed">
                Your safety is our top priority with round-the-clock CCTV surveillance and secure entry systems.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1d38] mb-4">Round-the-Clock Service</h3>
              <p className="text-[#607080] leading-relaxed">
                Always here when you need us with dedicated staff available 24/7 for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d38] mb-6">About Us</h2>
              <div className="space-y-4 text-[#3a4959] leading-relaxed">
                <p>
                  Welcome to Dinesh Reddy PG, where we've been creating comfortable living spaces for professionals and students across Bangalore for years. Our mission is simple: to provide clean, comfortable, and caring accommodations that truly feel like home.
                </p>
                <p>
                  With four prime locations across the city, we understand the challenges of finding quality accommodation in a bustling metropolis. That's why we focus on delivering not just a place to stay, but a community where residents feel safe, supported, and satisfied.
                </p>
                <p>
                  Our commitment to quality service, cleanliness, and resident satisfaction has made us one of the most trusted names in PG accommodations in Bangalore. Join our growing family of happy residents today.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="About Dinesh Reddy PG"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1f8fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-[#89cfeb]">Happy Residents</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-[#89cfeb]">Prime Locations</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-[#89cfeb]">Support</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12" />
              </div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-[#89cfeb]">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-pgs" className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d38] mb-4">
              Our PG Locations
            </h2>
            <p className="text-[#607080] text-lg mb-8">
              Find your perfect stay across our premium locations in Bangalore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pgLocations.slice(0, 4).map((pg) => (
              <div
                key={pg.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={pg.cardImage}
                    alt={pg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#1f8fff] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {pg.type === 'mens' ? "Men's PG" : 'Coliving'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0a1d38] mb-2">{pg.name}</h3>
                  <p className="text-[#607080] mb-4">{pg.area}</p>
                  <p className="text-[#3a4959] mb-4 line-clamp-2">{pg.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-[#607080]">Starting from</div>
                      <div className="text-2xl font-bold text-[#1f8fff]">
                        ₹{pg.startingPrice.toLocaleString()}/month
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate(`pg/${pg.slug}`)}
                      className="bg-[#1f8fff] hover:bg-[#1a7ae6] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('pgs')}
              className="bg-[#1f8fff] hover:bg-[#1a7ae6] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              View All PGs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d38] mb-4">
              What Our Residents Say
            </h2>
            <p className="text-[#607080] text-lg">
              Real experiences from our happy residents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#0a1d38]">{testimonial.name}</div>
                    <div className="flex space-x-1 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1f8fff] text-[#1f8fff]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#3a4959] italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1f8fff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="text-xl text-[#89cfeb] mb-8">
            Contact us today for availability and bookings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white hover:bg-gray-100 text-[#1f8fff] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#0a1d38] hover:bg-[#0f2547] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
