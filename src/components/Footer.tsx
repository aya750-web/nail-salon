import React from 'react';
import { Heart, Sparkles, MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="w-full bg-white border-t border-[#d0c3c7]/30 mt-16 text-[#1a1c1a]">
      {/* Top Banner / Callout */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 border-b border-[#d0c3c7]/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#755750] mb-2">
            Experience the Art of Calm.
          </h3>
          <p className="text-xs sm:text-sm text-[#4d4447]">
            Private boutique lounge reserved exclusively for your scheduled appointments.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="bg-[#755750] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#805062] transition-colors btn-polished shadow-sm shrink-0 cursor-pointer active:scale-95"
        >
          Reserve Your Visit
        </button>
      </div>

      {/* Main Footer Links & Copyright matching prompt */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl font-bold text-[#755750]">
          Velvet &amp; Rose
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs sm:text-sm text-[#4d4447]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#755750] transition-colors duration-200">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#755750] transition-colors duration-200">
            Facebook
          </a>
          <a href="#services" className="hover:text-[#755750] transition-colors duration-200">
            Treatments
          </a>
          <a href="#visualizer" className="hover:text-[#755750] transition-colors duration-200">
            Studio
          </a>
          <a href="#" className="hover:text-[#755750] transition-colors duration-200">
            Terms
          </a>
          <a href="#" className="hover:text-[#755750] transition-colors duration-200">
            Privacy
          </a>
        </div>

        <div className="text-xs text-[#4d4447]/80">
          &copy; {new Date().getFullYear()} Velvet &amp; Rose. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
