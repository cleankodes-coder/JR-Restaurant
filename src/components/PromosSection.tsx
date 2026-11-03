import React from 'react';
import { Tag, Users, Sparkles, MessageCircle, Clock, HeartHandshake } from 'lucide-react';
import { PROMO_BUNDLES, RESTAURANT_INFO } from '../data/restaurantData.ts';

export const PromosSection: React.FC = () => {
  const getWhatsAppPromoLink = (bundleTitle: string, price: number) => {
    const text = encodeURIComponent(
      `Hello JR's Restaurant, I would like to avail the ${bundleTitle} (AED ${price}). Please let me know how to order!`
    );
    return `https://wa.me/971551820975?text=${text}`;
  };

  return (
    <section id="promos" className="py-20 md:py-28 bg-[#161619] relative border-t border-b border-zinc-800">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Big Value · Group Feasts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-3">
            Promos & Barkada Meals
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Filipinos love eating together! Enjoy generous sharing spreads, duo comfort combos, and special weekend deals made for celebrations.
          </p>
        </div>

        {/* Promo Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMO_BUNDLES.map((bundle) => (
            <div
              key={bundle.id}
              className="rounded-3xl bg-gradient-to-b from-[#1e1e24] to-[#17171a] p-6 border border-zinc-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Strip with Badge and Price */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30">
                    <Tag className="w-3 h-3 text-amber-400" />
                    <span>{bundle.badge || 'Promo Special'}</span>
                  </div>

                  <div className="text-right">
                    {bundle.originalPrice && (
                      <span className="block text-xs text-zinc-500 line-through tabular-nums">
                        AED {bundle.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-black text-amber-400 tabular-nums font-display">
                      AED {bundle.price}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-white text-xl tracking-tight font-display mb-1 group-hover:text-amber-300 transition-colors">
                  {bundle.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-400 mb-3">
                  {bundle.tagline}
                </p>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {bundle.description}
                </p>

                {bundle.highlight && (
                  <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] font-medium text-amber-300/90 flex items-center gap-2 mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{bundle.highlight}</span>
                  </div>
                )}
              </div>

              {/* Order Button */}
              <div className="pt-4 border-t border-zinc-800/80">
                <a
                  href={getWhatsAppPromoLink(bundle.title, bundle.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order Promo on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Barkada Sharing Callout Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-zinc-900/80 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display mb-0.5">
                Planning a Big Gathering or Office Celebration?
              </h4>
              <p className="text-xs text-zinc-400">
                We can customize Boodle Fights, Barkada Feasts, and bulk party trays for any headcount in Al Ain.
              </p>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.whatsappWaMe}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors whitespace-nowrap shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Catering Team</span>
          </a>
        </div>
      </div>
    </section>
  );
};
