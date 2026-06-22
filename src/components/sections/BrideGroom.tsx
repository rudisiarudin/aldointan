import React from 'react';

export const BrideGroom: React.FC = () => {
  return (
    <section className="sec-light sec-bg">
      <h2 className="sec-title">✦ Bride & Groom ✦</h2>

      <div className="couple-grid">
        <div className="person-card">
          <div className="person-photo-wrap">
            <img src="https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=600&auto=format&fit=crop" alt="Putri Intan Purnama" className="person-photo" />
          </div>
          <h3 className="person-name">Putri Intan Purnama S.E, M.E</h3>
          <p className="person-parents">
            Putri Ketiga dari Bpk. Ir. H. Aep Purnama MSi<br />
            dan Ibu Hj. Iis Aisyah Wahidi
          </p>
        </div>

        <div className="divider-and">&amp;</div>

        <div className="person-card">
          <div className="person-photo-wrap">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" alt="Febrialdo Haudi" className="person-photo" />
          </div>
          <h3 className="person-name">Febrialdo Haudi S.Kom</h3>
          <p className="person-parents">
            Putra Pertama dari Bpk. Wawan Ridwan (Alm)<br />
            dan Ibu Iis Sucianti, A.Md.Keb
          </p>
        </div>
      </div>
    </section>
  );
};
