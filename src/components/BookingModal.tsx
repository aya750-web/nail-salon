import React from 'react';
import { X, Check, ArrowRight, ArrowLeft, Calendar as CalendarIcon, Clock, User, Sparkles, Shield, Heart, Plus } from 'lucide-react';
import { SERVICES, SPECIALISTS, ADD_ONS, COLOR_PALETTE } from '../data/salonData';
import { Service, Specialist, AddOn, Booking, NailShape, PolishFinish } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingConfirmed: (newBooking: Booking) => void;
  initialService?: Service | null;
  initialSpecialist?: Specialist | null;
  initialCustomLook?: {
    shape: NailShape;
    color: string;
    finish: PolishFinish;
    accentArt: string;
  } | null;
}

const TIME_SLOTS = [
  '09:30 AM', '10:30 AM', '11:45 AM', '01:00 PM', '02:15 PM', '03:30 PM', '04:45 PM', '06:00 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onBookingConfirmed,
  initialService,
  initialSpecialist,
  initialCustomLook
}) => {
  const [step, setStep] = React.useState(1);
  const [selectedService, setSelectedService] = React.useState<Service>(initialService || SERVICES[0]);
  const [selectedSpecialist, setSelectedSpecialist] = React.useState<Specialist | null>(initialSpecialist || null);
  const [selectedDate, setSelectedDate] = React.useState<string>('');
  const [selectedTime, setSelectedTime] = React.useState<string>('11:45 AM');
  const [selectedAddOns, setSelectedAddOns] = React.useState<AddOn[]>([]);
  const [selectedShape, setSelectedShape] = React.useState<NailShape>(initialCustomLook?.shape || 'almond');
  const [selectedColor, setSelectedColor] = React.useState<string>(initialCustomLook?.color || 'Petal Whisper');
  const [clientName, setClientName] = React.useState('');
  const [clientEmail, setClientEmail] = React.useState('');
  const [clientPhone, setClientPhone] = React.useState('');
  const [specialNotes, setSpecialNotes] = React.useState('');
  const [confirmedBooking, setConfirmedBooking] = React.useState<Booking | null>(null);

  // Sync initial props when modal opens
  React.useEffect(() => {
    if (isOpen) {
      if (initialService) setSelectedService(initialService);
      if (initialSpecialist) setSelectedSpecialist(initialSpecialist);
      if (initialCustomLook) {
        setSelectedShape(initialCustomLook.shape);
        setSelectedColor(initialCustomLook.color);
      }
      
      // Default to tomorrow's date formatted nicely
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateStr = tomorrow.toISOString().split('T')[0];
      setSelectedDate(dateStr);
    }
  }, [isOpen, initialService, initialSpecialist, initialCustomLook]);

  if (!isOpen) return null;

  // Generate the next 10 available booking dates
  const availableDates = [...Array(10)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      full: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      monthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  });

  const toggleAddOn = (addon: AddOn) => {
    if (selectedAddOns.some(a => a.id === addon.id)) {
      setSelectedAddOns(selectedAddOns.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
  };

  const calculateTotal = () => {
    const basePrice = selectedService?.price || 0;
    const addOnsTotal = selectedAddOns.reduce((acc, curr) => acc + curr.price, 0);
    return basePrice + addOnsTotal;
  };

  const calculateDurationMinutes = () => {
    const baseMinutes = selectedService?.durationMinutes || 45;
    const addOnsMinutes = selectedAddOns.reduce((acc, curr) => acc + curr.durationMinutes, 0);
    return baseMinutes + addOnsMinutes;
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) return;

    const randomRefNum = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `VR-${randomRefNum}`;

    const newBooking: Booking = {
      id: 'book-' + Date.now(),
      bookingRef,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.duration,
      specialistId: selectedSpecialist ? selectedSpecialist.id : 'any',
      specialistName: selectedSpecialist ? selectedSpecialist.name : 'First Available Master Artist',
      date: selectedDate,
      time: selectedTime,
      addOns: selectedAddOns,
      nailShape: selectedShape,
      selectedColor,
      clientName,
      clientEmail,
      clientPhone,
      specialRequests: specialNotes,
      totalPrice: calculateTotal(),
      totalDurationMinutes: calculateDurationMinutes(),
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    setConfirmedBooking(newBooking);
    onBookingConfirmed(newBooking);
    setStep(5); // Confirmation step
  };

  const handleDownloadCalendarEvent = () => {
    if (!confirmedBooking) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Velvet & Rose//Nail Sanctuary Booking//EN
BEGIN:VEVENT
SUMMARY:Velvet & Rose: ${confirmedBooking.serviceName}
DESCRIPTION:Reservation Reference: ${confirmedBooking.bookingRef}\\nArtist: ${confirmedBooking.specialistName}\\nLocation: 142 Rosewood Lane, Beverly Hills, CA
DTSTART:${confirmedBooking.date.replace(/-/g, '')}T110000Z
DTEND:${confirmedBooking.date.replace(/-/g, '')}T120000Z
LOCATION:142 Rosewood Lane, Beverly Hills, CA
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Velvet-Rose-Booking-${confirmedBooking.bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-[#faf9f6] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#d0c3c7]/40 overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-white px-6 py-5 border-b border-[#d0c3c7]/30 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#805062] block">
              Boutique Sanctuary Concierge
            </span>
            <h2 className="font-serif text-xl font-bold text-[#755750]">
              {step === 5 ? 'Reservation Confirmed' : 'Reserve Your Ritual'}
            </h2>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4d4447] hover:text-[#755750] hover:bg-[#efeeeb] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar (only for steps 1-4) */}
        {step < 5 && (
          <div className="bg-[#efeeeb]/70 px-6 py-3 border-b border-[#d0c3c7]/20 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 1 ? 'bg-[#755750] text-white' : 'bg-[#d0c3c7] text-white'
              }`}>
                1
              </span>
              <span className={`font-semibold ${step === 1 ? 'text-[#755750]' : 'text-[#4d4447]'}`}>Service</span>
            </div>
            <div className="w-6 h-[1px] bg-[#d0c3c7]" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 2 ? 'bg-[#755750] text-white' : 'bg-[#d0c3c7] text-white'
              }`}>
                2
              </span>
              <span className={`font-semibold ${step === 2 ? 'text-[#755750]' : 'text-[#4d4447]'}`}>Artisan</span>
            </div>
            <div className="w-6 h-[1px] bg-[#d0c3c7]" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 3 ? 'bg-[#755750] text-white' : 'bg-[#d0c3c7] text-white'
              }`}>
                3
              </span>
              <span className={`font-semibold ${step === 3 ? 'text-[#755750]' : 'text-[#4d4447]'}`}>Date &amp; Time</span>
            </div>
            <div className="w-6 h-[1px] bg-[#d0c3c7]" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 4 ? 'bg-[#755750] text-white' : 'bg-[#d0c3c7] text-white'
              }`}>
                4
              </span>
              <span className={`font-semibold ${step === 4 ? 'text-[#755750]' : 'text-[#4d4447]'}`}>Details</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-serif text-lg font-bold text-[#755750]">
                  1. Choose Your Ritual Treatment
                </h3>
                <span className="text-xs text-[#4d4447]">{SERVICES.length} available services</span>
              </div>

              <div className="space-y-3">
                {SERVICES.map(service => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      selectedService.id === service.id
                        ? 'bg-white border-[#755750] shadow-sm ring-1 ring-[#755750]'
                        : 'bg-white/60 border-[#d0c3c7]/40 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-14 h-14 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#755750]">
                          {service.name}
                        </h4>
                        <p className="text-xs text-[#4d4447] line-clamp-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#805062] font-semibold">
                          <Clock className="w-3 h-3" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif text-base font-bold text-[#755750] block">
                        {service.priceDisplay}
                      </span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ml-auto mt-1 ${
                        selectedService.id === service.id ? 'bg-[#755750] border-[#755750] text-white' : 'border-[#d0c3c7]'
                      }`}>
                        {selectedService.id === service.id && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Specialist */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#755750]">
                2. Select Your Nail Artisan
              </h3>
              <p className="text-xs text-[#4d4447]">
                Choose your preferred specialist or let us assign our earliest available master artisan.
              </p>

              {/* Any Available Option */}
              <div
                onClick={() => setSelectedSpecialist(null)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedSpecialist === null
                    ? 'bg-white border-[#755750] shadow-sm ring-1 ring-[#755750]'
                    : 'bg-white/60 border-[#d0c3c7]/40 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#ffe3eb] flex items-center justify-center text-[#805062]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#755750]">
                      First Available Master Artisan
                    </h4>
                    <p className="text-xs text-[#4d4447]">
                      Maximum appointment flexibility &amp; priority scheduling
                    </p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selectedSpecialist === null ? 'bg-[#755750] border-[#755750] text-white' : 'border-[#d0c3c7]'
                }`}>
                  {selectedSpecialist === null && <Check className="w-3 h-3" />}
                </div>
              </div>

              {/* Specialist Cards */}
              <div className="space-y-3">
                {SPECIALISTS.map(spec => (
                  <div
                    key={spec.id}
                    onClick={() => setSelectedSpecialist(spec)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedSpecialist?.id === spec.id
                        ? 'bg-white border-[#755750] shadow-sm ring-1 ring-[#755750]'
                        : 'bg-white/60 border-[#d0c3c7]/40 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={spec.avatar}
                        alt={spec.name}
                        className="w-12 h-12 rounded-full object-cover border border-[#ffd7ce]"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#755750]">
                          {spec.name}
                        </h4>
                        <p className="text-xs text-[#805062] font-semibold">{spec.role}</p>
                        <p className="text-[11px] text-[#4d4447]">Specialty: {spec.specialty}</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedSpecialist?.id === spec.id ? 'bg-[#755750] border-[#755750] text-white' : 'border-[#d0c3c7]'
                    }`}>
                      {selectedSpecialist?.id === spec.id && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#755750] mb-2">
                  3. Select Date
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {availableDates.map(d => (
                    <button
                      key={d.full}
                      onClick={() => setSelectedDate(d.full)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        selectedDate === d.full
                          ? 'bg-[#755750] text-white border-[#755750] shadow-sm'
                          : 'bg-white text-[#4d4447] border-[#d0c3c7]/40 hover:border-[#755750]'
                      }`}
                    >
                      <span className="text-[11px] font-semibold block uppercase tracking-wider opacity-80">
                        {d.dayName}
                      </span>
                      <span className="font-serif text-sm font-bold block mt-0.5">
                        {d.monthDay}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#755750] mb-2">
                  Preferred Time Slot
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TIME_SLOTS.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        selectedTime === t
                          ? 'bg-[#ffe3eb] text-[#805062] border-[#805062] font-bold'
                          : 'bg-white text-[#4d4447] border-[#d0c3c7]/40 hover:bg-[#faf9f6]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Add-Ons & Client Details */}
          {step === 4 && (
            <form onSubmit={handleConfirmReservation} className="space-y-6">
              {/* Optional Add-Ons */}
              <div>
                <h3 className="font-serif text-base font-bold text-[#755750] mb-3">
                  Enhance Your Ritual (Optional Add-Ons)
                </h3>
                <div className="space-y-2">
                  {ADD_ONS.map(addon => {
                    const isSelected = selectedAddOns.some(a => a.id === addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon)}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#ffe3eb]/60 border-[#805062]'
                            : 'bg-white border-[#d0c3c7]/30 hover:bg-[#faf9f6]'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-[#755750]">{addon.name}</p>
                          <p className="text-[11px] text-[#4d4447]">{addon.description}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-semibold text-[#805062]">+${addon.price}</span>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? 'bg-[#805062] text-white border-[#805062]' : 'border-[#d0c3c7]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Guest Details */}
              <div>
                <h3 className="font-serif text-base font-bold text-[#755750] mb-3">
                  Guest Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#755750] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      className="w-full bg-white border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#755750] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@example.com"
                        value={clientEmail}
                        onChange={e => setClientEmail(e.target.value)}
                        className="w-full bg-white border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#755750] block mb-1">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(310) 555-0199"
                        value={clientPhone}
                        onChange={e => setClientPhone(e.target.value)}
                        className="w-full bg-white border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#755750] block mb-1">
                      Sensory Requests or Polish Preferences
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra gentle cuticle care, chamomile tea, sensitive skin"
                      value={specialNotes}
                      onChange={e => setSpecialNotes(e.target.value)}
                      className="w-full bg-white border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="bg-[#faf9f6] p-4 rounded-2xl border border-[#d0c3c7]/30 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-[#755750]">
                  <span>{selectedService.name}</span>
                  <span>${selectedService.price}</span>
                </div>
                {selectedAddOns.map(a => (
                  <div key={a.id} className="flex justify-between text-[#4d4447]">
                    <span>+ {a.name}</span>
                    <span>${a.price}</span>
                  </div>
                ))}
                <div className="border-t border-[#d0c3c7]/30 pt-2 flex justify-between font-serif text-sm font-bold text-[#755750]">
                  <span>Total Estimated ({calculateDurationMinutes()} mins)</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <button
                type="submit"
                id="btn-confirm-reservation"
                className="w-full bg-[#755750] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#805062] transition-colors btn-polished shadow-md active:scale-95 cursor-pointer"
              >
                Confirm &amp; Reserve Sanctuary Visit (${calculateTotal()})
              </button>
            </form>
          )}

          {/* STEP 5: Booking Confirmation Receipt */}
          {step === 5 && confirmedBooking && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#ffe3eb] text-[#805062] mx-auto flex items-center justify-center shadow-inner">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-semibold text-[#805062] uppercase tracking-[0.2em]">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#755750] mt-1">
                  We look forward to welcoming you, {confirmedBooking.clientName.split(' ')[0]}
                </h3>
                <p className="text-xs text-[#4d4447] mt-1">
                  A confirmation SMS &amp; email have been dispatched to {confirmedBooking.clientEmail}.
                </p>
              </div>

              {/* Receipt Ticket */}
              <div className="bg-white rounded-2xl p-5 border border-[#d0c3c7]/40 text-left ambient-shadow space-y-3">
                <div className="flex justify-between items-center border-b border-[#efeeeb] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#805062] uppercase tracking-wider">
                      Reference Code
                    </span>
                    <p className="font-mono text-base font-bold text-[#755750]">
                      {confirmedBooking.bookingRef}
                    </p>
                  </div>
                  <span className="bg-[#ffd7ce] text-[#7a5b54] px-3 py-1 rounded-full text-[11px] font-bold uppercase">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-[#4d4447]/70 uppercase">Service</span>
                    <p className="font-semibold text-[#755750]">{confirmedBooking.serviceName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#4d4447]/70 uppercase">Artisan</span>
                    <p className="font-semibold text-[#755750]">{confirmedBooking.specialistName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#4d4447]/70 uppercase">Date &amp; Time</span>
                    <p className="font-semibold text-[#755750]">
                      {confirmedBooking.date} at {confirmedBooking.time}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#4d4447]/70 uppercase">Total Amount</span>
                    <p className="font-semibold text-[#755750]">${confirmedBooking.totalPrice} ({confirmedBooking.totalDurationMinutes} mins)</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#efeeeb] text-[11px] text-[#4d4447]">
                  📍 142 Rosewood Lane, Beverly Hills • Valet parking reserved for you.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadCalendarEvent}
                  className="flex-1 bg-[#efeeeb] text-[#755750] hover:bg-[#e9e8e5] py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  Add to Calendar (.ics)
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-[#755750] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] transition-colors btn-polished cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Steps 1 to 4) */}
        {step < 5 && (
          <div className="bg-white px-6 py-4 border-t border-[#d0c3c7]/30 flex justify-between items-center">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-xs font-semibold text-[#4d4447] hover:text-[#755750] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <span className="text-xs text-[#4d4447]/70">Step 1 of 4</span>
            )}

            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-[#755750] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] transition-colors btn-polished flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
