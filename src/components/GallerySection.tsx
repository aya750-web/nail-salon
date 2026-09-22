import React from 'react';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectLook: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectLook }) => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const categories = ['All', 'Minimalist', 'Classics', 'Chrome', 'French Modern', 'Spa & Luxury'];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 md:py-28 max-w-[1200px] mx-auto px-5 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] mb-3 block">
            Artisan Lookbook
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#755750]">
            The Gallery
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-[#755750] text-white shadow-xs'
                  : 'bg-[#efeeeb] text-[#4d4447] hover:bg-[#e9e8e5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Looks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => onSelectLook(item)}
            className="group relative rounded-2xl overflow-hidden bg-white ambient-shadow cursor-pointer aspect-4/5 flex flex-col justify-end"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Tag */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <span className="bg-white/90 backdrop-blur-xs text-[#755750] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                {item.tag}
              </span>
              <span className="bg-black/40 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                {item.shape}
              </span>
            </div>

            {/* Bottom Content Card */}
            <div className="relative z-10 p-5 text-white transition-transform duration-300 transform group-hover:-translate-y-1">
              <h3 className="font-serif text-lg font-bold mb-1 group-hover:text-[#ffd7ce] transition-colors flex items-center justify-between">
                <span>{item.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-white/80 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
