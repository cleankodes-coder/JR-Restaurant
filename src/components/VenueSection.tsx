import React, { useState } from 'react';
import { Calendar, Users, Building, Sparkles, MessageCircle, CheckCircle, Clock, MapPin, Music } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const VenueSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Party / Debut',
    date: '',
    guestCount: '50-100 Guests',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello JR's Restaurant, I would like to enquire about booking your events venue.\n\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Phone/WhatsApp: ${formData.phone || 'Not provided'}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Target Date: ${formData.date || 'TBD'}\n` +
      `• Number of Guests: ${formData.guestCount}\n` +
      (formData.notes ? `• Special Notes: ${formData.notes}\n` : '')
    );

    setFormSubmitted(true);
    window.open(`https://wa.me/971551820975?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="py-20 md:py-28 bg-[#121214] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            <span>Al Ain Premier Filipino Function Hall</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            A 400 sqm Venue for Your Next Celebration
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Multi-purpose exclusive events venue in Central District, Al Ain — perfect for corporate trainings, professional seminars, grand parties, birthdays, weddings, debuts, and joyous barkada gatherings.
          </p>
        </div>

        {/* 2-Column Split: Venue Showcase & Interactive WhatsApp Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Visual Hall & Venue Features */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group mb-6">
              <img
                src="/images/events_venue_hall_1793705098431.jpg"
                alt="JR's Restaurant 400 sqm Events Venue in Central District Al Ain"
                className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Spacious & Fully Equipped
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
                  Exclusive 400 Square Meters Hall
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Town Centre, Central District — conveniently located opposite Al Ain Mediclinic & Choitram.
                </p>
              </div>
            </div>

            {/* Venue Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <Users className="w-5 h-5 text-amber-400 mb-1.5" />
                <h4 className="text-xs font-bold text-white mb-0.5">Flexible Capacity</h4>
                <p className="text-[11px] text-zinc-400">Accommodates 30 to 250+ guests comfortably.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <Sparkles className="w-5 h-5 text-emerald-400 mb-1.5" />
                <h4 className="text-xs font-bold text-white mb-0.5">Custom Pinoy Buffet</h4>
                <p className="text-[11px] text-zinc-400">Signature Batchoy, Lechon Kawali & dishes.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 col-span-2 sm:col-span-1">
                <Music className="w-5 h-5 text-amber-400 mb-1.5" />
                <h4 className="text-xs font-bold text-white mb-0.5">Sound & Stage</h4>
                <p className="text-[11px] text-zinc-400">Audio visual system, microphones & ambient lights.</p>
              </div>
            </div>

            {/* Direct Quick WhatsApp Button */}
            <div className="mt-6">
              <a
                href={`https://wa.me/971551820975?text=${encodeURIComponent(
                  "Hello JR's Restaurant, I would like to enquire about booking your events venue."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Or click here to send a quick one-tap WhatsApp inquiry directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Event Enquiry Form */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1c1c21] to-[#161619] p-6 sm:p-8 rounded-3xl border border-zinc-700/80 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Event Consultation
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
                Enquire Venue Availability
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in your celebration details below. Your request will open immediately in WhatsApp with pre-filled details for instant quotation from JR&apos;s team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Birthday Party / Debut">Birthday Party / Debut</option>
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Corporate Training / Seminar">Corporate Training / Seminar</option>
                    <option value="Family Reunion / Barkada Gathering">Family Reunion / Barkada Gathering</option>
                    <option value="Baptism / Christening">Baptism / Christening</option>
                    <option value="Anniversary Celebration">Anniversary Celebration</option>
                    <option value="Other Special Event">Other Special Event</option>
                  </select>
                </div>

                {/* Date & Guests in 2 Columns */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                      Target Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                      Est. Guests
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Under 30 Guests">Under 30 Guests</option>
                      <option value="30-50 Guests">30–50 Guests</option>
                      <option value="50-100 Guests">50–100 Guests</option>
                      <option value="100-150 Guests">100–150 Guests</option>
                      <option value="150-250+ Guests">150–250+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Special Requests or Catering Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g., need sound system, buffet packages, puto batchoy bar..."
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-all shadow-xl shadow-emerald-950/40 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp (+971 55 182 0975)</span>
                </button>
              </form>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 text-center">
              <span className="text-[11px] text-zinc-500">
                Direct WhatsApp contact: <strong className="text-zinc-300">{RESTAURANT_INFO.whatsapp}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
