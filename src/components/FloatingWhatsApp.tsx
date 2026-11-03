import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Friendly Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-2xl bg-zinc-900 border border-emerald-500/40 text-xs text-white shadow-2xl animate-in slide-in-from-bottom duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Chat with JR&apos;s for orders &amp; bookings!</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-zinc-400 hover:text-white p-0.5 rounded transition-colors ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={RESTAURANT_INFO.whatsappWaMe}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 group border-2 border-white/20"
        title="Chat on WhatsApp (+971 55 182 0975)"
        aria-label="Chat with JR's Restaurant on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
