import React from 'react';
import { X, Calendar, Clock, User, Trash2, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import { Booking } from '../types';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onCancelBooking: (bookingId: string) => void;
  onNewBookingClick: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
  onNewBookingClick
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="appointments-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="appointments-modal-card"
        className="bg-[#faf9f6] w-full max-w-xl rounded-3xl shadow-2xl border border-[#d0c3c7]/40 overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-6 py-5 border-b border-[#d0c3c7]/30 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#805062] block">
              Guest Portal
            </span>
            <h2 className="font-serif text-xl font-bold text-[#755750]">
              My Sanctuary Bookings
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4d4447] hover:text-[#755750] hover:bg-[#efeeeb] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {bookings.length === 0 ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#efeeeb] text-[#755750] mx-auto flex items-center justify-center">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#755750]">
                  No Upcoming Reservations
                </h3>
                <p className="text-xs text-[#4d4447] mt-1 max-w-xs mx-auto">
                  Treat yourself to our signature sheer manicures, rose petal spa pedicures, or bespoke nail art.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNewBookingClick();
                }}
                className="bg-[#755750] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] transition-colors btn-polished shadow-sm"
              >
                Book Your First Visit
              </button>
            </div>
          ) : (
            bookings.map(booking => (
              <div
                key={booking.id}
                className={`bg-white rounded-2xl p-5 border ambient-shadow transition-all ${
                  booking.status === 'cancelled'
                    ? 'opacity-60 border-red-200'
                    : 'border-[#d0c3c7]/40'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#805062] bg-[#ffe3eb] px-2.5 py-0.5 rounded-md">
                      {booking.bookingRef}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#755750] mt-1">
                      {booking.serviceName}
                    </h4>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      booking.status === 'cancelled'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-[#ffd7ce] text-[#7a5b54]'
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#4d4447] mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#805062]" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#805062]" />
                    <span>{booking.time} ({booking.totalDurationMinutes} min)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#805062]" />
                    <span>{booking.specialistName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#805062]" />
                    <span>${booking.totalPrice}</span>
                  </div>
                </div>

                {booking.addOns && booking.addOns.length > 0 && (
                  <div className="text-[11px] text-[#4d4447]/80 bg-[#faf9f6] p-2 rounded-lg mb-3">
                    <span className="font-semibold text-[#755750]">Add-ons: </span>
                    {booking.addOns.map(a => a.name).join(', ')}
                  </div>
                )}

                {booking.status !== 'cancelled' && (
                  <div className="pt-3 border-t border-[#efeeeb] flex justify-between items-center">
                    <span className="text-[11px] text-[#4d4447]">
                      📍 142 Rosewood Lane, Beverly Hills
                    </span>
                    <button
                      onClick={() => onCancelBooking(booking.id)}
                      className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Cancel Visit
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-4 border-t border-[#d0c3c7]/30 flex justify-between items-center">
          <button
            onClick={() => {
              onClose();
              onNewBookingClick();
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[#755750] hover:text-[#805062] transition-colors"
          >
            + New Appointment
          </button>
          <button
            onClick={onClose}
            className="bg-[#755750] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] btn-polished"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
