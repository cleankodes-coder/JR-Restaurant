import React from 'react';
import { Heart, ShieldCheck, Flame, Globe2, Sparkles, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#121214] relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Copy */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag / Kicker with green brush accent */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-emerald-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                Home Grown Pinoy Business
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-display text-balance">
              Homegrown Pinoy, Made to Feel Like Home
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
              Founded with love and genuine Filipino hospitality right here in Al Ain, UAE,{' '}
              <strong className="text-white font-semibold">JR&apos;s Restaurant</strong> began with a single devoted mission: serving authentic{' '}
              <strong className="text-amber-400 font-semibold">La Paz Batchoy</strong> prepared from its genuine origin recipe.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
              For Filipino families and Overseas Filipino Workers (OFWs) across the Emirates, JR&apos;s is a warm sanctuary where comforting aromas bring back childhood memories. But our kitchen doesn&apos;t stop there — today, we proudly stand as a{' '}
              <span className="text-zinc-200 font-medium">House of Many Nations&apos; Cuisines</span>, serving beloved Filipino, Indian, Arabic, Italian, and Korean dishes under one welcoming roof.
            </p>

            {/* Cuisines Strip */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <Globe2 className="w-4 h-4 text-amber-400" />
                <span>House of Many Nations&apos; Cuisines</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-300 font-medium">
                <span className="text-emerald-400 font-bold">Filipino (Our Heart)</span>
                <span className="text-zinc-600">·</span>
                <span>Rich Indian Curries & Biryani</span>
                <span className="text-zinc-600">·</span>
                <span>Sizzling Arabic Grills</span>
                <span className="text-zinc-600">·</span>
                <span>Italian Pastas</span>
                <span className="text-zinc-600">·</span>
                <span>Korean Flavors</span>
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">True Pinoy Hospitality</h4>
                  <p className="text-xs text-zinc-400">Warm, friendly service where everyone is welcomed like family.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Generous Servings</h4>
                  <p className="text-xs text-zinc-400">Hearty portions made for barkadas and family gatherings with great value.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature + Certified Saladmaster Feature Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Photography Card */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="/src/assets/images/signature_batchoy_bowl_1793705096368.jpg"
                alt="Original La Paz Batchoy at JR's Restaurant Al Ain"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  Signature Specialty
                </span>
                <p className="text-lg font-bold text-white leading-tight font-display">
                  &ldquo;A recipe crafted from its own La Paz origin — broth simmered to golden perfection.&rdquo;
                </p>
              </div>
            </div>

            {/* Certified Saladmaster Cookware Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-[#18181c] border border-amber-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900/40 text-emerald-300 text-[11px] font-bold tracking-wide uppercase mb-2 border border-emerald-500/30">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Healthier Cooking Certified</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-1.5">
                    Certified Saladmaster User Restaurant
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    &ldquo;For healthier meals, preserve natural nutrients and use less oil.&rdquo; We cook using certified high-grade Saladmaster cookware so your favorite Pinoy dishes stay rich in flavor while being lighter, cleaner, and healthier for your entire family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
