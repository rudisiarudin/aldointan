import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          const id = section.getAttribute('id');
          if (id) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (href: string) => {
    const baseClass = "font-label-caps text-[10px] uppercase tracking-[0.2em] transition-colors duration-300";
    const isActive = href === `#${activeSection}`;
    return `${baseClass} ${isActive ? 'text-deep-burgundy' : 'text-on-surface-variant hover:text-deep-burgundy'}`;
  };

  return (
    <nav className="hidden md:block fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-surface-variant/30">
      <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-screen-2xl mx-auto">
        <a className="font-subheading-serif text-subheading-serif text-deep-burgundy dark:text-inverse-primary tracking-widest" href="#">I &amp; A</a>
        <div className="hidden md:flex gap-10 items-center">
          <a className={getLinkClass('#story')} href="#story">Our Story</a>
          <a className={getLinkClass('#profiles')} href="#profiles">Profiles</a>
          <a className={getLinkClass('#events')} href="#events">Events</a>
          <a className={getLinkClass('#gallery')} href="#gallery">Gallery</a>
        </div>
        <a className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-transparent text-deep-burgundy border border-deep-burgundy font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-deep-burgundy hover:text-paper-white transition-all duration-500" href="#rsvp">
          RSVP
        </a>
        <button aria-label="Menu" className="md:hidden text-deep-burgundy p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};
