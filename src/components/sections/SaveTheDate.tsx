import React from 'react';

export const SaveTheDate: React.FC = () => {
  return (
    <section className="sec-light sec-savetd">
      <h1 className="cinematic-heading">
        Save the Date
      </h1>

      <div className="ayat-wrap">
        <p className="ayat-arab">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
        <p className="ayat-indo">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."</p>
        <p className="ayat-source">QS. Ar-Rum: 21</p>
      </div>

      <div className="divider-line"></div>

      <p className="together-text">
        Together with our family, We invite<br />
        you to join our wedding celebration.
      </p>
    </section>
  );
};
