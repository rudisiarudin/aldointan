import React, { useEffect, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface CoverProps {
  onOpen: () => void;
}

export const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nama = params.get('nama');
    if (nama) {
      setGuestName(nama);
    }
  }, []);

  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent('playMusic'));
    setIsAnimatingOut(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isAnimatingOut ? '-translate-y-full' : 'translate-y-0'}`}>
      
      {/* Delicate Outer Frame */}
      <div className="absolute inset-3 md:inset-5 border-[1px] border-deep-burgundy/15 rounded-2xl pointer-events-none z-10"></div>
      
      {/* Corner Floral Accents */}
      <img src="/assets/images/4.png" className="absolute -top-16 -left-16 w-72 opacity-20 mix-blend-multiply pointer-events-none z-0" alt=""/>
      <img src="/assets/images/4.png" className="absolute -bottom-16 -right-16 w-72 opacity-20 mix-blend-multiply rotate-180 pointer-events-none z-0" alt=""/>

      <div className="relative z-20 flex flex-col items-center justify-between text-center px-6 py-10 max-w-lg w-full h-[100dvh] overflow-hidden">

        {/* Title, Names, and Date Section */}
        {/* Title, Names, and Date Section */}
        <AnimatedSection delay={0.2} className="flex flex-col items-center mt-2 mb-4 w-full">
          <h1 className="font-cormorant text-[14px] md:text-[16px] text-deep-burgundy/80 uppercase tracking-[0.4em] mb-3">
            THE WEDDING OF
          </h1>
          <h2 className="font-cormorant italic text-5xl md:text-6xl text-deep-burgundy drop-shadow-sm mb-3">Intan &amp; Aldo</h2>
          <p className="font-label-caps text-[10px] tracking-[0.3em] text-deep-burgundy/60 uppercase mt-1">04 Juli 2026</p>
        </AnimatedSection>
        
        {/* Tilted Polaroid Frame */}
        {/* Tilted Polaroid Frame */}
        <AnimatedSection delay={0.4} className="relative w-full max-w-[200px] aspect-[4/5] md:aspect-square mx-auto mb-6">
          {/* Decorative Back Frame */}
          <div className="absolute inset-0 bg-white shadow-lg rotate-3 rounded-sm border border-deep-burgundy/5"></div>
          {/* Main Image Container */}
          <div className="absolute inset-0 bg-white p-2 shadow-xl -rotate-2 rounded-sm border border-deep-burgundy/5 flex flex-col">
            <div className="w-full h-full relative overflow-hidden border border-deep-burgundy/10">
              <img 
                alt="Intan & Aldo Cover Portrait" 
                className="w-full h-full object-cover object-top filter contrast-[1.1] scale-105" 
                src="/assets/images/aldo-intan-kecil-include.png" 
              />
            </div>
            {/* Polaroid Bottom Lip */}
            <div className="h-6 w-full bg-white shrink-0"></div>
          </div>
        </AnimatedSection>

        {/* Guest Name Section */}
        {/* Guest Name Section */}
        <AnimatedSection delay={0.6} className="flex flex-col items-center mb-6 w-full px-4">
          <p className="font-cormorant text-[18px] text-deep-burgundy/80 mb-1 font-semibold">Dear,</p>
          <p className="font-cormorant text-3xl md:text-4xl text-deep-burgundy drop-shadow-sm text-center mb-3 font-bold">{guestName}</p>
          <div className="w-64 h-[1px] bg-deep-burgundy/20 mb-3"></div>
          <p className="font-cormorant text-[14px] md:text-[16px] text-deep-burgundy/70 max-w-[280px] text-center italic leading-relaxed">
            We apologize if there is any misspelling of name or title.
          </p>
        </AnimatedSection>

        {/* Premium Button */}
        {/* Premium Button */}
        <AnimatedSection delay={0.8} className="flex flex-col items-center mb-4">
          <button 
            className="group relative px-8 py-3 md:py-3.5 bg-[#8b8076] text-white font-label-caps tracking-[0.1em] text-[12px] md:text-[13px] uppercase rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#7a7066] active:scale-95 overflow-hidden flex items-center justify-center gap-3 w-full max-w-[240px]"
            onClick={handleOpen}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span className="font-bold font-sans tracking-widest mt-[2px]">OPEN INVITATION</span>
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
};
