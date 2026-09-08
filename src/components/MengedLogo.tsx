import React, { useId } from 'react';

export interface MengedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'custom';
  variant?: 'inline' | 'stacked' | 'hero-stacked' | 'emblem-only' | 'horizontal';
  className?: string;
  isGlowing?: boolean;
  theme?: 'dark' | 'light';
  showTagline?: boolean;
  customSize?: number;
}

/**
 * Enterprise Brand Mark for መንገድ Tech
 * Concept:
 * 1. Road / Pathway (መንገድ): Sweeping perspective digital highway leading toward the horizon
 * 2. Ethiopian Highlands: Two chiseled architectural mountain peaks framing the central pass
 * 3. Rising Sun: A warm golden-amber sunrise illuminating the pass, symbolizing Ethiopia's digital future
 * 4. Technology & Connectivity: Crisp optical rails, laser-straight perspective centerline, precision geometry
 */
export const MengedSymbol: React.FC<{
  size?: number;
  className?: string;
  isGlowing?: boolean;
  theme?: 'dark' | 'light';
}> = ({ size = 64, className = '', isGlowing = false, theme = 'dark' }) => {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const isLight = theme === 'light';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible select-none transition-all duration-300 ${
        isGlowing ? 'drop-shadow-[0_0_28px_rgba(0,242,254,0.5)]' : 'drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
      } ${className}`}
      aria-label="መንገድ Tech Brand Emblem"
      role="img"
    >
      <defs>
        {/* Token Background Radial */}
        <radialGradient id={`emblemBg_${uid}`} cx="50%" cy="35%" r="65%">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F0F7FF" />
              <stop offset="100%" stopColor="#DCEBFA" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#0B1736" />
              <stop offset="55%" stopColor="#050C20" />
              <stop offset="100%" stopColor="#020614" />
            </>
          )}
        </radialGradient>

        {/* Outer Precision Rim Gradient */}
        <linearGradient id={`outerRim_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="50%" stopColor="#0084FF" />
          <stop offset="100%" stopColor="#0245A3" />
        </linearGradient>

        {/* Inner Subtle Ring */}
        <linearGradient id={`innerRing_${uid}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" stopOpacity={isLight ? '0.6' : '0.4'} />
          <stop offset="100%" stopColor="#0084FF" stopOpacity="0.05" />
        </linearGradient>

        {/* Rising Sun Golden Corona Gradient */}
        <radialGradient id={`sunCore_${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF0" />
          <stop offset="30%" stopColor="#FEE440" />
          <stop offset="70%" stopColor="#FF9E00" />
          <stop offset="100%" stopColor="#E85D04" />
        </radialGradient>

        {/* Sun Ambient Glow */}
        <radialGradient id={`sunHalo_${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB703" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#FB8500" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
        </radialGradient>

        {/* Left Mountain: Shadow Facet */}
        <linearGradient id={`mtLeftDark_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#0D224A" />
              <stop offset="100%" stopColor="#051026" />
            </>
          )}
        </linearGradient>

        {/* Left Mountain: Light Facet */}
        <linearGradient id={`mtLeftLight_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0084FF" />
          <stop offset="100%" stopColor="#0256B8" />
        </linearGradient>

        {/* Right Mountain: Light Facet */}
        <linearGradient id={`mtRightLight_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#0084FF" />
        </linearGradient>

        {/* Right Mountain: Shadow Facet */}
        <linearGradient id={`mtRightDark_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#0F172A" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#0B1D40" />
              <stop offset="100%" stopColor="#030A1A" />
            </>
          )}
        </linearGradient>

        {/* Road Bed (Obsidian asphalt) */}
        <linearGradient id={`roadSurface_${uid}`} x1="50%" y1="100%" x2="50%" y2="0%">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#030814" />
              <stop offset="60%" stopColor="#06122C" />
              <stop offset="100%" stopColor="#0B2352" />
            </>
          )}
        </linearGradient>

        {/* Road Optical Rails */}
        <linearGradient id={`railGlow_${uid}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0070E0" />
          <stop offset="50%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        {/* Horizon Convergence Spark */}
        <radialGradient id={`horizonGlow_${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#00F2FE" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0084FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. EMBLEM ENCLOSURE: Precision Modern Octagonal Shield / Circle Token */}
      <circle
        cx="80"
        cy="80"
        r="75"
        fill={`url(#emblemBg_${uid})`}
        stroke={`url(#outerRim_${uid})`}
        strokeWidth="2.5"
      />

      {/* Inner Precision Technical Accent Ring */}
      <circle
        cx="80"
        cy="80"
        r="70.5"
        stroke={`url(#innerRing_${uid})`}
        strokeWidth="1"
        strokeDasharray="6 3"
      />

      {/* 2. RISING SUN: Warm golden dawn at horizon (Center X=80, Y=70) */}
      <g id="sunrise-group">
        {/* Ambient Warm Halo */}
        <circle cx="80" cy="68" r="32" fill={`url(#sunHalo_${uid})`} />

        {/* Geometric Sun Corona Rays */}
        <g stroke="#FBBF24" strokeLinecap="round" strokeWidth="2" opacity="0.85">
          <line x1="80" y1="38" x2="80" y2="24" strokeWidth="2.8" />
          <line x1="96" y1="42" x2="108" y2="30" strokeWidth="2.4" />
          <line x1="64" y1="42" x2="52" y2="30" strokeWidth="2.4" />
          <line x1="108" y1="54" x2="122" y2="44" strokeWidth="2.0" stroke="#F59E0B" />
          <line x1="52" y1="54" x2="38" y2="44" strokeWidth="2.0" stroke="#F59E0B" />
          <line x1="113" y1="69" x2="128" y2="64" strokeWidth="1.8" stroke="#F59E0B" />
          <line x1="47" y1="69" x2="32" y2="64" strokeWidth="1.8" stroke="#F59E0B" />
        </g>

        {/* Radiant Solar Disk */}
        <circle
          cx="80"
          cy="68"
          r="19"
          fill={`url(#sunCore_${uid})`}
          stroke="#FFFBEB"
          strokeWidth="1.5"
        />
      </g>

      {/* 3. ETHIOPIAN HIGHLAND MOUNTAINS (Architectural Low-Poly Geometry) */}
      <g id="mountain-peaks">
        {/* Left Peak (Summit at x=44, y=50) */}
        {/* Outer Shadow Slope */}
        <polygon
          points="16,104 44,50 56,104"
          fill={`url(#mtLeftDark_${uid})`}
        />
        {/* Inner Light Ridge Slope descending to central pass */}
        <polygon
          points="44,50 80,78 56,104"
          fill={`url(#mtLeftLight_${uid})`}
          stroke="#0084FF"
          strokeWidth="0.5"
        />

        {/* Right Peak (Summit at x=116, y=50) */}
        {/* Inner Light Ridge Slope descending from pass */}
        <polygon
          points="80,78 116,50 104,104"
          fill={`url(#mtRightLight_${uid})`}
          stroke="#00F2FE"
          strokeWidth="0.5"
        />
        {/* Outer Shadow Slope */}
        <polygon
          points="116,50 144,104 104,104"
          fill={`url(#mtRightDark_${uid})`}
        />

        {/* Clean Mountain Peak Summit Ridge Highlight */}
        <polyline
          points="16,104 44,50 80,78 116,50 144,104"
          stroke="#00F2FE"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
      </g>

      {/* 4. THE HERO ROAD / PATHWAY (መንገድ) */}
      <g id="the-path">
        {/* Road Surface Sweeping Forward in Perspective */}
        <path
          d="M 44 153 C 48 126, 64 99, 77 78 L 83 78 C 96 99, 112 126, 116 153 Z"
          fill={`url(#roadSurface_${uid})`}
        />

        {/* Left Electric Light Rail */}
        <path
          d="M 44 153 C 48 126, 64 99, 77 78"
          stroke={`url(#railGlow_${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Electric Light Rail */}
        <path
          d="M 116 153 C 112 126, 96 99, 83 78"
          stroke={`url(#railGlow_${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Laser-Straight Centerline Perspective Beams */}
        {/* Foreground dynamic beam */}
        <line
          x1="80"
          y1="149"
          x2="80"
          y2="128"
          stroke="#00F2FE"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Midground beam */}
        <line
          x1="80"
          y1="118"
          x2="80"
          y2="102"
          stroke="#00F2FE"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Near horizon beam */}
        <line
          x1="80"
          y1="95"
          x2="80"
          y2="84"
          stroke="#38BDF8"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Vanishing point convergence */}
        <line
          x1="80"
          y1="80"
          x2="80"
          y2="76"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* 5. HORIZON CONVERGENCE NEXUS (Destination Node) */}
        <circle cx="80" cy="77" r="8" fill={`url(#horizonGlow_${uid})`} />
        <circle cx="80" cy="77" r="2.8" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export const MengedLogo: React.FC<MengedLogoProps> = ({
  size = 'md',
  variant = 'inline',
  className = '',
  isGlowing = false,
  theme = 'dark',
  showTagline,
  customSize,
}) => {
  const isLight = theme === 'light';

  // Dimension scaling
  const getSymbolSize = () => {
    if (customSize) return customSize;
    switch (size) {
      case 'sm':
        return 36;
      case 'lg':
        return 52;
      case 'xl':
        return 80;
      case 'hero':
        return 180;
      case 'md':
      default:
        return 42;
    }
  };

  const symbolSize = getSymbolSize();

  // 1. HERO STACKED / STACKED VARIANT
  // [ROAD + MOUNTAIN + SUN SYMBOL]
  // ↓
  // መንገድ TECH
  // BUILDING ETHIOPIA'S DIGITAL PATH
  if (variant === 'hero-stacked' || variant === 'stacked') {
    const isHero = size === 'hero';

    return (
      <div
        className={`flex flex-col items-center justify-center text-center select-none group ${className}`}
      >
        {/* Symbol with ambient depth aura */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-cyan-500/25 rounded-full blur-3xl scale-125 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

          <MengedSymbol
            size={symbolSize}
            isGlowing={true}
            theme={theme}
            className="relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Typography lockup: መንገድ Tech */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-baseline justify-center gap-3.5 leading-none">
            {/* መንገድ (Dominant Brand Name) */}
            <span
              className={`font-black tracking-tight font-['Noto_Sans_Ethiopic'] ${
                isHero
                  ? 'text-5xl sm:text-6xl lg:text-7xl'
                  : 'text-3xl sm:text-4xl'
              } ${isLight ? 'text-[#06122c]' : 'text-white'} drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]`}
            >
              መንገድ
            </span>

            {/* Tech (Secondary Brand Word) */}
            <span
              className={`font-extrabold uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans'] ${
                isHero
                  ? 'text-2xl sm:text-3xl lg:text-4xl'
                  : 'text-lg sm:text-xl'
              } text-[#00f2fe] drop-shadow-[0_0_20px_rgba(0,242,254,0.6)]`}
            >
              Tech
            </span>
          </div>

          {/* Slogan / Tagline: BUILDING ETHIOPIA'S DIGITAL PATH */}
          {showTagline !== false && (
            <div className="pt-2">
              <div
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border ${
                  isLight
                    ? 'border-blue-200 bg-blue-50/90 text-blue-950'
                    : 'border-cyan-500/30 bg-[#061228]/85 text-slate-200'
                } backdrop-blur-md shadow-sm`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                <span
                  className={`font-['Plus_Jakarta_Sans'] font-bold uppercase ${
                    isHero
                      ? 'text-[11px] sm:text-xs tracking-[0.25em]'
                      : 'text-[9px] sm:text-[10px] tracking-[0.2em]'
                  }`}
                >
                  BUILDING ETHIOPIA&apos;S DIGITAL PATH
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. EMBLEM-ONLY VARIANT
  if (variant === 'emblem-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MengedSymbol
          size={symbolSize}
          isGlowing={isGlowing}
          theme={theme}
        />
      </div>
    );
  }

  // 3. PRIMARY HORIZONTAL / INLINE VARIANT (For Header, Mobile Navigation, Footer)
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div
      className={`inline-flex items-center gap-3 select-none text-left group ${className}`}
    >
      {/* Symbol */}
      <MengedSymbol
        size={symbolSize}
        isGlowing={isGlowing}
        theme={theme}
        className="transition-transform duration-300 group-hover:scale-105"
      />

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          {/* መንገድ (Dominant Brand Name) */}
          <span
            className={`font-black tracking-tight font-['Noto_Sans_Ethiopic'] ${
              isLarge
                ? 'text-2xl sm:text-3xl'
                : isSmall
                ? 'text-lg'
                : 'text-xl sm:text-2xl'
            } ${isLight ? 'text-[#06122c]' : 'text-white'}`}
          >
            መንገድ
          </span>

          {/* Tech */}
          <span
            className={`font-black uppercase font-['Plus_Jakarta_Sans'] ${
              isLarge
                ? 'text-sm sm:text-base tracking-[0.2em]'
                : isSmall
                ? 'text-[11px] tracking-[0.18em]'
                : 'text-xs sm:text-sm tracking-[0.2em]'
            } text-[#00f2fe]`}
          >
            Tech
          </span>
        </div>

        {/* Optional Tagline on horizontal logo */}
        {showTagline && (
          <span
            className={`font-['Plus_Jakarta_Sans'] uppercase font-bold mt-1 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            } ${
              isLarge
                ? 'text-[9px] tracking-[0.22em]'
                : 'text-[7.5px] sm:text-[8px] tracking-[0.18em]'
            }`}
          >
            BUILDING ETHIOPIA&apos;S DIGITAL PATH
          </span>
        )}
      </div>
    </div>
  );
};

export default MengedLogo;
