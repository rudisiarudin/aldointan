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
    <nav className="hidden md:block fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 bg-[#FDF8F3]/90 backdrop-blur-md border-b border-x border-deep-burgundy/10 rounded-b-3xl shadow-[0_4px_20px_-10px_rgba(123,32,32,0.15)]">
      <div className="flex justify-between items-center w-full px-8 py-4 mx-auto">
        <a className="font-cormorant text-2xl text-deep-burgundy tracking-widest font-bold italic" href="#">I &amp; A</a>
        <div className="flex gap-6 items-center">
          <a className={getLinkClass('#events')} href="#events">EVENTS</a>
          <a className={getLinkClass('#gallery')} href="#gallery">GALLERY</a>
          <a className="inline-flex items-center justify-center px-5 py-2 bg-deep-burgundy text-[#FDF8F3] font-label-caps text-[9px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-deep-burgundy transition-all duration-500 rounded-full border border-deep-burgundy" href="#rsvp">
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
};
