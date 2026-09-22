import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 max-w-[1200px] mx-auto px-5 md:px-12">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] mb-3 block">
          Client Reverence
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#755750] mb-3">
          Reflections of Serenity
        </h2>
        <p className="text-base text-[#4d4447]">
          What our distinguished guests say about their sanctuary experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map(t => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-7 ambient-shadow border border-[#d0c3c7]/20 flex flex-col justify-between relative"
          >
            <Quote className="w-8 h-8 text-[#ffd7ce] absolute top-6 right-6" />

            <div>
              {/* 5 Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#755750] text-[#755750]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-sm text-[#4d4447] italic leading-relaxed mb-6">
                "{t.text}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-[#d0c3c7]/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#755750] flex items-center gap-1">
                  {t.name}
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#805062]" />
                </p>
                <p className="text-[11px] text-[#4d4447]/80">{t.service}</p>
              </div>
              <span className="text-[10px] text-[#4d4447]/60">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
