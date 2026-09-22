import React from 'react';
import { Star, Award, Calendar, Sparkles } from 'lucide-react';
import { SPECIALISTS } from '../data/salonData';
import { Specialist } from '../types';

interface SpecialistsSectionProps {
  onBookSpecialist: (specialist: Specialist) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onBookSpecialist }) => {
  return (
    <section id="artisans" className="py-20 md:py-28 bg-[#fce4ec]/20 px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] mb-3 block">
            Craft &amp; Mastery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#755750] mb-4">
            Meet Our Master Artisans
          </h2>
          <p className="text-base text-[#4d4447] max-w-xl mx-auto">
            Dedicated artists specializing in healthy nail biology, intricate negative space designs, and soothing spa therapies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALISTS.map(specialist => (
            <div
              key={specialist.id}
              id={`specialist-card-${specialist.id}`}
              className="bg-white rounded-3xl overflow-hidden ambient-shadow flex flex-col p-6 border border-[#d0c3c7]/20 group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Avatar & Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img
                    src={specialist.avatar}
                    alt={specialist.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#ffd7ce] shadow-xs"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#805062] text-white p-1 rounded-full text-[10px]">
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#755750]">
                    {specialist.name}
                  </h3>
                  <p className="text-xs text-[#805062] font-semibold">{specialist.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 fill-[#755750] text-[#755750]" />
                    <span className="text-xs font-bold text-[#755750]">{specialist.rating}</span>
                    <span className="text-[11px] text-[#4d4447]">({specialist.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Bio & Specialty */}
              <div className="mb-6 flex-1">
                <div className="bg-[#faf9f6] p-3 rounded-xl mb-3 border border-[#d0c3c7]/20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#755750] block mb-1">
                    Signature Specialty
                  </span>
                  <p className="text-xs font-medium text-[#4d4447]">
                    {specialist.specialty}
                  </p>
                </div>
                <p className="text-xs text-[#4d4447] leading-relaxed">
                  {specialist.bio}
                </p>
              </div>

              {/* Available Days & Book CTA */}
              <div className="pt-4 border-t border-[#d0c3c7]/30 flex items-center justify-between mt-auto">
                <div className="text-[11px] text-[#4d4447]">
                  <span className="font-semibold text-[#755750]">In Sanctuary: </span>
                  {specialist.availableDays.slice(0, 3).join(', ')}...
                </div>
                <button
                  id={`btn-book-with-${specialist.id}`}
                  onClick={() => onBookSpecialist(specialist)}
                  className="bg-[#755750] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#805062] transition-colors btn-polished active:scale-95 shadow-xs"
                >
                  Book with {specialist.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
