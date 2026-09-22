import React from 'react';
import { Sparkles, Calendar, Menu, X, Clock, MapPin, Phone } from 'lucide-react';
import { Booking } from '../types';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAppointments: () => void;
  savedBookings: Booking[];
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAppointments,
  savedBookings
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeBookingsCount = savedBookings.filter(b => b.status !== 'cancelled').length;

  return (
    <>
      {/* Top Banner Notice for Luxury Experience */}
      <div id="top-announcement-bar" className="bg-[#755750] text-[#faf9f6] py-1.5 px-4 text-center text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-4">
        <span className="hidden sm:inline">✨ Complimentary organic herbal infusions &amp; champagne with every service</span>
        <span className="sm:hidden">✨ Boutique Nail Sanctuary &amp; Lounge</span>
        <span className="hidden md:inline text-xs opacity-75">| Valet Parking Available</span>
      </div>

      {/* Main App Bar */}
      <header
        id="main-header"
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-[#faf9f6]/85 backdrop-blur-sm py-4'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-12 max-w-[1200px] mx-auto">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              id="open-menu"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-[#755750] p-1 rounded-lg hover:bg-[#efeeeb] active:scale-95 transition-transform"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a
              id="brand-logo"
              href="#"
              className="font-serif text-2xl md:text-3xl tracking-tight text-[#755750] font-bold hover:opacity-90 transition-opacity"
            >
              Velvet &amp; Rose
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium">
            <a
              id="nav-link-home"
              href="#"
              className="text-[#755750] font-semibold hover:text-[#6b5a60] transition-colors duration-200"
            >
              Home
            </a>
            <a
              id="nav-link-services"
              href="#services"
              className="text-[#4d4447] hover:text-[#755750] transition-colors duration-200"
            >
              Services
            </a>
            <a
              id="nav-link-visualizer"
              href="#visualizer"
              className="text-[#4d4447] hover:text-[#755750] transition-colors duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#805062]" />
              Studio Visualizer
            </a>
            <a
              id="nav-link-gallery"
              href="#gallery"
              className="text-[#4d4447] hover:text-[#755750] transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              id="nav-link-artisans"
              href="#artisans"
              className="text-[#4d4447] hover:text-[#755750] transition-colors duration-200"
            >
              Artisans
            </a>
            <a
              id="nav-link-contact"
              href="#contact"
              className="text-[#4d4447] hover:text-[#755750] transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* My Appointments Button */}
            <button
              id="btn-my-appointments"
              onClick={onOpenAppointments}
              className="relative p-2 text-[#4d4447] hover:text-[#755750] hover:bg-[#efeeeb] rounded-full transition-colors"
              title="View My Bookings"
              aria-label="My Appointments"
            >
              <Calendar className="w-5 h-5" />
              {activeBookingsCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#805062] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {activeBookingsCount}
                </span>
              )}
            </button>

            {/* Book Now Button */}
            <button
              id="btn-book-now-header"
              onClick={onOpenBooking}
              className="bg-[#755750] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#805062] transition-colors btn-polished cursor-pointer active:scale-95 shadow-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="nav-drawer"
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden flex"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="nav-drawer-panel"
            className="h-full w-4/5 max-w-sm bg-[#faf9f6] shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-left duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#d0c3c7]/30">
                <span className="font-serif text-2xl font-bold text-[#755750]">Velvet &amp; Rose</span>
                <button
                  id="close-menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4d4447] hover:text-[#755750] p-1 rounded-full hover:bg-[#efeeeb]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#ffd7ce] text-[#7a5b54] rounded-full px-4 py-3 text-sm font-semibold flex items-center gap-3 transition-colors"
                >
                  <span>Home</span>
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4d4447] px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-[#efeeeb] rounded-full transition-colors"
                >
                  <span>Services &amp; Menu</span>
                </a>
                <a
                  href="#visualizer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4d4447] px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-[#efeeeb] rounded-full transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#805062]" />
                  <span>Virtual Nail Studio</span>
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4d4447] px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-[#efeeeb] rounded-full transition-colors"
                >
                  <span>Artistry Gallery</span>
                </a>
                <a
                  href="#artisans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4d4447] px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-[#efeeeb] rounded-full transition-colors"
                >
                  <span>Master Artisans</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4d4447] px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-[#efeeeb] rounded-full transition-colors"
                >
                  <span>Sanctuary &amp; Hours</span>
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#d0c3c7]/30 space-y-4">
              <button
                id="drawer-my-bookings"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointments();
                }}
                className="w-full border border-[#755750] text-[#755750] py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                My Bookings ({activeBookingsCount})
              </button>
              <button
                id="drawer-book-appointment"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#755750] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#805062] btn-polished shadow-sm"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
