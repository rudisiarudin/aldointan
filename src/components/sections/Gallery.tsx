import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <section className="sec-light sec-gallery">
      <h2 className="sec-title">✦ Our Gallery ✦</h2>
      <div className="gallery-wrapper">
        <div className="film-label">✦ captured moments ✦</div>
        <div className="gallery-grid">
          {/* Using placeholders */}
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop" alt="Gallery 1" />
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop" alt="Gallery 2" />
          <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400&auto=format&fit=crop" alt="Gallery 3" />
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop" alt="Gallery 4" />
        </div>
      </div>
    </section>
  );
};
