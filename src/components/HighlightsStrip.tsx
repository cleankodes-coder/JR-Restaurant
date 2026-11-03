import React from 'react';
import { Soup, Star, Users, Building2, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    {
      icon: Soup,
      title: 'House of Special La Paz Batchoy',
      subtitle: 'Original Authentic Recipe',
      description: 'Slow-simmered rich broth topped with chicharon, egg, meat strips, and fluffy puto cheese.',
      linkText: 'Explore Batchoy',
      href: '#signature',
      accentColor: 'text-amber-400 group-hover:text-amber-300'
    },
    {
      icon: Star,
      title: '4.5★ from 214 Google Reviews',
      subtitle: 'Loved by Al Ain Community',
      description: 'Acclaimed for authentic home-cooked flavor, hearty generous servings, and warm Pinoy hospitality.',
      linkText: 'Read Reviews',
      href: '#reviews',
      accentColor: 'text-amber-400 group-hover:text-amber-300'
    },
    {
      icon: Users,
      title: 'Barkada & Family Sharing Meals',
      subtitle: 'Generous Feasts for 5 to 12+ Pax',
      description: 'Value-packed bundles from AED 99 — seafood boils, sizzling plates, and Filipino comfort staples.',
      linkText: 'View Promos',
      href: '#promos',
      accentColor: 'text-emerald-400 group-hover:text-emerald-300'
    },
    {
      icon: Building2,
      title: '400 sqm Exclusive Events Venue',
      subtitle: 'Central District, Al Ain',
      description: 'Spacious dedicated venue for birthday celebrations, weddings, debuts, seminars, and barkada parties.',
      linkText: 'Enquire Venue',
      href: '#events',
      accentColor: 'text-amber-400 group-hover:text-amber-300'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="group bg-[#1a1a1e] hover:bg-[#222228] p-5 sm:p-6 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                    <Icon className={`w-5 h-5 ${item.accentColor} transition-colors`} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base tracking-tight mb-1 font-display group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-500/90 mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-amber-400 transition-colors">
                <span>{item.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
