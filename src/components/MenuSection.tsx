import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, ShoppingBag, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { FULL_MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from '../data/restaurantData.ts';

interface MenuSectionProps {
  onOpenOrderModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getWhatsAppOrderUrl = (item: typeof FULL_MENU_ITEMS[0]) => {
    const text = encodeURIComponent(
      `Hello JR's Restaurant, I'd like to order: ${item.name} (AED ${item.promoPrice || item.price}). Is it available now for dine-in / takeaway / delivery?`
    );
    return `https://wa.me/971551820975?text=${text}`;
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Complete Restaurant Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-3">
            Explore JR&apos;s Full Menu
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Real prices in UAE Dirhams (AED). Prepared fresh to order with love, authentic spices, and Saladmaster cookware.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-zinc-950 shadow-md font-bold'
                    : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, sisig, batchoy..."
              className="w-full pl-9 pr-4 py-2 text-xs text-white bg-zinc-900/90 border border-zinc-700/80 rounded-xl focus:outline-none focus:border-amber-400 transition-colors placeholder:text-zinc-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm mb-3">
              No dishes found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-amber-400 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#17171a] border border-zinc-800 hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-white text-base tracking-tight font-display group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right shrink-0">
                      {item.promoPrice ? (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs text-zinc-500 line-through tabular-nums">
                            AED {item.price}
                          </span>
                          <span className="font-extrabold text-amber-400 text-base tabular-nums">
                            AED {item.promoPrice}
                          </span>
                        </div>
                      ) : (
                        <span className="font-extrabold text-amber-400 text-base tabular-nums">
                          AED {item.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.portion && (
                    <span className="text-[11px] font-semibold text-emerald-400 block mb-1">
                      {item.portion}
                    </span>
                  )}

                  {item.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 mt-auto">
                  <div className="text-[11px] font-medium text-zinc-500 truncate">
                    {item.tag || 'Authentic Filipino'}
                  </div>

                  <a
                    href={getWhatsAppOrderUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
                    title="Order this dish on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order (WhatsApp)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Required Mandatory Note under the menu */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-semibold text-zinc-200 mb-1">
              Prices in AED. Menu also available on Talabat & Deliveroo for delivery.
            </p>
            <p className="text-xs text-zinc-400">
              Dine-in, Takeaway, Curbside Pickup, or No-contact Delivery across Al Ain.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={RESTAURANT_INFO.talabatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF5A00] hover:bg-[#e04f00] transition-colors"
            >
              <span>Talabat</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={RESTAURANT_INFO.deliverooUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#00CDBC] hover:bg-[#00b3a4] transition-colors text-black font-extrabold"
            >
              <span className="text-zinc-950 font-bold">Deliveroo</span>
              <ExternalLink className="w-3 h-3 text-zinc-950" />
            </a>

            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Order</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
