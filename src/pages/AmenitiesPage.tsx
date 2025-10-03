import { Shield, Wifi, Home, Utensils, Zap, Camera, Car, Droplet, Wind, Tv, Coffee, Shirt } from 'lucide-react';

export default function AmenitiesPage() {
  const amenityCategories = [
    {
      title: 'Security & Safety',
      icon: Shield,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '24/7 CCTV surveillance',
        'Secure entry system',
        'Fire safety equipment',
        'Emergency contact support',
        'Regular safety audits'
      ]
    },
    {
      title: 'Room Facilities',
      icon: Home,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Fully furnished rooms',
        'Comfortable beds & mattresses',
        'Study table & chair',
        'Spacious wardrobe',
        'Adequate lighting',
        'Clean & hygienic spaces'
      ]
    },
    {
      title: 'Food & Dining',
      icon: Utensils,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '3 wholesome meals daily',
        'Hygienic kitchen',
        'North & South Indian menu',
        'Special dietary options',
        'Quality ingredients',
        'Fresh food preparation'
      ]
    },
    {
      title: 'Common Facilities',
      icon: Tv,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'High-speed Wi-Fi',
        'TV/Entertainment room',
        'Laundry service',
        'Daily housekeeping',
        'Power backup',
        'RO drinking water',
        'Common lounge area'
      ]
    },
    {
      title: 'Utilities',
      icon: Zap,
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Hot water 24/7',
        'Refrigerator access',
        'Parking space',
        'Elevator (select locations)',
        'Water purifier',
        'Inverter backup'
      ]
    }
  ];

  const quickAmenities = [
    { icon: Wifi, label: 'High-Speed Wi-Fi' },
    { icon: Shield, label: '24/7 Security' },
    { icon: Zap, label: 'Power Backup' },
    { icon: Droplet, label: 'Hot Water' },
    { icon: Wind, label: 'AC Rooms' },
    { icon: Utensils, label: '3 Meals Daily' },
    { icon: Shirt, label: 'Laundry Service' },
    { icon: Car, label: 'Parking' },
    { icon: Tv, label: 'Entertainment' },
    { icon: Coffee, label: 'RO Water' },
    { icon: Camera, label: 'CCTV' },
    { icon: Home, label: 'Housekeeping' }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-80 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-[#0a1d38]/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Amenities & Facilities</h1>
          <p className="text-xl text-[#89cfeb]">Everything you need for a comfortable stay</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {quickAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#1f8fff]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-[#1f8fff]" />
                  </div>
                  <div className="text-sm text-[#3a4959] font-medium">{amenity.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {amenityCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-[#1f8fff] rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-[#0a1d38]">{category.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="text-[#1f8fff] text-xl mt-1">•</span>
                          <span className="text-[#3a4959] text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative h-96 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1f8fff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Comfort Like Never Before
          </h2>
          <p className="text-xl text-[#89cfeb] mb-8">
            Visit any of our locations to see these amenities in person
          </p>
          <a
            href="tel:+919876543210"
            className="inline-block bg-white hover:bg-gray-100 text-[#1f8fff] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
