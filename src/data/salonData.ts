import { Service, Specialist, AddOn, ColorSwatch, GalleryItem, Testimonial } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDBa9vWghErzrfAUymx1ntuP2E_ulmSIe4cqDmHfE_fSoqnztjpVE4_JDUWh8_8Yzuh7DKJaKVDdFA2HZWIyWo2lHa0JxUHYZ4om4OIxRk2F6zfea8Jf7_aQgxoBIDYs93OnT-ot4CIJNNQP_DSzKke2djDKPbHRt0qVeY1sEsvZHmEAnBGq31zNi2xMQ3qupXYuN6XWeShHS6PtMDBSNDLnE7pbrQi8GvEvSXNhzKFaHzz2lCsNv332A";

export const STORY_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTOOw8JrVeo7gHQwwhsFDj6r1O6Xdv21F4SoyPuvFEw7qsu6kRQLL-OUAXaWu7UoHQhq9hU9fz1AuY38jI8p9lZWY330H_JKJ9htcbx-B1c3DzS7tj8Ne80ItH5V6jvVwfITscFFLIhdZWJd68Hmo1K0j4Ce-cykTp4cRVF84xCNVNcAdwEedjqU7CUoC8dsPh3ZCR0UFmRwMd1nElp2BIa_kbNVBKodzFbyM-yWV34rPb2HwRzePX3w";

