import React, { useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Gallery: React.FC = () => {
  const galleryImages = [
    '/assets/images/OG4.JPG',
    '/assets/images/OG5.JPG',
    '/assets/images/OG6.JPG',
    '/assets/images/OG7.JPG',
    '/assets/images/OG8.JPG',
    '/assets/images/OG9.JPG',
    '/assets/images/OG10.JPG',
    '/assets/images/pw1.jpg',
    '/assets/images/pw2.JPG'
  ];

  return (
    <section className="py-32 bg-surface-container relative overflow-hidden snap-start min-h-[100dvh] flex flex-col justify-center" id="gallery">
      <AnimatedSection delay={0.2} className="px-margin-desktop mb-16 relative z-20 mix-blend-multiply flex flex-col items-center">
        <h2 className="font-headline-lg text-6xl md:text-8xl text-deep-burgundy/10 uppercase tracking-widest text-center">MOMENTS</h2>
        <h2 className="font-wedding-script text-6xl md:text-7xl text-deep-burgundy text-center -mt-12 md:-mt-16 relative z-10 drop-shadow-sm">Captured</h2>
      </AnimatedSection>
      <div className="w-full max-w-7xl mx-auto px-margin-desktop relative z-10">
        {/* Featured Grid */}
        <AnimatedSection delay={0.4} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24 px-4 md:px-0">
          <div className="col-span-2 md:col-span-1 aspect-[4/5] overflow-hidden bg-surface shadow-lg md:shadow-xl rounded-sm">
            <img alt="Featured moment 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/assets/images/OG7.JPG"/>
          </div>
          <div className="col-span-1 md:col-span-1 aspect-[4/5] overflow-hidden bg-surface shadow-lg md:shadow-xl mt-0 md:mt-12 rounded-sm">
            <img alt="Featured moment 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/assets/images/OG2.JPG"/>
          </div>
          <div className="col-span-1 md:col-span-1 aspect-[4/5] overflow-hidden bg-surface shadow-lg md:shadow-xl mt-8 md:mt-0 rounded-sm">
            <img alt="Featured moment 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/assets/images/OG3.JPG"/>
          </div>
        </AnimatedSection>
        
        {/* Carousel */}
        <AnimatedSection delay={0.6} className="relative w-full overflow-hidden group pb-8">
          <div className="flex w-max gap-4 animate-carousel hover:cursor-grab active:cursor-grabbing">
            {/* Double the items for seamless infinite scroll */}
            {[...galleryImages, ...galleryImages].map((src, idx) => (
              <div key={idx} className="w-[140px] md:w-[250px] aspect-[4/5] flex-shrink-0 bg-surface shadow-md rounded-sm overflow-hidden">
                <img alt={`Gallery moment ${idx + 1}`} className="w-full h-full object-cover" src={src}/>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      
      {/* Decorative Elements */}
      <img alt="Floral accent right" className="absolute bottom-1/4 right-10 w-48 h-48 object-contain opacity-30 z-0 mix-blend-multiply rotate-45 pointer-events-none" src="/assets/images/4.png"/>
      <img alt="Floral accent left" className="absolute bottom-0 left-[-20px] md:left-0 w-48 md:w-64 h-auto object-contain opacity-80 z-0 mix-blend-multiply pointer-events-none" src="/assets/images/14.png" onError={(e) => e.currentTarget.style.display = 'none'} />
    </section>
  );
};
