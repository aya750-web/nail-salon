export type ServiceCategory = 'all' | 'manicure' | 'pedicure' | 'art' | 'spa';

export interface Service {
  id: string;
  name: string;
  category: 'manicure' | 'pedicure' | 'art' | 'spa';
  description: string;
  duration: string;
  durationMinutes: number;
  price: number;
  priceDisplay: string;
  image: string;
  popular?: boolean;
  features?: string[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  availableDays: string[];
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  duration: string;
  durationMinutes: number;
  description: string;
}

export type NailShape = 'almond' | 'oval' | 'square' | 'squoval' | 'coffin' | 'stiletto';

export type PolishFinish = 'glossy' | 'matte' | 'chrome' | 'jelly' | 'glitter';

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  description: string;
  secondaryHex?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  shape: string;
  serviceId?: string;
}

export interface Booking {
  id: string;
  bookingRef: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  serviceDuration: string;
  specialistId: string;
  specialistName: string;
  date: string;
  time: string;
  addOns: AddOn[];
  nailShape?: NailShape;
  finish?: PolishFinish;
  selectedColor?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  specialRequests?: string;
  totalPrice: number;
  totalDurationMinutes: number;
  status: 'confirmed' | 'rescheduled' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  avatar?: string;
}
