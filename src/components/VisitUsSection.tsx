import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Calendar, Users, ExternalLink, Utensils, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const VisitUsSection: React.FC = () => {
  const [reserveData, setReserveData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '07:00 PM',
    guests: '4 Guests',
    notes: ''
  });

  const handleTableReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello JR's Restaurant, I would like to reserve a table for dine-in:\n\n` +
      `• Name: ${reserveData.name || 'Customer'}\n` +
      `• Phone/WhatsApp: ${reserveData.phone || 'Provided'}\n` +
      `• Date: ${reserveData.date || 'Today'}\n` +
      `• Time: ${reserveData.time}\n` +
      `• Party Size: ${reserveData.guests}\n` +
      (reserveData.notes ? `• Notes: ${reserveData.notes}\n` : '') +
      `\nPlease confirm table availability. Thank you!`
    );
    window.open(`https://wa.me/971551820975?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#161619] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Central District · Al Ain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-3">
            Visit JR&apos;s Restaurant
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Conveniently situated in Town Centre opposite Al Ain Mediclinic &amp; Choitram. We can&apos;t wait to welcome you and your family!
          </p>
        </div>

        {/* 3-Column Info & Forms Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Location & Contact Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Address & Landmark Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Restaurant Address
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-1">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-[11px] text-amber-400/90 font-medium mt-1">
                    Landmark: {RESTAURANT_INFO.landmark}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                    Plus Code: <strong className="text-zinc-200">{RESTAURANT_INFO.plusCode}</strong>
                  </p>
                </div>
              </div>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Opening Hours
                  </h3>
                  <p className="text-base font-extrabold text-emerald-400 mt-0.5">
                    {RESTAURANT_INFO.hours}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {RESTAURANT_INFO.hoursDetail}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400 flex flex-wrap gap-2">
                <span className="text-zinc-300 font-medium">Available Services:</span>
                <span className="text-emerald-400">Dine-in</span> · 
                <span className="text-emerald-400">Takeaway</span> · 
                <span className="text-emerald-400">Curbside Pickup</span> · 
                <span className="text-emerald-400">No-contact Delivery</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Direct Contact Lines
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${RESTAURANT_INFO.landlineTel}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 transition-colors text-xs font-semibold text-zinc-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Landline: {RESTAURANT_INFO.landline}</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase">Call</span>
                </a>

                <a
                  href={RESTAURANT_INFO.whatsappWaMe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition-colors text-xs font-semibold text-emerald-300"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: {RESTAURANT_INFO.whatsapp}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Embedded Google Map */}
          <div className="lg:col-span-4 h-full flex flex-col">
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900 h-full min-h-[380px] flex flex-col">
              <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-white">
                    Jr&apos;s Restaurant Al-Ain Location
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">6QF9+5C Al Ain</span>
              </div>

              {/* Responsive Google Maps Embed with fallback link */}
              <div className="relative flex-1 min-h-[320px] w-full bg-zinc-950">
                <iframe
                  title="Google Maps Location for JR's Restaurant Al Ain"
                  src="https://maps.google.com/maps?q=Jr's+Restaurant+Al-Ain,+Taj+Mahal+St,+Hai+Al+Salama,+Al+Ain&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Opposite Al Ain Mediclinic</span>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Table Reservation Form */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#1b1b20] to-[#161619] p-6 sm:p-7 rounded-3xl border border-zinc-700/80 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Utensils className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Dine-In Booking
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-1">
              Table Reservation
            </h3>
            <p className="text-xs text-zinc-400 mb-5">
              Reserve your table for lunch, dinner or family gathering. Submitting opens WhatsApp pre-filled with your reservation details.
            </p>

            <form onSubmit={handleTableReservation} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={reserveData.name}
                  onChange={(e) => setReserveData({ ...reserveData, name: e.target.value })}
                  placeholder="e.g. Juan dela Cruz"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={reserveData.phone}
                  onChange={(e) => setReserveData({ ...reserveData, phone: e.target.value })}
                  placeholder="+971 55 000 0000"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={reserveData.date}
                    onChange={(e) => setReserveData({ ...reserveData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={reserveData.time}
                    onChange={(e) => setReserveData({ ...reserveData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Party Size
                </label>
                <select
                  value={reserveData.guests}
                  onChange={(e) => setReserveData({ ...reserveData, guests: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="1-2 Guests">1–2 Guests</option>
                  <option value="3-4 Guests">3–4 Guests</option>
                  <option value="5-6 Guests (Barkada)">5–6 Guests (Barkada)</option>
                  <option value="7-10 Guests (Large Group)">7–10 Guests (Large Group)</option>
                  <option value="10+ Guests (Private Area)">10+ Guests (Private Area)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Special Notes / Occasion
                </label>
                <textarea
                  rows={2}
                  value={reserveData.notes}
                  onChange={(e) => setReserveData({ ...reserveData, notes: e.target.value })}
                  placeholder="e.g. Birthday dinner, high chair needed, pre-order Sisig..."
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve Table via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
