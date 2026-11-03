import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Sparkles, Check, Flame, ChevronRight } from 'lucide-react';
import { SIGNATURE_DISHES, RESTAURANT_INFO } from '../data/restaurantData.ts';

interface SignatureDishesProps {
  onOpenOrderModal: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenOrderModal }) => {
  const [selectedBatchoyMeat, setSelectedBatchoyMeat] = useState<'chicken' | 'beef'>('beef');

  const heroDish = SIGNATURE_DISHES.find(d => d.isHero);
  const otherDishes = SIGNATURE_DISHES.filter(d => !d.isHero);

  const getWhatsAppDishLink = (dishName: string, price: number | string) => {
    const text = encodeURIComponent(
      `Hello JR's Restaurant, I would like to order: ${dishName} (AED ${price}). Please confirm availability.`
    );
    return `https://wa.me/971551820975?text=${text}`;
  };

  return (
    <section id="signature" className="py-20 md:py-28 bg-[#151518] border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Crafted With Heritage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Signature Dishes
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            The heart of JR&apos;s kitchen. Authentic recipes, generous Pinoy servings, and cooked with certified Saladmaster cookware.
          </p>
        </div>

        {/* HERO DISH: Special La Paz Batchoy Card (The Biggest Card) */}
        {heroDish && (
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-[#1d1d23] to-[#161619] border-2 border-amber-500/50 shadow-2xl overflow-hidden relative group">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Photo Side */}
              <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[460px] overflow-hidden">
                <img
                  src={heroDish.image}
                  alt={heroDish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d23] via-transparent to-black/40 lg:hidden" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-amber-300 text-xs font-extrabold tracking-wider border border-amber-500/40 shadow-lg">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>THE HERO SPECIALTY</span>
                </div>
              </div>

              {/* Information Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                      House of Special La Paz Batchoy
                    </span>
                    <span className="text-3xl font-black text-amber-400 tabular-nums font-display">
                      AED {heroDish.price}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
                    {heroDish.name}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                    {heroDish.description}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
                    {heroDish.details}
                  </p>

                  {/* Meat Selection Toggle */}
                  <div className="mb-6">
                    <label className="text-xs font-semibold text-zinc-400 block mb-2">
                      Choose Your Broth & Meat Style:
                    </label>
                    <div className="flex items-center gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800 w-fit">
                      <button
                        onClick={() => setSelectedBatchoyMeat('beef')}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                          selectedBatchoyMeat === 'beef'
                            ? 'bg-amber-500 text-black shadow-md'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        Special Beef Batchoy
                      </button>
                      <button
                        onClick={() => setSelectedBatchoyMeat('chicken')}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                          selectedBatchoyMeat === 'chicken'
                            ? 'bg-amber-500 text-black shadow-md'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        Special Chicken Batchoy
                      </button>
                    </div>
                  </div>

                  {/* Included Items Checklist */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 mb-8">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Chicken Chicharon</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Steamed Puto Cheese</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Siomai & Shanghai</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Boiled Egg & Broth</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getWhatsAppDishLink(`Special La Paz Batchoy (${selectedBatchoyMeat})`, heroDish.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-700 hover:bg-emerald-600 shadow-lg shadow-emerald-950/40 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp</span>
                  </a>
                  <button
                    onClick={onOpenOrderModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-black bg-amber-400 hover:bg-amber-300 shadow-lg transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order on Delivery App</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid for the other 7 signature dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherDishes.map((dish) => (
            <div
              key={dish.id}
              className="rounded-2xl bg-[#1a1a1f] border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1f] via-transparent to-black/30" />

                  {/* Tag badge */}
                  {dish.tag && (
                    <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30">
                      {dish.tag}
                    </div>
                  )}

                  {/* Price overlay on image */}
                  <div className="absolute bottom-3 right-3 text-right">
                    {dish.originalPrice && (
                      <span className="block text-xs text-zinc-400 line-through tabular-nums">
                        AED {dish.originalPrice}
                      </span>
                    )}
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-zinc-950/90 text-amber-400 font-extrabold text-base tabular-nums border border-amber-500/40 shadow-md">
                      {dish.price ? `AED ${dish.price}` : 'Special'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg tracking-tight font-display mb-1.5 group-hover:text-amber-300 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppDishLink(dish.name, dish.price || 'Special')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-emerald-700 hover:text-white border border-zinc-700 hover:border-emerald-500 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
