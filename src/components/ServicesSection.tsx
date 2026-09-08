import React, { useState } from 'react';
import { 
  Network, 
  Code, 
  GraduationCap, 
  FlaskConical, 
  ArrowRight, 
  CheckCircle2,
  X
} from 'lucide-react';
import { servicesData } from '../data/content';
import { Language, ServiceItem } from '../types';

interface ServicesSectionProps {
  language: Language;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectServiceForContact,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5" style={{ color }} />;
      case 'Code':
        return <Code className="w-5 h-5" style={{ color }} />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" style={{ color }} />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" style={{ color }} />;
      default:
        return <Network className="w-5 h-5" style={{ color }} />;
    }
  };

  return (
    <section id="services" className="relative py-20 bg-[#040814] overflow-hidden border-t border-slate-800/60">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout matching Reference Image: Left Column with Title, Right with 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
          
          {/* LEFT SIDE (3 Columns on desktop): Our Services / What We Do / View All Services */}
          <div className="lg:col-span-3 flex flex-col justify-between text-left space-y-6 py-2">
            <div className="space-y-4">
              {/* Curved Blue Arc Accent + Label */}
              <div className="space-y-1">
                <div className="w-8 h-1 bg-cyan-400 rounded-full"></div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                  {language === 'am' ? 'አገልግሎቶቻችን' : 'Our Services'}
                </div>
              </div>

              {/* Heading: What We Do */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {language === 'am' ? 'ምን እንሰራለን?' : 'What We Do'}
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'am'
                  ? 'ለዛሬ ተግዳሮቶች እና ለነገ ዕድሎች የተነደፉ ሁሉን-አቀፍ የቴክኖሎጂ መፍትሄዎችን እናቀርባለን።'
                  : 'We offer comprehensive tech solutions designed for today’s challenges and tomorrow’s opportunities.'}
              </p>
            </div>

            {/* View All Services Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#070f24] hover:bg-[#0b1838] border border-cyan-500/40 text-cyan-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md group"
              >
                <span>{language === 'am' ? 'ከባለሙያዎቻችን ጋር ይወያዩ' : 'Request Consultation'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (9 Columns on desktop): 4 Vertical Cards Side-by-Side */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {servicesData.map((service, index) => {
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => setActiveModalService(service)}
                  className={`group relative rounded-2xl bg-[#060d20]/90 hover:bg-[#08122c] border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:-translate-y-1.5 ${service.borderColor}`}
                >
                  {/* Image Top Half */}
                  <div className="relative h-44 w-full overflow-hidden bg-black">
                    <img
                      src={service.image}
                      alt={service.title[language]}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060d20] via-transparent to-transparent"></div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div>
                      {/* Icon Circle */}
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-inner"
                        style={{ 
                          backgroundColor: `${service.color}15`,
                          border: `1.5px solid ${service.color}`
                        }}
                      >
                        {getServiceIcon(service.iconName, service.color)}
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {service.title[language]}
                      </h3>

                      {/* Card Description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                        {service.description[language]}
                      </p>
                    </div>

                    {/* Bottom Circular Arrow Button */}
                    <div className="flex justify-end pt-1">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110 shadow-md"
                        style={{ 
                          backgroundColor: service.color,
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#070f24] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Image Header */}
            <div className="relative h-52 w-full">
              <img
                src={activeModalService.image}
                alt={activeModalService.title[language]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070f24] via-[#070f24]/60 to-transparent"></div>

              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  {activeModalService.subtitle[language]}
                </div>
                <h3 className="text-3xl font-extrabold text-white">
                  {activeModalService.title[language]}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-left">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {activeModalService.description[language]}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
                  {language === 'am' ? 'ዋና ዋና አገልግሎቶች' : 'Key Capabilities & Deliverables'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features[language].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-400 hover:text-white"
                >
                  {language === 'am' ? 'ተመለስ' : 'Close'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const svcName = activeModalService.title.en;
                    setActiveModalService(null);
                    onSelectServiceForContact(svcName);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0084ff] hover:bg-[#0070db] text-white font-bold text-sm shadow-lg transition-all"
                >
                  <span>{language === 'am' ? 'ይህንን አገልግሎት እዘዝ' : 'Inquire About This Service'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
