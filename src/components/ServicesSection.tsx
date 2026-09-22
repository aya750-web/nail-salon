import React from 'react';
import { Clock, Plus, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { Service, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<ServiceCategory>('all');
  const [showFullMenu, setShowFullMenu] = React.useState(false);

  // The 3 featured services from the template
  const featuredServices = SERVICES.slice(0, 3);

  const filteredServices = SERVICES.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="services" className="py-20 md:py-28 max-w-[1200px] mx-auto px-5 md:px-12">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] mb-3 block">
          Tailored Treatments
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#755750] mb-4">
          Curated Services
        </h2>
        <p className="text-base text-[#4d4447] max-w-2xl mx-auto font-normal leading-relaxed">
          Tailored treatments to refine and enhance. Crafted with mindful techniques and non-damaging formulations.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            id="cat-btn-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#755750] text-white shadow-sm'
                : 'bg-[#efeeeb] text-[#4d4447] hover:bg-[#e9e8e5]'
            }`}
          >
            All Services
          </button>
          <button
            id="cat-btn-manicures"
            onClick={() => setSelectedCategory('manicure')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'manicure'
                ? 'bg-[#755750] text-white shadow-sm'
                : 'bg-[#efeeeb] text-[#4d4447] hover:bg-[#e9e8e5]'
            }`}
          >
            Manicures
          </button>
          <button
            id="cat-btn-pedicures"
            onClick={() => setSelectedCategory('pedicure')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'pedicure'
                ? 'bg-[#755750] text-white shadow-sm'
                : 'bg-[#efeeeb] text-[#4d4447] hover:bg-[#e9e8e5]'
            }`}
          >
            Spa Pedicures
          </button>
          <button
            id="cat-btn-art"
            onClick={() => setSelectedCategory('art')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'art'
                ? 'bg-[#755750] text-white shadow-sm'
                : 'bg-[#efeeeb] text-[#4d4447] hover:bg-[#e9e8e5]'
            }`}
          >
            Nail Art &amp; Chrome
          </button>
          <button
            id="cat-btn-spa"
            onClick={() => setSelectedCategory('spa')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'spa'
                ? 'bg-[#755750] text-white shadow-sm'
                : 'bg-[#efeeeb] text-[#4d4447] hover:bg-[#e9e8e5]'
            }`}
          >
            Rituals &amp; Care
          </button>
        </div>
      </div>

      {/* Primary 3-Card Grid (matches prompt) */}
      {selectedCategory === 'all' && !showFullMenu ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map(service => (
            <div
              key={service.id}
              id={`featured-card-${service.id}`}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-2xl overflow-hidden ambient-shadow flex flex-col group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 border border-[#d0c3c7]/20"
            >
              <div className="h-52 relative overflow-hidden bg-[#efeeeb]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-[#ffd7ce] text-[#7a5b54] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Signature Favorite
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#755750] mb-2 group-hover:text-[#805062] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#4d4447] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-[#d0c3c7]/30 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#805062] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg font-bold text-[#755750]">
                      {service.priceDisplay}
                    </span>
                    <button
                      className="bg-[#faf9f6] group-hover:bg-[#755750] group-hover:text-white text-[#755750] border border-[#755750]/30 rounded-full px-3 py-1 text-xs font-medium transition-all"
                      aria-label={`Book ${service.name}`}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Filtered or Expanded Catalog */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-2xl overflow-hidden ambient-shadow flex flex-col group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 border border-[#d0c3c7]/20"
            >
              <div className="h-48 relative overflow-hidden bg-[#efeeeb]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#755750] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#755750] mb-2 group-hover:text-[#805062] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4d4447] mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="text-xs text-[#4d4447]/85 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#805062]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex justify-between items-center border-t border-[#d0c3c7]/30 pt-4 mt-auto">
                  <span className="text-xs font-semibold text-[#805062] uppercase tracking-wider">
                    {service.duration}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-serif text-base font-bold text-[#755750]">
                      {service.priceDisplay}
                    </span>
                    <button
                      className="bg-[#755750] text-white rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] transition-colors btn-polished"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toggle View Full Menu / Collapse */}
      <div className="mt-12 text-center">
        <button
          id="btn-toggle-full-menu"
          onClick={() => setShowFullMenu(!showFullMenu)}
          className="inline-flex items-center gap-2 border-b-2 border-[#755750] text-[#755750] text-xs font-semibold uppercase tracking-widest pb-1.5 hover:text-[#805062] hover:border-[#805062] transition-colors cursor-pointer"
        >
          <span>{showFullMenu ? 'Show Featured Highlights' : 'View Full Menu & Rituals'}</span>
          {showFullMenu ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
};
