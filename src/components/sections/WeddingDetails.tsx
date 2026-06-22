import React from 'react';

export const WeddingDetails: React.FC = () => {
  return (
    <section className="sec-light sec-details">
      <h2 className="sec-title">✦ Wedding Details ✦</h2>

      <div className="details-grid">
        <div className="detail-card">
          <h3 className="detail-heading">Akad</h3>
          <p className="detail-date">Sabtu, 04 Juli 2026</p>
          <p className="detail-time">Pkl. 09.00 - 10.00 WIB</p>
        </div>

        <div className="detail-card">
          <h3 className="detail-heading">Resepsi</h3>
          <p className="detail-date">Sabtu, 04 Juli 2026</p>
          <p className="detail-time">Pkl. 11.00 - 14.00 WIB</p>
        </div>
      </div>

      <div className="location-box">
        <p className="location-text">
          <strong>Gedung SMA Plus YPHB</strong><br />
          Jl. Raya Pajajaran No.234 A, RT.05/RW.11, Bantarjati, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16153
        </p>
        <a 
          href="https://www.google.com/maps/place/SMA+Plus+YPHB/@-6.5783934,106.8057742,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c42f06fc48b1:0x2dd61cf51a62602f!8m2!3d-6.5783987!4d106.8083491!16s%2Fg%2F11f06lvcqs?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-maps"
        >
          Open Maps
        </a>
      </div>
    </section>
  );
};
