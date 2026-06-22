import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { AnimatedSection } from './AnimatedSection';

export const Events: React.FC = () => {
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: any = null;
    if (flowerRef.current) {
      instance = lottie.loadAnimation({
        container: flowerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie/flowers.json'
      });
    }
    return () => instance?.destroy();
  }, []);

  return (
    <section className="bg-surface relative overflow-hidden" id="events">
      {/* WEDDING DETAILS SECTION */}
      <div className="py-12 md:py-16 px-4 md:px-margin-desktop bg-surface-container-lowest relative flex flex-col justify-center overflow-hidden">
        {/* Decorative corner accents */}
        <img src="/assets/images/15.png" alt="Flower accent" className="absolute top-8 -left-6 md:top-12 md:-left-4 w-28 md:w-36 opacity-80 mix-blend-multiply rotate-[-15deg] pointer-events-none" onError={(e) => e.currentTarget.style.display = 'none'} />
        <img src="/assets/images/16.png" alt="Shoes accent" className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-32 md:w-40 opacity-80 mix-blend-multiply rotate-[10deg] pointer-events-none" onError={(e) => e.currentTarget.style.display = 'none'} />

        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-deep-burgundy/10 -translate-x-1/2 hidden md:block z-0"></div>
        <AnimatedSection delay={0.2} className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center mb-10 relative flex justify-center">
            <div className="relative inline-block">
              <h2 className="font-display-hero text-3xl md:text-5xl text-deep-burgundy flex items-center justify-center gap-2">
                <span className="text-xl md:text-2xl text-deep-burgundy/80">✦</span> Wedding Details! <span className="text-xl md:text-2xl text-deep-burgundy/80">✦</span>
              </h2>
            </div>
          </div>
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mb-10">
          
          {/* Unified Date Block */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-[1px] bg-deep-burgundy/30"></div>
              <span className="font-label-caps text-[11px] tracking-[0.4em] font-bold text-deep-burgundy/80 uppercase">SABTU</span>
              <div className="w-16 h-[1px] bg-deep-burgundy/30"></div>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-cormorant text-[16px] md:text-[20px] tracking-widest font-bold text-deep-burgundy uppercase">JULI</span>
              <span className="font-cormorant text-[80px] md:text-[100px] text-deep-burgundy leading-none font-medium drop-shadow-sm">04</span>
              <span className="font-cormorant text-[16px] md:text-[20px] tracking-widest font-bold text-deep-burgundy uppercase">2026</span>
            </div>
          </div>

          {/* Events Row */}
          <div className="flex flex-row items-center justify-center w-full relative">
            {/* Akad Nikah */}
            <div className="flex flex-col items-center flex-1">
              <h3 className="font-cormorant text-[20px] md:text-2xl text-deep-burgundy font-bold tracking-[0.15em] uppercase mb-3">AKAD NIKAH</h3>
              <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-deep-burgundy/80 bg-deep-burgundy/5 border border-deep-burgundy/10 px-4 py-2 rounded-full whitespace-nowrap">09.00 - 10.00 WIB</p>
            </div>
            
            {/* Vertical Separator */}
            <div className="w-[1px] h-20 bg-deep-burgundy/20 mx-4 md:mx-8"></div>

            {/* Resepsi */}
            <div className="flex flex-col items-center flex-1">
              <h3 className="font-cormorant text-[20px] md:text-2xl text-deep-burgundy font-bold tracking-[0.15em] uppercase mb-3">RESEPSI</h3>
              <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-deep-burgundy/80 bg-deep-burgundy/5 border border-deep-burgundy/10 px-4 py-2 rounded-full whitespace-nowrap">11.00 - 14.00 WIB</p>
            </div>
          </div>

        </div>

        {/* Location Section */}
        <div className="max-w-xl mx-auto text-center border-t border-deep-burgundy/10 pt-6 px-4">
          <h4 className="font-body-main font-bold text-[14px] md:text-[18px] text-deep-burgundy mb-1">Gedung SMA Plus YPHB</h4>
          <p className="font-body-main text-[11px] md:text-[14px] text-on-surface-variant leading-relaxed mb-6 max-w-[280px] mx-auto">
            Jl. Raya Pajajaran No.234 A, Bantarjati, Kota Bogor, Jawa Barat
          </p>
          <a className="inline-flex items-center justify-center px-8 py-2 md:py-3 bg-transparent border border-deep-burgundy text-deep-burgundy font-label-caps text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-deep-burgundy hover:text-paper-white transition-all duration-500 rounded-full" href="https://maps.app.goo.gl/zm8zWThfW5VZDAvr7" target="_blank" rel="noopener noreferrer">
            Open Maps
          </a>
        </div>
        </AnimatedSection>
      </div>

      {/* OUR LOVE STORY SECTION */}
      <div className="bg-[#f7f4ef] py-12 md:py-16 px-4 md:px-margin-desktop relative flex flex-col items-center justify-center">
        <AnimatedSection delay={0.3} className="max-w-2xl mx-auto relative flex flex-col items-center text-center z-10 w-full">
          
          {/* Decorative Image 18.png */}
          <div className="mb-6 md:mb-8 w-20 md:w-32 drop-shadow-sm transition-transform duration-700 hover:scale-105">
            <img src="/assets/images/18.png" alt="Love Story Decoration" className="w-full h-auto object-contain opacity-90 mix-blend-multiply" onError={(e) => e.currentTarget.style.display = 'none'} />
          </div>

          <h2 className="font-cormorant text-3xl md:text-5xl text-deep-burgundy font-bold tracking-[0.1em] uppercase mb-4 md:mb-6">
            Our Love Story
          </h2>

          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 md:w-20 h-[1px] bg-deep-burgundy/30"></div>
            <span className="font-label-caps text-[9px] md:text-[11px] tracking-[0.3em] font-bold text-deep-burgundy/60 uppercase">A Decade Together</span>
            <div className="w-12 md:w-20 h-[1px] bg-deep-burgundy/30"></div>
          </div>

          <div className="font-body-main text-[12px] md:text-[15px] leading-relaxed text-deep-burgundy/80 space-y-4 md:space-y-6 max-w-lg mx-auto">
            <p>
              Semuanya berawal dari pertemuan sederhana di bangku sekolah, tempat cerita kami pertama kali diukir.
            </p>
            <p>
              Selama lebih dari 10 tahun, kami tumbuh bersama melewati banyak tawa, air mata, dan berbagai babak kehidupan. Setelah satu dekade penuh makna, kami memutuskan untuk mengambil langkah suci selanjutnya—menyempurnakan ibadah dan menyatukan visi dalam ikatan pernikahan.
            </p>
            
            <div className="pt-4 md:pt-6 pb-2">
              <p className="font-cormorant italic text-[16px] md:text-[22px] text-deep-burgundy px-4 md:px-6 py-3 border-t border-b border-deep-burgundy/20 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl md:text-2xl text-deep-burgundy/30 bg-[#f7f4ef] px-2">"</span>
                Karena beberapa pertemuan memang ditakdirkan untuk menjadi akhir yang bahagia.
                <span className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 text-xl md:text-2xl text-deep-burgundy/30 bg-[#f7f4ef] px-2">"</span>
              </p>
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};
