import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';
import { JrsLogo } from './JrsLogo.tsx';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Signature Dishes', href: '#signature' },
    { label: 'Menu', href: '#menu' },
    { label: 'Promos & Barkada', href: '#promos' },
    { label: 'Events Venue', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121214]/95 backdrop-blur-md shadow-2xl border-b border-zinc-800/80 py-2.5'
          : 'bg-[#141417]/90 backdrop-blur-sm border-b border-zinc-800/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <JrsLogo size="md" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white font-display group-hover:text-amber-400 transition-colors">
                JR&apos;S RESTAURANT
              </span>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-1.5 py-0.2 rounded hidden sm:inline-block">
                Al Ain
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 tracking-wide">
              House of Special La Paz Batchoy
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:transition-all after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action CTAs (Call Now, WhatsApp Us, Order Now) */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          {/* Call Now */}
          <a
            href={`tel:${RESTAURANT_INFO.landlineTel}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 transition-colors whitespace-nowrap shadow-sm hover:border-amber-500/50"
            title="Call JR's Restaurant Landline"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us */}
          <a
            href={RESTAURANT_INFO.whatsappWaMe}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-100 bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/60 transition-colors whitespace-nowrap shadow-sm"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>WhatsApp Us</span>
          </a>

          {/* Order Now CTA */}
          <button
            onClick={onOpenOrderModal}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-zinc-950" />
            <span>Order Now</span>
          </button>
        </div>

        {/* Mobile controls: Quick Order Button + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenOrderModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141417] border-b border-zinc-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col gap-2.5 pb-4 border-b border-zinc-800/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-200 hover:text-amber-400 hover:bg-zinc-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-4">
            <a
              href={`tel:${RESTAURANT_INFO.landlineTel}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800 border border-zinc-700 text-center"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call +971 3 736 0821</span>
            </a>
            <a
              href={RESTAURANT_INFO.whatsappWaMe}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 text-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="col-span-2 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 text-center shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Delivery (Talabat / Deliveroo)</span>
            </button>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 text-center"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book 400 sqm Events Venue</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
