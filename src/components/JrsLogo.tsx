import React from 'react';

interface JrsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const JrsLogo: React.FC<JrsLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = ''
}) => {
  const dimensions = {
    sm: { circle: 'w-10 h-10', text: 'text-lg', rest: 'text-[7px]' },
    md: { circle: 'w-14 h-14', text: 'text-2xl', rest: 'text-[9px]' },
    lg: { circle: 'w-20 h-20', text: 'text-3xl', rest: 'text-[11px]' },
    xl: { circle: 'w-28 h-28', text: 'text-4xl', rest: 'text-[13px]' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Black Circular Badge with White Script */}
      <div
        className={`${dimensions.circle} rounded-full bg-black border-2 border-amber-500/80 shadow-lg flex flex-col items-center justify-center relative overflow-hidden select-none shrink-0 group transition-transform duration-300 hover:scale-105`}
      >
        {/* Subtle radial sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

        {/* Script "jr's" */}
        <span
          className={`font-script text-white font-bold leading-none tracking-tight pt-1 ${dimensions.text} drop-shadow-sm`}
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          jr&apos;s
        </span>

        {/* RESTAURANT subtitle under the script inside circle */}
        <span
          className={`text-amber-400 font-bold uppercase tracking-[0.2em] leading-tight ${dimensions.rest}`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          RESTAURANT
        </span>
      </div>

      {showSubtitle && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base md:text-lg tracking-tight font-display">
              JR&apos;s Restaurant
            </span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Al Ain
            </span>
          </div>
          <span className="text-xs text-amber-400/90 font-medium">
            House of Special La Paz Batchoy
          </span>
        </div>
      )}
    </div>
  );
};
