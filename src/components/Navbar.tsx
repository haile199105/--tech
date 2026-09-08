import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { MengedLogo } from './MengedLogo';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'our-path', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: language === 'am' ? 'መነሻ' : 'Home' },
    { id: 'about', label: language === 'am' ? 'ስለ እኛ' : 'About' },
    { id: 'services', label: language === 'am' ? 'አገልግሎቶች' : 'Services' },
    { id: 'our-path', label: language === 'am' ? 'መንገዳችን' : 'Our Path' },
    { id: 'contact', label: language === 'am' ? 'ያግኙን' : 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040814]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
          : 'bg-[#040814]/60 backdrop-blur-md border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="group flex items-center transition-transform duration-200 active:scale-95"
            id="nav-logo"
          >
            <MengedLogo size="md" isGlowing={isScrolled} />
          </a>

          {/* Desktop Navigation Links matching Reference Design */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  id={`nav-link-${link.id}`}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,242,254,0.8)]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector Pill & Get Started Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher Pill */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#081026] border border-slate-700/80 shadow-inner">
              <button
                type="button"
                id="lang-toggle-am"
                onClick={() => onLanguageChange('am')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  language === 'am'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                አማ
              </button>
              <button
                type="button"
                id="lang-toggle-en"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary Button: Get Started */}
            <button
              type="button"
              id="nav-cta-get-started"
              onClick={() => {
                scrollTo('contact');
                onOpenContact();
              }}
              className="px-5 py-2 text-sm font-bold text-white rounded-lg bg-[#0084ff] hover:bg-[#0070db] shadow-[0_0_20px_rgba(0,132,255,0.4)] hover:shadow-[0_0_28px_rgba(0,132,255,0.6)] transition-all duration-200 active:scale-95"
            >
              <span>{language === 'am' ? 'ጀምር' : 'Get Started'}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'en' ? 'am' : 'en')}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-bold text-cyan-300 flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'አማ' : 'EN'}</span>
            </button>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040814]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 opacity-60" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                scrollTo('contact');
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0084ff] hover:bg-[#0070db] text-white font-bold text-center text-sm shadow-md"
            >
              <span>{language === 'am' ? 'ጀምር' : 'Get Started'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
