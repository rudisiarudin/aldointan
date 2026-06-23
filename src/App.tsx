import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [showCover, setShowCover] = useState(true);

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
          <main className="w-full mx-auto overflow-x-hidden">
            <Hero />
            <Profiles />
            <Events />
            <Gallery />
            <Gift />
            <RSVP />
            <Closing />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
