import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import { Profiles } from './Profiles';
import { Events } from './Events';
import { Gallery } from './Gallery';
import { Gift } from './Gift';
import { RSVP } from './RSVP';
import { Closing } from './Closing';
import { Footer } from './Footer';

export const MobileCanvas: React.FC = () => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionNames = ['Profile', 'Events', 'Gallery', 'Gift', 'RSVP', 'Closing'];

  return (
    <div className="w-full h-[100dvh] relative bg-surface-container-lowest">
      {/* Swipe Hint Overlay */}
      {showSwipeHint && (
        <div 
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setShowSwipeHint(false)}
          onTouchStart={() => setShowSwipeHint(false)}
        >
          <div className="bg-white/10 p-6 rounded-full border border-white/20 mb-4 animate-pulse">
            <span className="material-symbols-outlined text-white text-4xl">swipe_left</span>
          </div>
          <p className="font-label-caps text-white tracking-[0.2em] text-xs text-center px-4">Swipe Left/Right<br/>or Scroll Down</p>
          <p className="font-body-main text-white/70 text-xs mt-2">Tap to start</p>
        </div>
      )}

      {/* Left Edge Arrow (Previous) */}
      {activeIndex > 0 && (
        <button 
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center opacity-30 hover:opacity-100 transition-opacity p-1 pointer-events-auto"
        >
          <span className="material-symbols-outlined text-deep-burgundy text-sm drop-shadow-md mb-1">arrow_back_ios_new</span>
          <span 
            className="text-[8px] uppercase tracking-[0.2em] text-deep-burgundy font-bold drop-shadow-md"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {sectionNames[activeIndex - 1]}
          </span>
        </button>
      )}

      {/* Right Edge Arrow (Next) */}
      {activeIndex < sectionNames.length - 1 && (
        <button 
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity p-1 pointer-events-auto animate-pulse"
        >
          <span 
            className="text-[8px] uppercase tracking-[0.2em] text-deep-burgundy font-bold drop-shadow-md mb-1"
            style={{ writingMode: 'vertical-rl' }}
          >
            {sectionNames[activeIndex + 1]}
          </span>
          <span className="material-symbols-outlined text-deep-burgundy text-sm drop-shadow-md">arrow_forward_ios</span>
        </button>
      )}

      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        direction="horizontal"
        className="w-full h-full"
        modules={[Mousewheel, Keyboard]}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSliderMove={() => setShowSwipeHint(false)}
        onScroll={() => setShowSwipeHint(false)}
      >
        <SwiperSlide className="overflow-y-auto custom-scrollbar">
          <Profiles />
        </SwiperSlide>
        <SwiperSlide className="overflow-y-auto custom-scrollbar">
          <Events />
        </SwiperSlide>
        <SwiperSlide className="overflow-y-auto custom-scrollbar">
          <Gallery />
        </SwiperSlide>
        <SwiperSlide className="overflow-y-auto custom-scrollbar">
          <Gift />
        </SwiperSlide>
        <SwiperSlide className="overflow-y-auto custom-scrollbar">
          <RSVP />
        </SwiperSlide>
        <SwiperSlide className="overflow-y-auto custom-scrollbar">
          <div className="min-h-full flex flex-col justify-between">
            <Closing />
            <Footer />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
