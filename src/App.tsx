import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ServicesSection } from './components/ServicesSection';
import { NailStudioVisualizer } from './components/NailStudioVisualizer';
import { GallerySection } from './components/GallerySection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqAndContactSection } from './components/FaqAndContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { LookDetailModal } from './components/LookDetailModal';
import { Service, Specialist, Booking, GalleryItem, NailShape, PolishFinish } from './types';
import { SERVICES } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [isAppointmentsOpen, setIsAppointmentsOpen] = React.useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = React.useState<Service | null>(null);
  const [selectedSpecialistForBooking, setSelectedSpecialistForBooking] = React.useState<Specialist | null>(null);
  const [selectedCustomLookForBooking, setSelectedCustomLookForBooking] = React.useState<{
    shape: NailShape;
    color: string;
    finish: PolishFinish;
    accentArt: string;
  } | null>(null);
  const [selectedGalleryLook, setSelectedGalleryLook] = React.useState<GalleryItem | null>(null);

  // Local storage for bookings
  const [savedBookings, setSavedBookings] = React.useState<Booking[]>(() => {
    try {
      const stored = localStorage.getItem('velvet_rose_bookings');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    // Seed initial sample booking if empty
    return [
      {
        id: 'book-seed-1',
        bookingRef: 'VR-8492',
        serviceId: 'signature-manicure',
        serviceName: 'The Signature Manicure',
        servicePrice: 45,
        serviceDuration: '45 Min',
        specialistId: 'elena-vance',
        specialistName: 'Elena Vance',
        date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        time: '11:45 AM',
        addOns: [
          {
            id: 'chrome-powder',
            name: 'Hailey Chrome Glaze Powder',
            price: 15,
            duration: '15 Min',
            durationMinutes: 15,
            description: 'Iridescent pearl chrome dust'
          }
        ],
        nailShape: 'almond',
        selectedColor: 'Petal Whisper',
        clientName: 'Eleanor Vance',
        clientEmail: 'eleanor@example.com',
        clientPhone: '(310) 555-0199',
        totalPrice: 60,
        totalDurationMinutes: 60,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      }
    ];
  });

  // Save bookings to localStorage whenever they update
  React.useEffect(() => {
    try {
      localStorage.setItem('velvet_rose_bookings', JSON.stringify(savedBookings));
    } catch (e) {
      console.error(e);
    }
  }, [savedBookings]);

  const handleOpenBooking = () => {
    setSelectedServiceForBooking(null);
    setSelectedSpecialistForBooking(null);
    setSelectedCustomLookForBooking(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setSelectedServiceForBooking(service);
    setSelectedSpecialistForBooking(null);
    setSelectedCustomLookForBooking(null);
    setIsBookingOpen(true);
  };

  const handleBookSpecialist = (specialist: Specialist) => {
    setSelectedSpecialistForBooking(specialist);
    setSelectedServiceForBooking(null);
    setSelectedCustomLookForBooking(null);
    setIsBookingOpen(true);
  };

  const handleBookCustomLook = (customLook: {
    shape: NailShape;
    color: string;
    finish: PolishFinish;
    accentArt: string;
  }) => {
    // Select Minimalist Artistry service as base
    const artService = SERVICES.find(s => s.id === 'minimalist-artistry') || SERVICES[0];
    setSelectedServiceForBooking(artService);
    setSelectedCustomLookForBooking(customLook);
    setSelectedSpecialistForBooking(null);
    setIsBookingOpen(true);
  };

  const handleBookGalleryLook = (item: GalleryItem) => {
    const matchedService = SERVICES.find(s => s.id === item.serviceId) || SERVICES[0];
    setSelectedServiceForBooking(matchedService);
    setIsBookingOpen(true);
  };

  const handleBookingConfirmed = (newBooking: Booking) => {
    setSavedBookings(prev => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    setSavedBookings(prev =>
      prev.map(b => (b.id === bookingId ? { ...b, status: 'cancelled' as const } : b))
    );
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a] flex flex-col selection:bg-[#ffd7ce] selection:text-[#7a5b54]">
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenAppointments={() => setIsAppointmentsOpen(true)}
        savedBookings={savedBookings}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section matching template prompt */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Spacer */}
        <div className="h-8 md:h-12" />

        {/* 2. Our Story Section matching template prompt */}
        <StorySection />

        {/* 3. Curated Services Section matching template prompt */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Interactive Nail Studio & Visualizer */}
        <NailStudioVisualizer onBookCustomLook={handleBookCustomLook} />

        {/* 5. Artistry Lookbook Gallery */}
        <GallerySection onSelectLook={look => setSelectedGalleryLook(look)} />

        {/* 6. Master Artisans & Specialists */}
        <SpecialistsSection onBookSpecialist={handleBookSpecialist} />

        {/* 7. Client Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions & Location Contact */}
        <FaqAndContactSection />
      </main>

      {/* Footer matching template prompt */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onBookingConfirmed={handleBookingConfirmed}
        initialService={selectedServiceForBooking}
        initialSpecialist={selectedSpecialistForBooking}
        initialCustomLook={selectedCustomLookForBooking}
      />

      <MyAppointmentsModal
        isOpen={isAppointmentsOpen}
        onClose={() => setIsAppointmentsOpen(false)}
        bookings={savedBookings}
        onCancelBooking={handleCancelBooking}
        onNewBookingClick={() => setIsBookingOpen(true)}
      />

      <LookDetailModal
        look={selectedGalleryLook}
        onClose={() => setSelectedGalleryLook(null)}
        onBookLook={handleBookGalleryLook}
      />
    </div>
  );
}
