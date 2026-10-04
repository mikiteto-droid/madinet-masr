/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { MasterPlanSection } from './components/MasterPlanSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { DeveloperSection } from './components/DeveloperSection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#110508] text-stone-100 flex flex-col font-sans selection:bg-[#c5a059] selection:text-white" dir="rtl">
      {/* Top Fixed Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Étaje Section */}
        <AboutSection />

        {/* Strategic Location Section */}
        <LocationSection />

        {/* Master Plan & Green Spine */}
        <MasterPlanSection />

        {/* Lifestyle & Amenities */}
        <AmenitiesSection />

        {/* Renders & Architecture Gallery */}
        <GallerySection />

        {/* About Developer (Madinet Masr) */}
        <DeveloperSection />

        {/* Contact & Inquiry Form */}
        <ContactFormSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Floating Action Buttons (Sticky call / WhatsApp / to-top) */}
      <FloatingActions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
