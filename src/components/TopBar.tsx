import React from 'react';
import { MapPin, Phone, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0c0c0e] text-zinc-300 text-xs border-b border-zinc-800/80 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Address and Landmark */}
        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-amber-400 transition-colors group"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="truncate">Taj Mahal St., Central District, Al Ain</span>
          <span className="hidden lg:inline text-zinc-500">· Opp. Mediclinic & Choitram</span>
        </a>

        {/* Center / Right: Phone & Hours */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.landlineTel}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium tabular-nums"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{RESTAURANT_INFO.landline}</span>
          </a>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-medium text-emerald-300">{RESTAURANT_INFO.hours}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-amber-400/90 text-[11px] font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Certified Saladmaster User</span>
          </div>
        </div>
      </div>
    </div>
  );
};
