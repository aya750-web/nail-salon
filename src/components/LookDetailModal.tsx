import React from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LookDetailModalProps {
  look: GalleryItem | null;
  onClose: () => void;
  onBookLook: (look: GalleryItem) => void;
}

export const LookDetailModal: React.FC<LookDetailModalProps> = ({ look, onClose, onBookLook }) => {
  if (!look) return null;

  return (
    <div
      id="look-detail-modal-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="look-detail-card"
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#d0c3c7]/40 overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-72 sm:h-96 w-full bg-[#efeeeb]">
          <img
            src={look.image}
            alt={look.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="bg-white/95 text-[#755750] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {look.category}
            </span>
            <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
              Shape: {look.shape}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#755750] mb-2">
              {look.title}
            </h3>
            <p className="text-sm text-[#4d4447] leading-relaxed">
              {look.description}
            </p>
          </div>

          <div className="bg-[#faf9f6] p-4 rounded-2xl border border-[#d0c3c7]/20 space-y-2 text-xs text-[#4d4447]">
            <p className="font-bold text-[#755750] uppercase tracking-wider text-[11px]">
              Artisan Technique Notes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#805062]" />
                <span>Non-acidic Japanese base coat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#805062]" />
                <span>Hand-detailed precision line brushes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#805062]" />
                <span>Micro-buffed mirror chrome seal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#805062]" />
                <span>Nourishing botanical nectar finish</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onBookLook(look);
              }}
              className="flex-1 bg-[#755750] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#805062] transition-colors btn-polished flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Book Appointment for This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3.5 border border-[#d0c3c7] text-[#4d4447] hover:bg-[#faf9f6] rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
