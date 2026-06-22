import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { AnimatedSection } from './AnimatedSection';

export const Profiles: React.FC = () => {
  const birdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: any = null;
    if (birdRef.current) {
      instance = lottie.loadAnimation({
        container: birdRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie/Bird pair love and flying sky.json'
      });
    }
    return () => instance?.destroy();
  }, []);

  return (
    <section className="py-24 px-margin-desktop relative bg-surface snap-start min-h-[100dvh] flex items-center" id="profiles">
      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        <h2 className="font-headline-lg text-6xl md:text-8xl text-deep-burgundy/5 absolute top-10 right-0 tracking-widest uppercase whitespace-nowrap hidden md:block z-0 pointer-events-none">THE COUPLE</h2>
        
        {/* BRIDE & GROOM TITLE */}
        <AnimatedSection delay={0.2} className="font-display-hero text-5xl md:text-6xl text-deep-burgundy text-center mb-16 flex items-center justify-center gap-4">
          <span className="text-3xl text-deep-burgundy/80">✦</span>
          Bride & Groom
          <span className="text-3xl text-deep-burgundy/80">✦</span>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative z-10 w-full">
          
          {/* Bride Info */}
          <AnimatedSection delay={0.4} className="md:col-span-4 flex flex-col items-center md:items-end justify-center w-full order-1 md:order-1 relative">
            {/* Mobile Photo */}
            <div className="md:hidden w-52 h-64 bg-paper-white shadow-xl p-2 -rotate-3 mb-8 relative border border-deep-burgundy/5">
              <div className="w-full h-full relative overflow-hidden">
                <img className="w-full h-full object-cover object-top filter contrast-[1.1]" alt="Intan Portrait" src="/assets/images/intan.jpeg"/>
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20 opacity-50 z-0 rotate-12 pointer-events-none">
                <img src="/assets/images/4.png" className="w-full h-full object-contain" alt="Floral" />
              </div>
            </div>

            {/* Profile Text Block */}
            <div className="flex flex-row items-stretch w-full max-w-[280px] text-left relative">
              {/* Vertical Title */}
              <div className="flex flex-col items-center mr-5 pt-2">
                <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className="font-label-caps text-[11px] tracking-[0.4em] text-deep-burgundy/50 uppercase">THE BRIDE</p>
                <div className="w-[1px] h-16 bg-deep-burgundy/30 mt-4"></div>
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col flex-1 relative pt-2">
                <span className="absolute -left-2 top-0 font-wedding-script text-[80px] leading-none text-deep-burgundy/5 pointer-events-none select-none">Intan</span>
                
                <h3 className="font-cormorant font-bold text-5xl text-deep-burgundy mb-1 relative z-10">Intan</h3>
                <h4 className="font-cormorant font-bold text-[18px] text-deep-burgundy mb-2 relative z-10">Putri Intan Purnama, S.E, M.E</h4>
                <p className="font-label-caps text-[10px] tracking-widest text-deep-burgundy/60 mb-1 relative z-10">Daughter of</p>
                <p className="font-cormorant text-[15px] text-deep-burgundy/80 mb-4 relative z-10 italic leading-snug">
                  Bpk. Ir. H. Aep Purnama MSi <br/>&amp; Ibu Hj. Iis Aisyah Wahidi
                </p>
                <div className="w-full h-[1px] bg-deep-burgundy/20 mb-4 relative z-10"></div>
                
                <a href="https://www.instagram.com/intaanputri/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8b8076]/10 border border-[#8b8076]/30 rounded-full w-fit hover:bg-[#8b8076]/20 transition-colors relative z-10">
                  <span className="material-symbols-outlined text-[14px] text-deep-burgundy/80">photo_camera</span>
                  <span className="font-label-caps text-[10px] tracking-widest text-deep-burgundy/80 font-bold lowercase">@intaanputri</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Collage Center with Lottie (Desktop Only) */}
          <AnimatedSection delay={0.5} className="hidden md:flex md:col-span-4 relative h-[500px] w-full flex-col items-center justify-center order-2">
            <div ref={birdRef} className="absolute -top-10 w-32 h-32 z-30 mix-blend-multiply"></div>
            <img alt="Floral accent" className="absolute top-1/4 left-0 w-40 h-40 object-contain opacity-50 z-0 mix-blend-multiply -rotate-45" src="/assets/images/4.png"/>
            {/* Aldo Image */}
            <div className="absolute right-4 bottom-12 w-48 h-64 bg-paper-white shadow-2xl z-20 p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img className="w-full h-full object-cover filter contrast-125 saturate-50" data-alt="Aldo Portrait" src="/assets/images/aldo.jpeg"/>
            </div>
            {/* Intan Image */}
            <div className="absolute left-4 top-12 w-56 h-72 bg-paper-white shadow-2xl z-10 p-2 -rotate-6 hover:rotate-0 transition-transform duration-500">
              <img className="w-full h-full object-cover filter contrast-125 saturate-50" data-alt="Intan Portrait" src="/assets/images/intan.jpeg"/>
            </div>
          </AnimatedSection>

          {/* Groom Info */}
          <AnimatedSection delay={0.6} className="md:col-span-4 flex flex-col items-center md:items-start justify-center w-full order-2 md:order-3 pt-12 md:pt-0 relative">
            {/* Mobile Photo */}
            <div className="md:hidden w-52 h-64 bg-paper-white shadow-xl p-2 rotate-3 mb-8 relative border border-deep-burgundy/5">
              <div className="w-full h-full relative overflow-hidden">
                <img className="w-full h-full object-cover object-top filter contrast-[1.1]" alt="Aldo Portrait" src="/assets/images/aldo.jpeg"/>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 opacity-50 z-0 rotate-180 pointer-events-none">
                <img src="/assets/images/4.png" className="w-full h-full object-contain" alt="Floral" />
              </div>
            </div>

            {/* Profile Text Block */}
            <div className="flex flex-row-reverse items-stretch w-full max-w-[280px] text-right relative">
              {/* Vertical Title */}
              <div className="flex flex-col items-center ml-5 pt-2">
                <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className="font-label-caps text-[11px] tracking-[0.4em] text-deep-burgundy/50 uppercase">THE GROOM</p>
                <div className="w-[1px] h-16 bg-deep-burgundy/30 mt-4"></div>
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col flex-1 relative pt-2 items-end">
                <span className="absolute -right-2 top-0 font-wedding-script text-[80px] leading-none text-deep-burgundy/5 pointer-events-none select-none">Aldo</span>
                
                <h3 className="font-cormorant font-bold text-5xl text-deep-burgundy mb-1 relative z-10">Aldo</h3>
                <h4 className="font-cormorant font-bold text-[18px] text-deep-burgundy mb-2 relative z-10">Febrialdo Haudi, S.Kom</h4>
                <p className="font-label-caps text-[10px] tracking-widest text-deep-burgundy/60 mb-1 relative z-10">Son of</p>
                <p className="font-cormorant text-[15px] text-deep-burgundy/80 mb-4 relative z-10 italic leading-snug">
                  Bpk. Wawan Ridwan (Alm) <br/>&amp; Ibu Iis Sucianti, A.Md.Keb
                </p>
                <div className="w-full h-[1px] bg-deep-burgundy/20 mb-4 relative z-10"></div>
                
                <a href="https://www.instagram.com/febrialdoo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8b8076]/10 border border-[#8b8076]/30 rounded-full w-fit hover:bg-[#8b8076]/20 transition-colors relative z-10 flex-row-reverse">
                  <span className="material-symbols-outlined text-[14px] text-deep-burgundy/80">photo_camera</span>
                  <span className="font-label-caps text-[10px] tracking-widest text-deep-burgundy/80 font-bold lowercase">@febrialdoo</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
