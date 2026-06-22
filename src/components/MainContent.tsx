import React from 'react';
import { SaveTheDate } from './sections/SaveTheDate';
import { BrideGroom } from './sections/BrideGroom';
import { LoveStory } from './sections/LoveStory';
import { WeddingDetails } from './sections/WeddingDetails';
import { Gallery } from './sections/Gallery';
import { WeddingGift } from './sections/WeddingGift';
import { RSVP } from './sections/RSVP';
import { Footer } from './sections/Footer';

export const MainContent: React.FC = () => {
  return (
    <div className="main-content-wrapper">
      <SaveTheDate />
      <BrideGroom />
      <LoveStory />
      <WeddingDetails />
      <Gallery />
      <WeddingGift />
      <RSVP />
      <Footer />
    </div>
  );
};
