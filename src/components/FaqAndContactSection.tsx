import React from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Send, Check, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/salonData';

export const FaqAndContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [inquiryName, setInquiryName] = React.useState('');
  const [inquiryEmail, setInquiryEmail] = React.useState('');
  const [inquiryMsg, setInquiryMsg] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail || !inquiryName) return;
    setSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMsg('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f4f3f1] border-t border-[#d0c3c7]/30 px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#805062] mb-3 block">
              Inquiries &amp; Rituals
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#755750] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#4d4447] mb-8">
              Everything you need to know about our boutique experience, non-damaging gel formulations, and lounge protocol.
            </p>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#d0c3c7]/30 overflow-hidden ambient-shadow transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#755750]">
                      {item.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 text-[#805062] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#755750] shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#4d4447] leading-relaxed border-t border-[#efeeeb] pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Location, Hours & Message Concierge */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Sanctuary Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 ambient-shadow border border-[#d0c3c7]/30 mb-6">
              <h3 className="font-serif text-xl font-bold text-[#755750] mb-5">
                The Sanctuary Location
              </h3>

              <div className="space-y-4 text-sm text-[#4d4447]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffd7ce] flex items-center justify-center text-[#755750] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#755750]">Velvet &amp; Rose Sanctuary</p>
                    <p className="text-xs">142 Rosewood Lane, Beverly Hills, CA 90210</p>
                    <p className="text-[11px] text-[#805062] mt-0.5">Complimentary guest valet &amp; private garden entrance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffe3eb] flex items-center justify-center text-[#805062] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#755750]">Sanctuary Hours</p>
                    <p className="text-xs">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs">Sunday: 10:00 AM – 5:00 PM (Quiet Spa Focus)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#efeeeb] flex items-center justify-center text-[#755750] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#755750]">Direct Concierge</p>
                    <p className="text-xs">+1 (310) 845-9200 • concierge@velvetrose.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 ambient-shadow border border-[#d0c3c7]/30">
              <h4 className="font-serif text-lg font-bold text-[#755750] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#805062]" />
                Direct Concierge Inquiry
              </h4>
              <p className="text-xs text-[#4d4447] mb-4">
                Have a bridal party, private event inquiry, or custom nail art question?
              </p>

              {submitted ? (
                <div className="bg-[#ffe3eb] text-[#805062] p-4 rounded-xl text-xs font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#805062]" />
                  Thank you! Our salon concierge will reach out to you within 2 business hours.
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={inquiryName}
                      onChange={e => setInquiryName(e.target.value)}
                      className="bg-[#faf9f6] border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={inquiryEmail}
                      onChange={e => setInquiryEmail(e.target.value)}
                      className="bg-[#faf9f6] border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="How may we assist you with your booking or bespoke request?"
                    value={inquiryMsg}
                    onChange={e => setInquiryMsg(e.target.value)}
                    className="w-full bg-[#faf9f6] border border-[#d0c3c7]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#755750] focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#755750] text-white py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] transition-colors btn-polished flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Send Message to Concierge</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
