import { PGLocation, Testimonial } from '../types';

export const pgLocations: PGLocation[] = [
  {
    id: '1',
    name: 'DINESH REDDY LUXURY LIVING PG',
    slug: 'dinesh-reddy-luxury-living-pg',
    location: 'Garvebhavi Palya',
    area: 'Vajpayee Nagar, Garvebhavi Palya',
    type: 'mens',
    startingPrice: 7500,
    heroImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium luxury living PG near Ibis hotel with modern amenities and comfortable accommodation.',
    about: 'Located in the prime area of Garvebhavi Palya near Ibis hotel, our luxury PG offers comfortable accommodation for working professionals. With excellent connectivity to major tech parks and the Outer Ring Road, this property combines convenience with comfort.',
    nearbyLandmarks: ['Ibis Hotel - 100m', 'Outer Ring Road - 1 km', 'Electronic City - 8 km', 'HSR Layout - 3 km'],
    rooms: [
      {
        type: 'Single Occupancy',
        price: 19000,
        features: ['Private room', 'Attached bathroom', 'AC', 'Study table', 'Wardrobe', '24/7 Wi-Fi'],
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Double Sharing',
        price: 9500,
        features: ['Shared room', 'Common bathroom', 'AC', 'Study table', 'Wardrobe', '24/7 Wi-Fi'],
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Triple Sharing',
        price: 7500,
        features: ['Shared room', 'Common bathroom', 'Fan/AC', 'Study table', 'Wardrobe', '24/7 Wi-Fi'],
        image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    amenities: ['24/7 Security', 'Wi-Fi', 'Power Backup', 'Laundry Service', 'Housekeeping', 'Hot Water', 'Parking', 'Common Area', 'TV/Entertainment', 'Refrigerator', 'RO Water', 'Homely Food (3 meals)'],
    galleryImages: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    foodImages: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    address: '27/A, 1st Main, 2nd Cross Rd, near Ibis hotel, Vajpayee Nagar, Garvebhavi Palya, Bengaluru, Karnataka 560068',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.6389!3d12.9078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc47%3A0x1f8f6c6c6c6c6c6c!2sGarvebhavi%20Palya%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1234567890',
    houseRules: [
      { title: 'Check-in Time', description: 'After 10:00 AM' },
      { title: 'Check-out Time', description: 'Before 11:00 AM' },
      { title: 'Visitor Policy', description: 'Visitors allowed till 8:00 PM' },
      { title: 'Quiet Hours', description: '10:00 PM - 7:00 AM' },
      { title: 'Smoking/Alcohol', description: 'Strictly prohibited' },
      { title: 'Payment Terms', description: 'Advance payment required' },
      { title: 'Notice Period', description: '1 month notice for vacating' }
    ]
  },
  {
    id: '2',
    name: 'New Dinesh Reddy LUXURY LIVING PG For Gents',
    slug: 'new-dinesh-reddy-luxury-living-pg-gents',
    location: 'Garvebhavi Palya',
    area: 'Munisamappa Layout, Garvebhavi Palya',
    type: 'mens',
    startingPrice: 7500,
    heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'New luxury living PG for gents near H.P. Bahaar Convention Center with premium amenities.',
    about: 'Experience luxury living at our new PG near H.P. Bahaar Convention Center. Designed for professionals who value quality and comfort, this property offers spacious rooms with premium furnishings and top-notch facilities.',
    nearbyLandmarks: ['H.P. Bahaar Convention Center - 100m', 'Hosur Road - 500m', 'Electronic City - 7 km', 'Outer Ring Road - 1 km'],
    rooms: [
      {
        type: 'Single Occupancy',
        price: 19000,
        features: ['Spacious private room', 'Attached bathroom', 'Premium AC', 'Work desk', 'Premium wardrobe', 'High-speed Wi-Fi'],
        image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Double Sharing',
        price: 9500,
        features: ['Premium shared room', 'Attached bathroom', 'AC', 'Work desk', 'Wardrobe', 'High-speed Wi-Fi'],
        image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Triple Sharing',
        price: 7500,
        features: ['Shared room', 'Common bathroom', 'AC', 'Study table', 'Wardrobe', 'High-speed Wi-Fi'],
        image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    amenities: ['24/7 Security', 'High-speed Wi-Fi', 'Power Backup', 'Laundry Service', 'Daily Housekeeping', 'Hot Water', 'Parking', 'Premium Common Area', 'TV/Entertainment', 'Refrigerator', 'RO Water', 'Premium Food (3 meals)', 'Gym Access'],
    galleryImages: [
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    foodImages: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5737577/pexels-photo-5737577.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    address: '1st MAIN, 1st CROSS, Hosur Rd, near H.P. Bahaar Convention Center, Munisamappa Layout, Garvebhavi Palya, Bengaluru, Karnataka 560068',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.6389!3d12.9078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc47%3A0x1f8f6c6c6c6c6c6c!2sGarvebhavi%20Palya%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1234567890',
    houseRules: [
      { title: 'Check-in Time', description: 'After 10:00 AM' },
      { title: 'Check-out Time', description: 'Before 11:00 AM' },
      { title: 'Visitor Policy', description: 'Visitors allowed till 9:00 PM' },
      { title: 'Quiet Hours', description: '10:00 PM - 7:00 AM' },
      { title: 'Smoking/Alcohol', description: 'Strictly prohibited' },
      { title: 'Payment Terms', description: 'Advance payment required' },
      { title: 'Notice Period', description: '1 month notice for vacating' }
    ]
  },
  {
    id: '3',
    name: 'Dinesh Reddy CO-Living Luxury PG',
    slug: 'dinesh-reddy-coliving-luxury-pg',
    location: 'Garvebhavi Palya',
    area: 'Garvebhavi Palya, Bangalore',
    type: 'coliving',
    startingPrice: 9000,
    heroImage: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern co-living luxury space beside Tea Day with premium amenities and community living.',
    about: 'Our co-living luxury space in Garvebhavi Palya beside Tea Day is designed for young professionals seeking a vibrant community. With shared spaces that encourage interaction and private rooms for personal time, experience the perfect balance of social living and privacy.',
    nearbyLandmarks: ['Tea Day - 50m', 'Outer Ring Road - 1 km', 'Electronic City - 8 km', 'HSR Layout - 3 km'],
    rooms: [
      {
        type: 'Single Occupancy',
        price: 20000,
        features: ['Private room', 'Attached bathroom', 'AC', 'Premium furnishing', 'Wardrobe', 'High-speed Wi-Fi', 'Community access'],
        image: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Double Sharing',
        price: 11000,
        features: ['Shared room', 'Common bathroom', 'AC', 'Modern furnishing', 'Wardrobe', 'High-speed Wi-Fi', 'Community access'],
        image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Triple Sharing',
        price: 9000,
        features: ['Shared room', 'Common bathroom', 'AC', 'Furnishing', 'Wardrobe', 'Wi-Fi', 'Community access'],
        image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    amenities: ['24/7 Security', 'High-speed Wi-Fi', 'Power Backup', 'Laundry Service', 'Housekeeping', 'Hot Water', 'Parking', 'Co-working Space', 'TV/Entertainment', 'Refrigerator', 'RO Water', 'Homely Food (3 meals)', 'Community Events'],
    galleryImages: [
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1566854/pexels-photo-1566854.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    foodImages: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4343098/pexels-photo-4343098.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    address: 'Layout Road, Sy 33, 7th Main 4th Cross Rd, beside Tea Day, Garvebhavi Palya, Bengaluru, Karnataka 560068',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.6389!3d12.9078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc47%3A0x1f8f6c6c6c6c6c6c!2sGarvebhavi%20Palya%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1234567890',
    houseRules: [
      { title: 'Check-in Time', description: 'After 10:00 AM' },
      { title: 'Check-out Time', description: 'Before 11:00 AM' },
      { title: 'Visitor Policy', description: 'Visitors allowed till 9:00 PM' },
      { title: 'Quiet Hours', description: '11:00 PM - 7:00 AM' },
      { title: 'Smoking/Alcohol', description: 'Strictly prohibited' },
      { title: 'Payment Terms', description: 'Advance payment required' },
      { title: 'Notice Period', description: '1 month notice for vacating' }
    ]
  },
  {
    id: '4',
    name: 'Dinesh Reddy Luxury Comforts',
    slug: 'dinesh-reddy-luxury-comforts',
    location: 'Chikka Begur Gate',
    area: 'Chikka Begur Gate, Bangalore',
    type: 'mens',
    startingPrice: 7000,
    heroImage: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury comfort PG opposite Dayananda University with excellent amenities and connectivity.',
    about: 'Strategically located opposite Dayananda University near Chikka Begur Gate, our Luxury Comforts PG offers easy access to Electronic City and surrounding tech parks. Perfect for working professionals and students looking for a comfortable stay with all modern amenities.',
    nearbyLandmarks: ['Dayananda University - 100m', 'Hosur Road - 500m', 'Electronic City - 6 km', 'Outer Ring Road - 2 km'],
    rooms: [
      {
        type: 'Single Occupancy',
        price: 18000,
        features: ['Private room', 'Attached bathroom', 'AC', 'Study table', 'Wardrobe', 'Wi-Fi'],
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Double Sharing',
        price: 9000,
        features: ['Shared room', 'Common bathroom', 'AC', 'Study table', 'Wardrobe', 'Wi-Fi'],
        image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        type: 'Triple Sharing',
        price: 7000,
        features: ['Shared room', 'Common bathroom', 'Fan/AC', 'Study table', 'Wardrobe', 'Wi-Fi'],
        image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    amenities: ['24/7 Security', 'Wi-Fi', 'Power Backup', 'Laundry Service', 'Housekeeping', 'Hot Water', 'Parking', 'Common Area', 'TV/Entertainment', 'Refrigerator', 'RO Water', 'Homely Food (3 meals)'],
    galleryImages: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    foodImages: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    address: '05, 3rd Cross, Hosur Rd, opp. Dayananda University, Chikka Begur Gate, Bengaluru, Karnataka 560068',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5!2d77.6389!3d12.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc47%3A0x1f8f6c6c6c6c6c6c!2sChikka%20Begur%20Gate%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1234567890',
    houseRules: [
      { title: 'Check-in Time', description: 'After 10:00 AM' },
      { title: 'Check-out Time', description: 'Before 11:00 AM' },
      { title: 'Visitor Policy', description: 'Visitors allowed till 8:00 PM' },
      { title: 'Quiet Hours', description: '10:00 PM - 7:00 AM' },
      { title: 'Smoking/Alcohol', description: 'Strictly prohibited' },
      { title: 'Payment Terms', description: 'Advance payment required' },
      { title: 'Notice Period', description: '1 month notice for vacating' }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Clean rooms, great food, and friendly staff. Feels like home!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Amit Sharma',
    rating: 5,
    text: 'Best PG experience in Bangalore. Highly recommend Dinesh Reddy PG.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Vikram Patel',
    rating: 5,
    text: 'Safe, comfortable, and affordable. What more could you ask for?',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];
