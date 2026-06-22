import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Closing: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-surface-container relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-lg mx-auto relative z-10 w-full flex flex-col items-center">
        
        {/* Photo (Arch Shape) */}
        <AnimatedSection delay={0.2} className="w-[220px] md:w-[280px] aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl mb-10 border-8 border-surface relative">
          <img 
            src="/assets/images/OG6.JPG" 
            alt="Intan and Aldo" 
            className="w-full h-full object-cover filter contrast-[1.05]" 
          />
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={0.4} className="font-cormorant italic text-[18px] md:text-[22px] leading-relaxed text-deep-burgundy/90 max-w-xs mx-auto mb-10 px-4">
          <p>
            Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
          </p>
        </AnimatedSection>

        {/* Names */}
        <AnimatedSection delay={0.6}>
          <h2 className="font-cormorant italic text-5xl md:text-6xl text-deep-burgundy mb-2 drop-shadow-sm">
            Intan &amp; Aldo
          </h2>
          <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-deep-burgundy/60 uppercase mt-4">
            Beserta Keluarga Besar
          </p>
        </AnimatedSection>

      </div>
      
      {/* Decorative Ornaments */}
      <img src="/assets/images/9.png" alt="Flower accent top right" className="absolute top-10 -right-4 w-32 md:w-48 opacity-60 mix-blend-multiply rotate-[15deg] pointer-events-none" onError={(e) => e.currentTarget.style.display = 'none'} />
      <img src="/assets/images/12.png" alt="Flower accent bottom left" className="absolute bottom-10 left-0 w-24 md:w-32 opacity-60 mix-blend-multiply -rotate-[30deg] pointer-events-none" onError={(e) => e.currentTarget.style.display = 'none'} />
    </section>
  );
};
