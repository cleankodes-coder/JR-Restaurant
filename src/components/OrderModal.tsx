import React from 'react';
import { X, ExternalLink, Phone, MessageCircle, ShoppingBag, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#17171b] rounded-3xl p-6 sm:p-8 border border-zinc-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[11px] font-bold uppercase mb-2 border border-emerald-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Fast &amp; Fresh Delivery in Al Ain</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Order from JR&apos;s Restaurant
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Choose your preferred delivery or ordering method below:
          </p>
        </div>

        {/* Options Stack */}
        <div className="space-y-3.5 mb-6">
          {/* Talabat */}
          <a
            href={RESTAURANT_INFO.talabatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#FF5A00] hover:bg-[#e65100] text-white transition-all shadow-md group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Order on Talabat UAE</h4>
                <p className="text-[11px] text-white/80">Direct delivery to your doorstep in Al Ain</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Deliveroo */}
          <a
            href={RESTAURANT_INFO.deliverooUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#00CDBC] hover:bg-[#00b3a4] text-zinc-950 transition-all shadow-md group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-black/15 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5 text-zinc-950" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Order on Deliveroo</h4>
                <p className="text-[11px] text-zinc-900/80">Fast pickup &amp; delivery via Deliveroo</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={RESTAURANT_INFO.whatsappWaMe}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/40 text-white transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-emerald-300">WhatsApp Direct Order</h4>
                <p className="text-[11px] text-zinc-400">+971 55 182 0975 · Curbside pickup &amp; catering</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Landline Call */}
          <a
            href={`tel:${RESTAURANT_INFO.landlineTel}`}
            className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/30">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-amber-300">Call Restaurant Landline</h4>
                <p className="text-[11px] text-zinc-400">+971 3 736 0821 · For quick reservations &amp; orders</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-amber-400">Call Now</span>
          </a>
        </div>

        {/* Operating Hours Note */}
        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-center text-xs text-zinc-400">
          Open Daily · Until 12:00 AM Midnight · Town Centre, Al Ain
        </div>
      </div>
    </div>
  );
};
