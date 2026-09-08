import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  language: Language;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: preselectedService || 'Build',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update service if preselected changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic submit simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#040813] overflow-hidden border-t border-slate-800/80">
      {/* Background radial atmosphere */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office info and direct reach */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{language === 'am' ? 'ያግኙን' : 'Get In Touch'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'am' ? (
                  <>
                    የኢትዮጵያን ዲጂታል መንገድ <span className="text-cyan-400">በጋራ እንገንባ</span>
                  </>
                ) : (
                  <>
                    Let’s Build Ethiopia’s <span className="text-cyan-400">Digital Path Together</span>
                  </>
                )}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {language === 'am'
                  ? 'ከአይቲ መሰረተ ልማት እስከ ብጁ ሶፍትዌር እና የክህሎት ስልጠና፣ ቡድናችን የቴክኖሎጂ ፍላጎትዎትን ለማሳካት ዝግጁ ነው።'
                  : 'From enterprise IT infrastructure to bespoke software and technical training, our team is ready to accelerate your technological roadmap.'}
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081024]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-cyan-400 font-bold">
                    {language === 'am' ? 'ዋና መስሪያ ቤት' : 'Headquarters'}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mt-0.5">
                    Bole Sub-City, Addis Ababa, Ethiopia
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Medhanialem Tech Corridor, Floor 4
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081024]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-blue-400 font-bold">
                    {language === 'am' ? 'ኢሜይል' : 'Direct Email'}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mt-0.5">
                    info@mengedtech.et
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    contact@mengedtech.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081024]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    {language === 'am' ? 'ስልክ ቁጥር' : 'Phone & Telegram'}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mt-0.5">
                    +251 911 234 567 / +251 116 890 123
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    {language === 'am' ? 'ከሰኞ - ቅዳሜ: ከጠዋቱ 2:30 - ምሽቱ 12:00' : 'Mon - Sat: 8:30 AM - 6:00 PM (EAT)'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-conversion interactive contact form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081024]/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl relative">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {language === 'am' ? 'መልዕክትዎ በተሳካ ሁኔታ ደርሶናል!' : 'Message Received Successfully!'}
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    {language === 'am'
                      ? 'የመንገድ ቴክ ቡድን መልዕክትዎን ተመልክቶ በ24 ሰዓታት ውስጥ ምላሽ ይሰጥዎታል።'
                      : 'Thank you for reaching out to መንገድ Tech. Our engineering and solutions team will contact you within 24 hours.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        service: 'Build',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors mt-4"
                  >
                    <span>{language === 'am' ? 'ሌላ መልዕክት ላክ' : 'Send Another Message'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {language === 'am' ? 'የቴክኖሎጂ ፍላጎትዎን ያሳውቁን' : 'Request Consultation or Proposal'}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      {language === 'am'
                        ? 'መረጃዎን ይሙሉ፣ በቅርብ ሰዓታት ውስጥ እንደውላለን።'
                        : 'Fill out your requirements below and our solutions architects will follow up promptly.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {language === 'am' ? 'ሙሉ ስም *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Haileyesus Shibru"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {language === 'am' ? 'የኢሜይል አድራሻ *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {language === 'am' ? 'ስልክ ቁጥር' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 9..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>

                    {/* Service Needed */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {language === 'am' ? 'የሚፈልጉት አገልግሎት' : 'Service Domain'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white text-sm transition-colors"
                      >
                        <option value="Connect">1. Connect (Network & Infrastructure)</option>
                        <option value="Build">2. Build (Software, Web & Mobile Apps)</option>
                        <option value="Academy">3. Academy (Technical & Coding Training)</option>
                        <option value="Labs">4. Labs (Custom Product R&D / Innovation)</option>
                        <option value="General">Other Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {language === 'am' ? 'መልዕክት ወይም የፍላጎትዎ ዝርዝር *' : 'Inquiry & Technical Requirements *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'am'
                          ? 'የድርጅትዎን ወይም የመፍትሄ ፍላጎትዎን እዚህ ይግለጹ...'
                          : 'Describe your organizational requirements, system goals, or inquiry...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{language === 'am' ? 'እየላከ ነው...' : 'Transmitting Request...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{language === 'am' ? 'መልዕክት ላክ' : 'Send Enterprise Inquiry'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
