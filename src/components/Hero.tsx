import React from 'react';
import { ArrowRight, Play, ChevronDown, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { MengedLogo } from './MengedLogo';

interface HeroProps {
  language: Language;
  onExploreServices: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreServices,
  onWatchVideo,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background: Ethiopian Mountain Road & Golden Sunrise Landscape matching Reference */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/src/assets/images/hero_ethiopian_road_1788830261868.jpg"
          alt="Ethiopian Mountain Highway Sunrise"
          className="w-full h-full object-cover object-center scale-100"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Overlays matching the Reference Image: Dark Blue on Left to Twilight Navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#040c20]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-transparent to-[#040814]/40"></div>

        {/* Subtle radial ambient atmosphere */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Brand Positioning & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            {/* Small Label in Cyan */}
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-400 font-mono">
              {language === 'am'
                ? 'ቴክኖሎጂ ለበለጠች ኢትዮጵያ'
                : 'TECHNOLOGY FOR A BRIGHTER ETHIOPIA'}
            </div>

            {/* Main Heading: መንገድ Tech */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-['Noto_Sans_Ethiopic'] flex items-baseline gap-3">
                <span>መንገድ</span>
                <span className="text-[#00f2fe] font-['Plus_Jakarta_Sans']">
                  Tech
                </span>
              </h1>

              {/* Second Heading: Building Ethiopia’s Digital Path. */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
                {language === 'am'
                  ? 'የኢትዮጵያን ዲጂታል መንገድ መገንባት'
                  : 'Building Ethiopia’s Digital Path.'}
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              {language === 'am'
                ? 'በዲጂታል ዘመን ግለሰቦች፣ ንግዶች እና ማህበረሰቦች እንዲያድጉ ለማገዝ ዘመናዊ የቴክኖሎጂ መፍትሄዎችን፣ ስልጠናዎችን እና አዳዲስ ዲጂታል ምርቶችን እናቀርባለን።'
                : 'We provide modern technology solutions, training and innovative digital products to help individuals, businesses and communities grow in the digital era.'}
            </p>

            {/* Buttons: Explore Our Services → and Watch Video */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary Button */}
              <button
                type="button"
                id="hero-explore-btn"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm sm:text-base font-bold text-white bg-[#0084ff] hover:bg-[#0070db] shadow-[0_0_25px_rgba(0,132,255,0.45)] hover:shadow-[0_0_35px_rgba(0,132,255,0.65)] transition-all duration-200 active:scale-95"
              >
                <span>{language === 'am' ? 'አገልግሎቶቻችንን ይመልከቱ' : 'Explore Our Services'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                id="hero-watch-video-btn"
                onClick={onWatchVideo}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-[#0a142c]/70 hover:bg-[#0f1d40]/90 border border-slate-700/80 hover:border-cyan-400/60 backdrop-blur-md transition-all duration-200"
              >
                <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>{language === 'am' ? 'ቪዲዮ ይመልከቱ' : 'Watch Video'}</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Large መንገድ Tech Emblem Seamlessly Integrated onto Landscape */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md flex flex-col items-center justify-center py-4">
              {/* Glowing Aura directly behind emblem */}
              <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* The Emblem Centerpiece */}
              <div className="relative z-10 transition-transform duration-500 hover:scale-105">
                <MengedLogo variant="hero-stacked" size="hero" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator on the right matching Reference Image */}
      <div className="absolute bottom-6 right-8 lg:right-16 z-20 hidden sm:flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group">
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Mouse Icon */}
          <div className="w-5 h-8 rounded-full border border-slate-400 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 group-hover:text-cyan-300 mt-1">
            Scroll
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 group-hover:text-cyan-300 flex items-center">
            Down
            <ChevronDown className="w-3 h-3 ml-0.5 animate-pulse" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
