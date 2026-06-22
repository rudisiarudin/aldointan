import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { AnimatedSection } from './AnimatedSection';
import { useCountdown } from '../hooks/useCountdown';

export const Hero: React.FC = () => {
  const tlRef1 = useRef<HTMLDivElement>(null);
  const tlRef2 = useRef<HTMLDivElement>(null);
  const { days, hours, minutes, seconds } = useCountdown(new Date('2026-07-04T09:00:00+07:00').toISOString());

  useEffect(() => {
    const anims = [
      { ref: tlRef1, path: '/lottie/Blue-flower.json' },
      { ref: tlRef2, path: '/lottie/apricot blossom.json' }
    ];
    
    const instances = anims.map(({ ref, path }) => {
      if (ref.current) {
        return lottie.loadAnimation({
          container: ref.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path,
        });
      }
      return null;
    });

    return () => {
      instances.forEach(instance => instance?.destroy());
    };
  }, []);

  return (
    <section className="relative w-full bg-white" id="home">
      {/* Lottie Decorations */}
      <div className="absolute top-[-20px] left-[-25px] w-[150px] rotate-[-200deg] z-30 pointer-events-none" ref={tlRef1}></div>
      <div className="absolute top-[-20px] left-[-25px] w-[150px] rotate-[-200deg] z-30 pointer-events-none" ref={tlRef2}></div>

      {/* --- INITIAL VIEWPORT (100dvh) --- */}
      <div className="relative z-10 w-full min-h-[100dvh] max-w-lg mx-auto flex flex-col items-center text-center px-4 pt-12 md:pt-20 overflow-hidden">
        
        {/* Decorative Bottom Right */}
        <img src="/assets/images/10.png" alt="Bottom Right Decoration" className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 w-56 md:w-72 opacity-50 mix-blend-multiply rotate-[25deg] pointer-events-none" onError={(e) => e.currentTarget.style.display = 'none'} />

        {/* Spacer to push content to middle */}
        <div className="flex-grow flex flex-col justify-center items-center w-full relative z-10">
          
          {/* Top Decorative Image */}
          <AnimatedSection delay={0.2} className="-mt-12 md:-mt-16 mb-10 w-40 md:w-56 drop-shadow-sm opacity-90 mix-blend-multiply transition-transform duration-700 hover:scale-105">
            <img src="/assets/images/1.png" alt="Top Decoration" className="w-full h-auto object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
          </AnimatedSection>

          {/* Title, Names, and Date Section */}
          <AnimatedSection delay={0.4} className="flex flex-col items-center mb-8 w-full">
            <h1 className="font-label-caps text-[11px] md:text-[13px] text-deep-burgundy/80 uppercase tracking-[0.4em] mb-4">
              THE WEDDING OF
            </h1>
            <h2 className="font-cormorant italic text-5xl md:text-6xl text-deep-burgundy drop-shadow-sm mb-4">Intan &amp; Aldo</h2>
            <p className="font-label-caps text-[10px] tracking-[0.3em] text-deep-burgundy/60 uppercase">04 Juli 2026</p>
          </AnimatedSection>

          {/* Quote */}
          <AnimatedSection delay={0.6} className="font-cormorant text-[15px] md:text-[17px] text-deep-burgundy/80 italic mb-10 max-w-[280px]">
            <p>"Bersama melangkah menuju ridho-Nya."</p>
          </AnimatedSection>

          {/* Countdown */}
          <AnimatedSection delay={0.8} className="flex items-start justify-center gap-4 md:gap-6 text-deep-burgundy w-full">
            <div className="flex flex-col items-center w-10">
              <span className="font-cormorant text-3xl md:text-4xl leading-none mb-1 drop-shadow-sm font-semibold">{days.toString().padStart(2, '0')}</span>
              <span className="font-label-caps text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-deep-burgundy/50">Hari</span>
            </div>
            <span className="font-cormorant text-2xl md:text-3xl leading-none mt-1 text-deep-burgundy/30">:</span>
            <div className="flex flex-col items-center w-10">
              <span className="font-cormorant text-3xl md:text-4xl leading-none mb-1 drop-shadow-sm font-semibold">{hours.toString().padStart(2, '0')}</span>
              <span className="font-label-caps text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-deep-burgundy/50">Jam</span>
            </div>
            <span className="font-cormorant text-2xl md:text-3xl leading-none mt-1 text-deep-burgundy/30">:</span>
            <div className="flex flex-col items-center w-10">
              <span className="font-cormorant text-3xl md:text-4xl leading-none mb-1 drop-shadow-sm font-semibold">{minutes.toString().padStart(2, '0')}</span>
              <span className="font-label-caps text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-deep-burgundy/50">Mnt</span>
            </div>
            <span className="font-cormorant text-2xl md:text-3xl leading-none mt-1 text-deep-burgundy/30">:</span>
            <div className="flex flex-col items-center w-10">
              <span className="font-cormorant text-3xl md:text-4xl leading-none mb-1 drop-shadow-sm font-semibold">{seconds.toString().padStart(2, '0')}</span>
              <span className="font-label-caps text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-deep-burgundy/50">Dtk</span>
            </div>
          </AnimatedSection>

          {/* Save to Calendar Button */}
          <AnimatedSection delay={0.9} className="mt-10">
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Intan+%26+Aldo&dates=20260704T020000Z/20260704T070000Z&details=Merupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak%2FIbu%2FSaudara%2Fi+berkenan+hadir+untuk+memberikan+doa+restu.&location=SMA+Plus+YPHB+Bogor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-deep-burgundy text-deep-burgundy font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-deep-burgundy hover:text-paper-white transition-all duration-500 rounded-full"
            >
              <span className="material-symbols-outlined text-[14px] mr-2">calendar_today</span> Save to Calendar
            </a>
          </AnimatedSection>

        </div>

        {/* Scroll Down Animation */}
        <div className="mt-auto pb-8 pt-8 flex flex-col items-center animate-bounce opacity-70">
          <span className="font-label-caps text-[8px] tracking-[0.3em] uppercase text-deep-burgundy/50 mb-2">Scroll Down</span>
          <img src="/assets/images/12.png" className="w-4 md:w-5 rotate-[180deg] filter sepia hue-rotate-[320deg] saturate-[3] brightness-75" alt="Scroll Down" />
        </div>
      </div>

      {/* --- SCROLL DOWN SECTION (BELOW FOLD) --- */}
      <div className="relative z-10 w-full min-h-[100dvh] max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4 py-16 bg-[#FDF8F3] overflow-hidden">
        {/* Tilted Polaroid Frame */}
        <AnimatedSection delay={0.2} className="relative w-full max-w-[220px] md:max-w-[260px] aspect-[4/5] md:aspect-square mx-auto mb-10">
          {/* Decorative Back Frame */}
          <div className="absolute inset-0 bg-white shadow-lg rotate-3 rounded-sm border border-deep-burgundy/5"></div>
          {/* Main Image Container */}
          <div className="absolute inset-0 bg-white p-2 shadow-xl -rotate-2 rounded-sm border border-deep-burgundy/5 flex flex-col">
            <div className="w-full h-full relative overflow-hidden border border-deep-burgundy/10">
                <img 
                  alt="Intan & Aldo Hero Portrait" 
                  className="w-full h-full object-cover object-top filter contrast-[1.1] scale-105" 
                  src="/assets/images/pw1.jpg" 
                />
            </div>
            {/* Polaroid Bottom Lip */}
            <div className="h-8 w-full bg-white shrink-0"></div>
          </div>
        </AnimatedSection>

        {/* Quran Verse */}
        <AnimatedSection delay={0.4} className="max-w-[480px] w-full mx-auto text-left mt-2">
          <p className="font-label-caps text-[12px] md:text-[14px] text-deep-burgundy/80 font-bold uppercase tracking-[0.2em] mb-4 px-4">
            QS. AR-RUM : 21
          </p>
          <p className="font-cormorant text-[15px] md:text-[17px] leading-relaxed text-on-surface-variant italic font-medium px-4">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir"
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
