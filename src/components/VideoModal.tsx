import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, language }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const chapters = [
    {
      time: '0:00 - 0:45',
      title: language === 'am' ? 'የመነሻ ራዕያችን' : 'Our Founding Vision',
      desc: language === 'am' ? 'በኢትዮጵያ ያለውን የዲጂታል ልዩነት ማጥበብ' : 'Bridging the technological divide in Ethiopia'
    },
    {
      time: '0:45 - 1:30',
      title: language === 'am' ? 'የመሰረተ ልማት ዝርጋታ' : 'Enterprise Connectivity',
      desc: language === 'am' ? 'ከአዲስ አበባ እስከ ክልል ከተሞች አስተማማኝ ኔትወርክ' : 'Building resilient optical networks and datacenters'
    },
    {
      time: '1:30 - 2:40',
      title: language === 'am' ? 'የሶፍትዌር እና የፈጠራ ምርቶች' : 'Software & Labs Innovation',
      desc: language === 'am' ? 'ትምህርትን፣ ትራንስፖርትንና ንግድን ማዘመን' : 'Digitizing education, transport, and local economies'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#080f24] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,242,254,0.2)] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#050b1a]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              መንገድ Tech • Documentary Story
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Simulation */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          {/* Background Cinematic Visual */}
          <img
            src="/src/assets/images/hero_ethiopian_road_1788830261868.jpg"
            alt="Ethiopia Tech Landscape"
            className="w-full h-full object-cover opacity-80 scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>

          {/* Center Play/Pause State */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-20 h-20 rounded-full bg-cyan-500/30 border-2 border-cyan-400 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,242,254,0.6)] hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-white" />
            ) : (
              <Play className="w-8 h-8 fill-white ml-1" />
            )}
          </button>

          {/* Bottom Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-white text-xs z-20">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-cyan-400"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-cyan-400"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-slate-300">01:14 / 03:20</span>
            </div>

            <div className="flex-1 mx-4 h-1 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
              <div className="w-2/5 h-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </div>

            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">
              4K ULTRA HD
            </span>
          </div>
        </div>

        {/* Chapters and Narrative Footer */}
        <div className="p-6 bg-[#070e22] grid grid-cols-1 md:grid-cols-3 gap-3 border-t border-slate-800 text-left">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                activeChapter === idx
                  ? 'bg-cyan-500/10 border-cyan-500/50 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                <span>{ch.time}</span>
                {activeChapter === idx && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
              </div>
              <div className="text-xs font-bold text-white mb-0.5">{ch.title}</div>
              <div className="text-[11px] text-slate-400">{ch.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
