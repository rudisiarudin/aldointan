import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export const Footer: React.FC = () => {
  const blRef1 = useRef<HTMLDivElement>(null);
  const brRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anims = [
      { ref: blRef1, path: '/lottie/Blue-flower.json' },
      { ref: brRef1, path: '/lottie/apricot blossom.json' }
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
    <footer className="bg-[#2A2826] py-12 px-4 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-3">
        <p className="font-cormorant italic text-[18px] text-surface-variant">
          Dibuat dengan cinta
        </p>
        <p className="font-label-caps text-[10px] md:text-[11px] tracking-widest text-surface-variant/60 uppercase">
          &copy; 2026{' '}
          <a 
            href="https://www.instagram.com/rudi.siarudin/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-surface-variant hover:text-white border-b border-transparent hover:border-surface-variant/50 transition-all"
          >
            IT Palugada
          </a>
          , All rights reserved.
        </p>
      </div>
    </footer>
  );
};