export const SERVICES: Service[] = [
  {
    id: 'signature-manicure',
    name: 'The Signature Manicure',
    category: 'manicure',
    description: 'Complete cuticle care, precision shaping, relaxing botanical hand massage, and long-wear chip-resistant polish.',
    duration: '45 Min',
    durationMinutes: 45,
    price: 45,
    priceDisplay: '$45',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT8KEoLtc5GRvH3IYvGbfkFZgkS5QowEBwXMVQ6QYcFO5uuWCJLjRuy7XNlHrCQ6DzFXXNLgPaROorddopif7ybeN5NM1IDPCeeQCAZNdcW47yCNfLAiceS0tNFsSDaWoSh3ONAwVHefGld1YCbIBySwRLwR25Pxjj95Rsj8KuXIESDQq-HCU81y8dEHqeQvjZJliLqU1zAe3qRqqA_3i9k02BIQO14XoAxW0Qw05_jRQds-ae9SFZ-Q',
    popular: true,
    features: ['Gentle e-file cuticle detailing', 'Organic rose water soak', 'Warm towel compress', 'Botanical oil therapy']
  },
  {
    id: 'minimalist-artistry',
    name: 'Minimalist Artistry',
    category: 'art',
    description: 'Custom, hand-painted subtle designs tailored to your aesthetic. Fine line geometry, micro-french, or chrome accents.',
    duration: 'Add-on',
    durationMinutes: 25,
    price: 15,
    priceDisplay: 'From $15',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8-xpKl8XClvbe66pXaVJqGvF99ApmSdDrgKjuU-NrfSTrdXiHDEWeynv7M8E3YubhgSiYuPUtSzcA4kiWpslc07kjX60dCWOy8d9ZB9-LAmtdrx_2GExYkd0IcqcGg4dGw6IVDqb_LW1myVsV6gOFHxf8zOnJxG3UE714ifp9qfTh7Dv4_L4UbaretJNB0OCOOe9yyGVEyqFgt153PCvmkkfLehY4xxW2LMo8gvhZe37PuYvvGqtzQ',
    popular: true,
    features: ['Bespoke 10-finger hand painting', 'Fine Japanese gel pigments', 'Custom placement preview', 'Ultra-gloss or matte topcoat']
  },
  {
    id: 'velvet-spa-pedicure',
    name: 'Velvet Spa Pedicure',
    category: 'pedicure',
    description: 'An indulgent foot soak in fresh rose petals, gentle sugar exfoliation, deep hydration clay mask, and flawless finish.',
    duration: '60 Min',
    durationMinutes: 60,
    price: 65,
    priceDisplay: '$65',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ISt3r1S44jAPoYjPlQ1rDQGJ2S3WSNomK9wufJXcOUmnzRdVfG-XqMzMrvwquvEuNIH5l_WGEdEqE3ZisCQtK_MVPvT1uth8WnNkk4d9uHm5sfxkwqMGh4RRAwp8o0YUehLiEszyF2_Dgn5oMeFU2G3SCjcJIdLfeJDfj_RB0ap052a4_3veo8WjcaVGrZF5RxlBAKfi1V-jZ5Qk5BMxblfjT8tRKCrJcDUePjQyjLTKyKxv0DDO3w',
    popular: true,
    features: ['Rose water & essential oil soak', 'Dead sea salt scrub', 'Hydrating volcanic mask', 'Hot stone pressure point massage']
  },
  {
    id: 'biab-builder-overlay',
    name: 'BIAB Natural Nail Overlay',
    category: 'manicure',
    description: 'Builder Gel in a Bottle applied over natural nails to provide exceptional strength, natural flexibility, and 3-4 week longevity.',
    duration: '60 Min',
    durationMinutes: 60,
    price: 60,
    priceDisplay: '$60',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    popular: false,
    features: ['Natural nail reinforcement', 'Self-leveling glass finish', 'Zero chipping for 3+ weeks', 'Cuticle keratin treatment']
  },
  {
    id: 'rose-quartz-deluxe',
    name: 'Rose Quartz Ritual Manicure',
    category: 'spa',
    description: 'A sensory luxury ritual combining collagen gloves, rose quartz crystal massage, therapeutic warm oil soak, and pure nude lacquer.',
    duration: '75 Min',
    durationMinutes: 75,
    price: 85,
    priceDisplay: '$85',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop',
    popular: true,
    features: ['Rose quartz lymphatic massage', 'Warm collagen mask infused with rosehip', 'Aromatherapy steaming', 'Signature botanical cuticle nectar']
  },
  {
    id: 'modern-glazed-chrome',
    name: 'Hailey Glazed Chrome Finish',
    category: 'art',
    description: 'Ultra-reflective pearl and oyster chrome powders buffed smoothly over sheer nude or milky pink for a subtle iridescence.',
    duration: '20 Min',
    durationMinutes: 20,
    price: 25,
    priceDisplay: '$25',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    popular: false,
    features: ['Mirror pearl finish', 'Non-yellowing gel seal', 'Subtle shift under sunlight', 'Compatible with any base hue']
  },
  {
    id: 'apres-gel-x-extensions',
    name: 'Après Gel-X Sculpted Extensions',
    category: 'manicure',
    description: 'Full-cover soft gel tips applied without harsh chemicals or damage. Tailored length and silhouette from almond to coffin.',
    duration: '90 Min',
    durationMinutes: 90,
    price: 95,
    priceDisplay: '$95',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop',
    popular: false,
    features: ['100% soft gel extension', 'Custom tailored apex & c-curve', 'No odor or dust', 'Seamless cuticle blend']
  },
  {
    id: 'restorative-collagen-pedicure',
    name: 'Restorative Botanical Pedicure',
    category: 'pedicure',
    description: 'Intense cracked heel smoothing treatment, eucalyptus detox foot bath, cooling peppermint masque, and rich shea butter booties.',
    duration: '70 Min',
    durationMinutes: 70,
    price: 78,
    priceDisplay: '$78',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    popular: false,
    features: ['Callus smoothing therapy', 'Peppermint & eucalyptus clay soak', 'Paraffin wax booties', 'Extended 15-min calf massage']
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Lead Artist & Founder',
    bio: '10+ years specializing in Japanese soft gel, minimalist negative-space line work, and luxury nail health.',
    specialty: 'Minimalist Line Art & BIAB',
    rating: 4.98,
    reviewsCount: 142,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: 'chloe-dupont',
    name: 'Chloé Dupont',
    role: 'Senior Nail Specialist',
    bio: 'Master of sculptural Gel-X architecture, sheer milk glass finishes, and delicate metallic foil inlays.',
    specialty: 'Gel-X Extensions & Chrome Glaze',
    rating: 4.95,
    reviewsCount: 98,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    availableDays: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  {
    id: 'soraya-khan',
    name: 'Soraya Khan',
    role: 'Holistic Spa Pedicurist',
    bio: 'Specialist in reflexology, therapeutic botanical foot rituals, and gentle dry e-file cuticle restoration.',
    specialty: 'Luxury Spa Pedicures & Crystal Rituals',
    rating: 4.99,
    reviewsCount: 120,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Sunday']
  }
];

export const ADD_ONS: AddOn[] = [
  {
    id: 'chrome-powder',
    name: 'Hailey Chrome Glaze Powder',
    price: 15,
    duration: '15 Min',
    durationMinutes: 15,
    description: 'Iridescent pearl or gold chrome dust buffed over polish.'
  },
  {
    id: 'french-micro-tips',
    name: 'Micro-French Tip Painting',
    price: 18,
    duration: '15 Min',
    durationMinutes: 15,
    description: 'Ultra-fine crisp tip line in crisp white, noir, or rose gold.'
  },
  {
    id: 'paraffin-hydration',
    name: 'Warm Rose Paraffin Treatment',
    price: 20,
    duration: '15 Min',
    durationMinutes: 15,
    description: 'Deeply moisturizing warmed peach & rose paraffin wax bath.'
  },
  {
    id: 'ibx-repair',
    name: 'IBX Natural Nail Strengthening',
    price: 22,
    duration: '15 Min',
    durationMinutes: 15,
    description: 'Penetrating monomer system that fuses upper nail plate layers together.'
  },
  {
    id: 'gel-removal',
    name: 'Gentle Conditioning Gel Removal',
    price: 15,
    duration: '20 Min',
    durationMinutes: 20,
    description: 'Safe, non-damaging acetone wrap with nourishing cuticle oil soak.'
  }
];

export const COLOR_PALETTE: ColorSwatch[] = [
  {
    id: 'sheer-petal',
    name: 'Petal Whisper',
    hex: '#f7d8df',
    description: 'The iconic translucent sheer pink of Velvet & Rose'
  },
  {
    id: 'alabaster-milk',
    name: 'Alabaster Milk',
    hex: '#f4f3f0',
    description: 'Crisp, cloudy milky-white sheer glaze'
  },
  {
    id: 'spiced-cacao',
    name: 'Spiced Cacao',
    hex: '#755750',
    description: 'Rich, comforting mocha neutral with warm undertones'
  },
  {
    id: 'dusty-rose',
    name: 'Dusty Rosewood',
    hex: '#a37c87',
    description: 'Muted romantic antique rose mauve'
  },
  {
    id: 'burgundy-noir',
    name: 'Velvet Noir',
    hex: '#3d1c24',
    description: 'Deep seductive black-cherry burgundy'
  },
  {
    id: 'champagne-shimmer',
    name: 'Champagne Aura',
    hex: '#ecd6c0',
    secondaryHex: '#ffd79e',
    description: 'Soft luminous nude with micro-pearl reflection'
  },
  {
    id: 'sage-serenity',
    name: 'Sage Whisper',
    hex: '#cbd3c8',
    description: 'Calming botanical muted green earth tone'
  },
  {
    id: 'terracotta-sun',
    name: 'Clay & Terracotta',
    hex: '#c27d6d',
    description: 'Warm earthen sunset peach'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'look-1',
    title: 'Minimalist Fine Linework',
    category: 'Minimalist',
    tag: 'Hand-Painted',
    shape: 'Almond',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8-xpKl8XClvbe66pXaVJqGvF99ApmSdDrgKjuU-NrfSTrdXiHDEWeynv7M8E3YubhgSiYuPUtSzcA4kiWpslc07kjX60dCWOy8d9ZB9-LAmtdrx_2GExYkd0IcqcGg4dGw6IVDqb_LW1myVsV6gOFHxf8zOnJxG3UE714ifp9qfTh7Dv4_L4UbaretJNB0OCOOe9yyGVEyqFgt153PCvmkkfLehY4xxW2LMo8gvhZe37PuYvvGqtzQ',
    description: 'Precision cacao linework on high-gloss sheer nude base.',
    serviceId: 'minimalist-artistry'
  },
  {
    id: 'look-2',
    title: 'The Signature Sheer Gloss',
    category: 'Classics',
    tag: 'Signature',
    shape: 'Squoval',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBa9vWghErzrfAUymx1ntuP2E_ulmSIe4cqDmHfE_fSoqnztjpVE4_JDUWh8_8Yzuh7DKJaKVDdFA2HZWIyWo2lHa0JxUHYZ4om4OIxRk2F6zfea8Jf7_aQgxoBIDYs93OnT-ot4CIJNNQP_DSzKke2djDKPbHRt0qVeY1sEsvZHmEAnBGq31zNi2xMQ3qupXYuN6XWeShHS6PtMDBSNDLnE7pbrQi8GvEvSXNhzKFaHzz2lCsNv332A',
    description: 'Clean aesthetic with delicate rose gold cuticle accent.',
    serviceId: 'signature-manicure'
  },
  {
    id: 'look-3',
    title: 'Glazed Oyster Pearl',
    category: 'Chrome',
    tag: 'Viral Trend',
    shape: 'Almond',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    description: 'Opalescent chrome buffed over sheer milky petal.',
    serviceId: 'modern-glazed-chrome'
  },
  {
    id: 'look-4',
    title: 'Micro-French Chic',
    category: 'French Modern',
    tag: 'Bespoke',
    shape: 'Oval',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra razor-thin white smile lines with glazed finish.',
    serviceId: 'minimalist-artistry'
  },
  {
    id: 'look-5',
    title: 'Rose Quartz Crystal Inlay',
    category: 'Spa & Luxury',
    tag: 'Ritual',
    shape: 'Coffin',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop',
    description: 'Translucent blooming marble with 24k gold leaf foil.',
    serviceId: 'rose-quartz-deluxe'
  },
  {
    id: 'look-6',
    title: 'Velvet Pedicure Glow',
    category: 'Pedicures',
    tag: 'Sanctuary',
    shape: 'Square',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ISt3r1S44jAPoYjPlQ1rDQGJ2S3WSNomK9wufJXcOUmnzRdVfG-XqMzMrvwquvEuNIH5l_WGEdEqE3ZisCQtK_MVPvT1uth8WnNkk4d9uHm5sfxkwqMGh4RRAwp8o0YUehLiEszyF2_Dgn5oMeFU2G3SCjcJIdLfeJDfj_RB0ap052a4_3veo8WjcaVGrZF5RxlBAKfi1V-jZ5Qk5BMxblfjT8tRKCrJcDUePjQyjLTKyKxv0DDO3w',
    description: 'Rose petal bath & flawless nude toe perfection.',
    serviceId: 'velvet-spa-pedicure'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Charlotte Sterling',
    rating: 5,
    text: 'Velvet & Rose completely redefined what getting my nails done feels like. The sheer aesthetic, calming tea, and Elena’s meticulous cuticle work made my hands look like art.',
    date: '3 days ago',
    service: 'The Signature Manicure & Minimalist Art'
  },
  {
    id: 't2',
    name: 'Genevieve Ross',
    rating: 5,
    text: 'The Velvet Spa Pedicure is heaven. The rose petals, hot stones, and heated booties left my feet feeling like silk. I have already booked my next 3 appointments.',
    date: '1 week ago',
    service: 'Velvet Spa Pedicure'
  },
  {
    id: 't3',
    name: 'Maya Lin-Alvarez',
    rating: 5,
    text: 'The Hailey Chrome Glaze stayed completely chip-free for almost 4 full weeks! Truly superior quality gel and unmatched sanctuary vibes.',
    date: '2 weeks ago',
    service: 'BIAB Overlay & Chrome Glaze'
  }
];

export const FAQ_ITEMS = [
  {
    question: "What makes Velvet & Rose's approach different?",
    answer: "We treat nail care as a tranquil sensory ritual rather than a rushed transaction. We specialize in dry e-file gentle cuticle detailing, non-toxic Japanese gel formulations, and personalized minimalist aesthetics in a serene private lounge."
  },
  {
    question: "How long does a BIAB or Gel-X manicure last?",
    answer: "Our BIAB (Builder Gel) overlays and sculpted Gel-X extensions typically maintain pristine condition for 3 to 4 weeks without lifting or chipping. We recommend a fill or re-balance every 3-4 weeks to preserve nail health."
  },
  {
    question: "Do you accept walk-in clients?",
    answer: "To preserve our calm sanctuary environment and ensure dedicated one-on-one attention with each artisan, we operate primarily by appointment. Same-day bookings can occasionally be accommodated via our live booking portal."
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer: "We kindly request at least 24 hours notice for any cancellations or reschedules. You can manage or reschedule your reservation anytime directly through our 'My Bookings' tab."
  }
];
