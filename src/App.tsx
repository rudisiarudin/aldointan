import React, { useState, useEffect } from 'react';
import { Cover } from './components/Cover';
import { MusicPlayer } from './components/MusicPlayer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profiles } from './components/Profiles';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Gift } from './components/Gift';
import { RSVP } from './components/RSVP';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { MobileCanvas } from './components/MobileCanvas';

const App: React.FC = () => {
  const [showCover, setShowCover] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (window.location.pathname === '/admin') {
    return <Admin />;
  }

  return (
      <div className={`bg-background text-on-background min-h-screen selection:bg-muted-gold/30 selection:text-deep-burgundy relative ${showCover ? 'overflow-hidden h-screen' : ''}`}>
      {showCover && <Cover onOpen={() => setShowCover(false)} />}
      <MusicPlayer isVisible={!showCover} />
      {!showCover && (
        <>
          <Navbar />
          <main className="w-full mx-auto snap-y snap-mandatory h-[100dvh] overflow-y-auto overflow-x-hidden custom-scrollbar">
            <Hero />
            {isMobile ? (
              <div className="snap-start snap-always w-full h-[100dvh]">
                <MobileCanvas />
              </div>
            ) : (
              <>
                <Profiles />
                <Events />
                <Gallery />
                <Gift />
                <RSVP />
                <Closing />
                <Footer />
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
