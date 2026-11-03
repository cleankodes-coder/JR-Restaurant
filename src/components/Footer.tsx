import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Heart } from 'lucide-react';
import { JrsLogo } from './JrsLogo.tsx';
import { RESTAURANT_INFO, MENU_CATEGORIES } from '../data/restaurantData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0d] text-zinc-400 text-xs border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <JrsLogo size="lg" />
              <div>
                <h3 className="text-white font-bold text-lg font-display tracking-tight">
                  JR&apos;s RESTAURANT
                </h3>
                <span className="text-[11px] text-amber-400 font-semibold block">
                  House of Special La Paz Batchoy
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">
                  Home Grown Pinoy Business · Al Ain
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed mb-6 max-w-sm">
              Proudly serving authentic Filipino comfort food, the signature Special La Paz Batchoy, sizzling plates, and multi-nation specialties in Al Ain, UAE. Certified Saladmaster user restaurant.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                Follow JR&apos;s on Social Media:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {/* Facebook */}
                <a
                  href={RESTAURANT_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold text-[#1877F2]">f</span>
                  <span>Facebook (1K Followers)</span>
                </a>

                {/* Instagram */}
                <a
                  href={RESTAURANT_INFO.socials.instagram[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold text-pink-500">IG</span>
                  <span>@jrsrestaurantofficial</span>
                </a>

                {/* TikTok */}
                <a
                  href={RESTAURANT_INFO.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold text-cyan-400">TT</span>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white font-display mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Our Story</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-amber-400 transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Complete Menu</a>
              </li>
              <li>
                <a href="#promos" className="hover:text-amber-400 transition-colors">Barkada Meals &amp; Promos</a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-400 transition-colors">400 sqm Events Venue</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Google Reviews (4.5★)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Visit Us &amp; Directions</a>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white font-display mb-4">
              Menu Specialties
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>• Special La Paz Batchoy (AED 45)</li>
              <li>• Sizzling Beef &amp; Chicken Sisig</li>
              <li>• Hearty Bulalo Beef Shank (AED 59)</li>
              <li>• Traditional Beef Kare-Kare (AED 43)</li>
              <li>• Mixed Seafood Platter (Promo AED 149)</li>
              <li>• Street Food BBQ &amp; Grilled Isaw</li>
              <li>• Breakfast Silog Meals (from AED 28)</li>
              <li>• Refreshing Mojitos &amp; Milk Teas</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white font-display mb-4">
              Contact &amp; Location
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Taj Mahal St., Central District – Hai Al Salama, Al Ain, UAE
                  <br />
                  <span className="text-[11px] text-zinc-500">Opp. Mediclinic &amp; Choitram</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">{RESTAURANT_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.landlineTel}`} className="hover:text-amber-300">
                  {RESTAURANT_INFO.landline}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={RESTAURANT_INFO.whatsappWaMe} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                  {RESTAURANT_INFO.whatsapp}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={RESTAURANT_INFO.talabatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#FF5A00] text-white font-bold text-[10px]"
                >
                  Talabat
                </a>
                <a
                  href={RESTAURANT_INFO.deliverooUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#00CDBC] text-zinc-950 font-bold text-[10px]"
                >
                  Deliveroo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} JR&apos;s Restaurant, Al Ain — Home Grown Pinoy Business. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Website preview by</span>
            <strong className="text-zinc-300 font-semibold tracking-wide">Clean Kode</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
