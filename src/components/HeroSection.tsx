import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { HERO_IMAGE } from '../data/salonData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero-section" className="relative min-h-[720px] flex items-center overflow-hidden px-5 md:px-12 max-w-[1200px] mx-auto pt-6 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="md:col-span-5 flex flex-col justify-center z-10 py-6 md:py-0">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] bg-[#ffe3eb] px-3.5 py-1 rounded-full border border-[#f2b6cb]/50">
              A Modern Sanctuary
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#755750] mb-6 leading-[1.15] tracking-tight">
            Elevate Your Signature Style.
          </h1>

          <p className="text-base sm:text-lg text-[#4d4447] mb-8 max-w-md leading-relaxed font-normal">
            Experience meticulous nail artistry in a calm, boutique lounge. Indulgence meets technical excellence.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button
              id="hero-book-btn"
              onClick={onOpenBooking}
              className="bg-[#755750] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#805062] transition-all btn-polished inline-flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              id="hero-menu-link"
              href="#services"
              className="text-xs font-semibold uppercase tracking-widest text-[#4d4447] hover:text-[#755750] underline underline-offset-4 transition-colors px-2 py-1"
            >
              Our Menu
            </a>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#d0c3c7]/40 text-center sm:text-left">
            <div>
              <p className="text-xs font-semibold text-[#755750]">100% Non-Toxic</p>
              <p className="text-[11px] text-[#4d4447]/80">Japanese Soft Gel</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#755750]">Dry E-File</p>
              <p className="text-[11px] text-[#4d4447]/80">Gentle Cuticle Care</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#755750]">Private Lounge</p>
              <p className="text-[11px] text-[#4d4447]/80">Calm Sensory Space</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with Ambient Shadow */}
        <div className="md:col-span-7 relative h-[440px] md:h-[580px] lg:h-[620px] rounded-2xl overflow-hidden ambient-shadow group">
          <img
            id="hero-image"
            src={HERO_IMAGE}
            alt="Close up of elegantly manicured hands resting softly on a luxurious cream fabric"
            className="object-cover w-full h-full object-center transition-transform duration-700 group-hover:scale-102"
            referrerPolicy="no-referrer"
          />

          {/* Subtle floating glass badge */}
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#faf9f6]/90 backdrop-blur-md px-5 py-3.5 rounded-xl border border-white/60 shadow-lg flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#fce4ec] flex items-center justify-center text-[#805062]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#755750]">The Velvet Standard</p>
              <p className="text-[11px] text-[#4d4447]">Signature Sheer Polish &amp; Rose Gold Cuticle Detailing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
