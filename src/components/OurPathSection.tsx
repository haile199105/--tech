import React from 'react';
import { 
  Lightbulb, 
  Users, 
  Target, 
  Sprout, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';
import { valuesData, impactStatsData } from '../data/content';
import { Language } from '../types';

interface OurPathSectionProps {
  language: Language;
  onLearnMoreClick: () => void;
}

export const OurPathSection: React.FC<OurPathSectionProps> = ({
  language,
  onLearnMoreClick,
}) => {
  const getValueIcon = (icon: string) => {
    switch (icon) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-teal-400" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getImpactIcon = (icon: string, color: string) => {
    switch (icon) {
      case 'Layers':
        return <Layers className="w-5 h-5" style={{ color }} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" style={{ color }} />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" style={{ color }} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" style={{ color }} />;
      default:
        return <Layers className="w-5 h-5" style={{ color }} />;
    }
  };

  return (
    <section id="our-path" className="relative py-20 bg-[#030712] overflow-hidden border-t border-slate-800/60">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMN 1 (3 Cols): Architectural Multi-Pill Masked Ethiopian Landscape Road */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full max-w-xs aspect-square sm:aspect-[4/5] p-2">
              {/* Outer Shape with stylized top-right pill arches matching Reference Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(0,242,254,0.15)] bg-[#070f24] group">
                <img
                  src="/src/assets/images/about_ethiopia_road_1788830343342.jpg"
                  alt="Ethiopian Mountain Road Infrastructure"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Road Marker Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#060e22]/90 backdrop-blur-md border border-cyan-500/30 text-left">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    Ethiopia's Digital Path
                  </div>
                  <div className="text-white text-xs font-bold mt-0.5">
                    Connecting Communities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2 (4 Cols): Narrative Story: About Us & Our Path, Our Purpose */}
          <div id="about" className="lg:col-span-4 flex flex-col text-left space-y-5">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                {language === 'am' ? 'ስለ እኛ' : 'About Us'}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'am' ? (
                  <>
                    መንገዳችን፣ <span className="text-[#00f2fe]">ዓላማችን</span>
                  </>
                ) : (
                  <>
                    Our Path, <span className="text-[#00f2fe]">Our Purpose</span>
                  </>
                )}
              </h2>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {language === 'am'
                ? 'መንገድ ቴክ የተወለደው ከአንድ ቀላል እምነት ነው — ቴክኖሎጂ እውነተኛ ዕድሎችን መፍጠር ይችላል። እኛ በኢትዮጵያ ያለውን የዲጂታል ልዩነት ለማጥበብ የምንሰራ የህልመኞች፣ የገንቢዎች እና የመፍትሄ አመንጪዎች ቡድን ነን።'
                : 'መንገድ Tech was born from a simple belief — technology can create real opportunities. We are a team of dreamers, builders and problem-solvers working to bridge the digital divide in Ethiopia.'}
            </p>

            <div>
              <button
                type="button"
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#070f24] hover:bg-[#0c1838] border border-cyan-500/40 text-cyan-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md group"
              >
                <span>{language === 'am' ? 'ስለ እኛ የበለጠ ይወቁ' : 'Learn More About Us'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* COLUMN 3 (2.5 Cols): 4 Core Principles matching Reference */}
          <div className="lg:col-span-2.5 flex flex-col space-y-3.5 text-left">
            {valuesData.map((val) => (
              <div key={val.id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#08132e] border border-slate-700/80 flex items-center justify-center shrink-0 shadow-inner">
                  {getValueIcon(val.icon)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {val.title[language]}
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    {val.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* COLUMN 4 (2.5 Cols): Our Impact Glass Card matching Reference */}
          <div className="lg:col-span-2.5 flex justify-center">
            <div className="w-full max-w-xs rounded-2xl bg-[#060c1e]/90 border border-slate-800 p-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-left">
              <h3 className="text-sm font-bold text-white mb-4">
                {language === 'am' ? 'የእኛ ተፅዕኖ' : 'Our Impact'}
              </h3>

              <div className="space-y-3.5">
                {impactStatsData.map((stat) => (
                  <div key={stat.id} className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-inner shrink-0"
                      style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}40` }}
                    >
                      {getImpactIcon(stat.icon, stat.color)}
                    </div>
                    <div>
                      <div 
                        className="text-lg font-black tracking-tight leading-none"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-0.5">
                        {stat.label[language]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurPathSection;
