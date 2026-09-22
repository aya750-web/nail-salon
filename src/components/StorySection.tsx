import React from 'react';
import { Sparkles, Feather, ShieldCheck } from 'lucide-react';
import { STORY_IMAGE } from '../data/salonData';

export const StorySection: React.FC = () => {
  return (
    <section id="our-story" className="bg-[#fce4ec]/30 py-20 md:py-28 px-5 md:px-12 my-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Story Interior Image */}
        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden h-[360px] md:h-[440px] ambient-shadow group">
          <img
            id="story-image"
            src={STORY_IMAGE}
            alt="A tranquil, minimalist boutique nail lounge interior with plush petal pink chairs and warm alabaster lighting"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-103"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#755750] shadow-sm">
            Est. 2021 • Sanctuary Lounge
          </div>
        </div>

        {/* Story Text */}
        <div className="order-1 md:order-2 md:pl-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] mb-3 block">
            Our Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#755750] mb-6 leading-snug">
            Meticulous Detail. Serene Atmosphere.
          </h2>
          
          <p className="text-base text-[#4d4447] mb-5 leading-relaxed">
            Velvet &amp; Rose was founded on a simple principle: beauty services should feel like a retreat, not a routine. We blend the precision of high-end techniques with the warmth of an inclusive, boutique environment.
          </p>
          
          <p className="text-base text-[#4d4447] mb-8 leading-relaxed">
            Every polish, every tool, and every gesture is carefully chosen to ensure a polished finish that lasts, all while you unwind in our modern sanctuary.
          </p>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#d0c3c7]/30">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ffd7ce] flex items-center justify-center text-[#755750] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#755750]">Hospital-Grade Hygiene</h4>
                <p className="text-xs text-[#4d4447]">Autoclave sterilization &amp; single-use files for each guest.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ffe3eb] flex items-center justify-center text-[#805062] shrink-0 mt-0.5">
                <Feather className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#755750]">Gentle Japanese Gel</h4>
                <p className="text-xs text-[#4d4447]">Non-acidic base coats that protect your natural nail bed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
