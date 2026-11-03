import React from 'react';
import { Star, UtensilsCrossed, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Photography with Rich Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_filipino_feast_1793705095269.jpg"
          alt="Lavish Filipino feast at JR's Restaurant Al Ain featuring La Paz Batchoy and sizzling sisig"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered gradient scrim for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/85 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,18,20,0.7)_100%)]" />
      </div>

      {/* Decorative Warm Pinoy Accent elements */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center flex flex-col items-center">
        {/* Rating Badge */}
        <a
          href={RESTAURANT_INFO.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/40 text-xs text-zinc-200 mb-6 shadow-lg backdrop-blur-md hover:border-amber-400 hover:text-white transition-all group"
        >
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 fill-amber-400 text-amber-400 ${i === 4 ? 'opacity-80' : ''}`}
              />
            ))}
          </div>
          <span className="font-bold text-amber-300 tabular-nums">★ 4.5 Rated</span>
          <span className="text-zinc-500">·</span>
          <span className="text-zinc-300 font-medium">214 Google Reviews</span>
          <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-amber-400 transition-colors" />
        </a>

        {/* Brand Tagline Banner with Leaf Green Accent */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Home Grown Pinoy Business · Al Ain, UAE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-display max-w-4xl text-balance drop-shadow-md">
          A Pinch of Filipino Flavor in the Heart of Al Ain
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          <strong className="text-amber-300 font-semibold">Home Grown Pinoy Business</strong> — Home of the Special La Paz Batchoy, sizzling Filipino favourites, barkada sharing meals, and flavours from many nations.
        </p>

        {/* Call to Actions (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12">
          {/* View Menu */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-zinc-950" />
            <span>View Our Menu</span>
          </a>

          {/* Order on Talabat */}
          <a
            href={RESTAURANT_INFO.talabatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#FF5A00] hover:bg-[#e04f00] shadow-xl shadow-orange-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Order on Talabat</span>
          </a>

          {/* Book Events Venue */}
          <a
            href="#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 transition-all backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book Events Venue</span>
          </a>
        </div>

        {/* Small Trust Row */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span>
            <span>Dine-In</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span>
            <span>Takeaway</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span>
            <span>Delivery</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            <span className="text-zinc-300 font-semibold">400 sqm Events Venue</span>
          </div>
        </div>
      </div>
    </section>
  );
};
