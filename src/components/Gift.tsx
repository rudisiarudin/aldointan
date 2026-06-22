import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Gift: React.FC = () => {
  const [showGift, setShowGift] = useState(false);

  return (
    <section className="py-24 px-4 md:px-margin-desktop relative bg-surface snap-start min-h-[100dvh] flex flex-col justify-center" id="gift">
      <div className="max-w-lg mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Photo and Title Row */}
        <AnimatedSection delay={0.2} className="flex flex-row items-center justify-center gap-6 md:gap-8 mb-10 w-full">
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 shadow-lg border border-deep-burgundy/10">
            <img 
              src="/assets/images/OG3.JPG" 
              alt="Couple Portrait" 
              className="w-full h-full object-cover filter contrast-[1.05]" 
              onError={(e) => {
                e.currentTarget.src = '/assets/images/aldo-intan-kecil-include.png'; // fallback if OG3.JPG is missing
              }}
            />
          </div>
          <h2 className="font-cormorant text-[32px] md:text-5xl text-deep-burgundy leading-[1.1] font-bold text-left uppercase">
            WEDDING<br />GIFT
          </h2>
        </AnimatedSection>

        {/* Description Text */}
        <AnimatedSection delay={0.4} className="font-body-main text-[13px] md:text-[15px] text-deep-burgundy/80 max-w-sm mx-auto leading-relaxed mb-10">
          <p>The greatest gift is having you with us. If you'd like to give a token of love, we would be truly grateful.</p>
        </AnimatedSection>

        {/* Action Button & Hidden Ticket */}
        {!showGift ? (
          <button 
            onClick={() => setShowGift(true)}
            className="inline-flex items-center justify-center px-10 py-3 bg-[#8b8076] text-white font-label-caps text-[11px] font-bold uppercase tracking-[0.2em] rounded-[24px] hover:bg-deep-burgundy transition-all duration-300"
          >
            SEND GIFT
          </button>
        ) : (
          <AnimatedSection delay={0.6} className="flex flex-col items-center gap-6 w-full animate-[fadeIn_0.5s_ease-out]">
            <div className="max-w-[280px] md:max-w-[320px] mx-auto cursor-pointer transform origin-center transition-transform duration-500 hover:scale-[1.02]">
              <img alt="BNI Account Ticket" className="w-full h-auto object-contain drop-shadow-2xl" src="/assets/images/ticket-bni.png"/>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="font-label-caps text-[10px] tracking-widest text-deep-burgundy/80 uppercase font-bold">Account Number: 0724 2932 11</p>
              <div className="flex flex-row items-center gap-3">
                <button 
                  className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-deep-burgundy text-deep-burgundy font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-deep-burgundy hover:text-paper-white transition-all duration-500 rounded-full" 
                  onClick={() => {
                    navigator.clipboard.writeText('0724293211');
                    alert('Nomor rekening disalin!');
                  }}
                >
                  <span className="material-symbols-outlined text-[14px] mr-2">content_copy</span> Copy
                </button>
                <button 
                  className="inline-flex items-center justify-center px-6 py-2 bg-deep-burgundy border border-deep-burgundy text-paper-white font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-deep-burgundy transition-all duration-500 rounded-full" 
                  onClick={() => setShowGift(false)}
                >
                  <span className="material-symbols-outlined text-[14px] mr-2">close</span> Close
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}
        
      </div>
      <img alt="Floral accent" className="absolute top-1/4 -left-20 w-64 h-64 object-contain opacity-10 z-0 mix-blend-multiply -rotate-12 pointer-events-none" src="/assets/images/4.png"/>
    </section>
  );
};
