import React from 'react';
import { 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  ArrowUp
} from 'lucide-react';
import { MengedLogo } from './MengedLogo';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: language === 'am' ? 'መነሻ' : 'Home' },
    { id: 'about', label: language === 'am' ? 'ስለ እኛ' : 'About' },
    { id: 'services', label: language === 'am' ? 'አገልግሎቶች' : 'Services' },
    { id: 'our-path', label: language === 'am' ? 'መንገዳችን' : 'Our Path' },
    { id: 'contact', label: language === 'am' ? 'ያግኙን' : 'Contact' },
  ];

  return (
    <footer className="relative bg-[#02050c] border-t border-slate-800/80 text-slate-400 text-xs overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Row: Left Brand, Center Nav Links, Right Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Left Column: Brand & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block"
            >
              <MengedLogo size="md" />
            </a>
            <p className="text-slate-400 text-xs mt-0.5">
              {language === 'am'
                ? 'የኢትዮጵያን ዲጂታል መንገድ መገንባት'
                : 'Building Ethiopia’s Digital Path.'}
            </p>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Column: Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mengedtech"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://linkedin.com/company/mengedtech"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://x.com/mengedtech"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://youtube.com/@mengedtech"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://mengedtech.et"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="Website"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright in Center, Addis Ababa, Ethiopia on Right */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div></div>
          <div className="text-center">
            © 2025 መንገድ Tech. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
