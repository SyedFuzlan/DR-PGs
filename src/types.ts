export interface PGLocation {
  id: string;
  name: string;
  slug: string;
  location: string;
  area: string;
  type: 'mens' | 'coliving';
  startingPrice: number;
  heroImage: string;
  cardImage: string;
  description: string;
  about: string;
  nearbyLandmarks: string[];
  rooms: RoomType[];
  amenities: string[];
  galleryImages: string[];
  foodImages: string[];
  address: string;
  mapUrl: string;
  houseRules: HouseRule[];
}

export interface RoomType {
  type: string;
  price: number;
  features: string[];
  image: string;
}

export interface HouseRule {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  image: string;
}
