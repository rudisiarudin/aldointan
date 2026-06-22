import React, { useState } from 'react';

export const WeddingGift: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const rekening = "0724293211";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="sec-light sec-gift">
      <h2 className="sec-title">✦ Wedding Gift ✦</h2>
      <p className="gift-subtitle">
        Your presence and prayers are the most meaningful gift<br />
        we could ask for. However, should you wish to share a<br />
        token of love, it may be sent through:
      </p>

      <div className="atm-card">
        <h3 className="bank-name">BNI</h3>
        <p className="account-number">{rekening}</p>
        <p className="account-name">A.n Febrialdo Haudi</p>
        <button className="btn-copy" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy Rekening'}
        </button>
      </div>

      <p className="gift-note">✦ Thank you for all your prayers and love ✦</p>
    </section>
  );
};
