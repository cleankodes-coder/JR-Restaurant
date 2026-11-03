/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { HighlightsStrip } from './components/HighlightsStrip.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { SignatureDishes } from './components/SignatureDishes.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { PromosSection } from './components/PromosSection.tsx';
import { VenueSection } from './components/VenueSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { VisitUsSection } from './components/VisitUsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { OrderModal } from './components/OrderModal.tsx';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrderModal = () => setIsOrderModalOpen(true);
  const handleCloseOrderModal = () => setIsOrderModalOpen(false);

  return (
    <div className="min-h-screen bg-[#121214] text-[#EFEFEF] selection:bg-amber-500 selection:text-black flex flex-col">
      {/* 1. Top Bar + Sticky Nav */}
      <TopBar />
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* 3. Trust / Highlights Strip */}
        <HighlightsStrip />

        {/* 4. About / Our Story */}
        <AboutSection />

        {/* 5. Signature Dishes */}
        <SignatureDishes onOpenOrderModal={handleOpenOrderModal} />

        {/* 6. Full Interactive Menu */}
        <MenuSection onOpenOrderModal={handleOpenOrderModal} />

        {/* 7. Promos & Barkada Meals */}
        <PromosSection />

        {/* 8. Events Venue */}
        <VenueSection />

        {/* 9. Gallery */}
        <GallerySection />

        {/* 10. Reviews */}
        <ReviewsSection />

        {/* 11. Visit Us / Contact */}
        <VisitUsSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <OrderModal isOpen={isOrderModalOpen} onClose={handleCloseOrderModal} />
    </div>
  );
}
