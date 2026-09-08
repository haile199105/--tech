/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { OurPathSection } from './components/OurPathSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Build');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Top Glass Navigation Bar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero with Ethiopian Mountain Sunrise & Road */}
        <Hero
          language={language}
          onExploreServices={() => scrollToSection('services')}
          onWatchVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Services Section: What We Do (Connect, Build, Academy, Labs) */}
        <ServicesSection
          language={language}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* About & Our Path: Our Path, Our Purpose + Our Impact Panel */}
        <OurPathSection
          language={language}
          onLearnMoreClick={() => scrollToSection('contact')}
        />

        {/* Interactive Contact & Consultation Form */}
        <ContactSection
          language={language}
          preselectedService={preselectedService}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer language={language} />

      {/* Cinematic Video Showcase Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        language={language}
      />
    </div>
  );
}
