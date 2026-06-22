import React, { useState } from 'react';

export const RSVP: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('hadir');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih, pesan dan konfirmasi kehadiran Anda telah dikirim!');
    setName('');
    setMessage('');
  };

  return (
    <section className="sec-light sec-rsvp">
      <h2 className="sec-title">✦ Reservation ✦</h2>
      <p className="rsvp-sub">Guest Book &amp; Greetings</p>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Message / Greetings</label>
          <textarea 
            rows={4} 
            placeholder="Write your wishes & prayers..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Konfirmasi Kehadiran</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                value="hadir" 
                checked={attendance === 'hadir'} 
                onChange={() => setAttendance('hadir')} 
              /> Hadir
            </label>
            <label>
              <input 
                type="radio" 
                value="tidak" 
                checked={attendance === 'tidak'} 
                onChange={() => setAttendance('tidak')} 
              /> Tidak Hadir
            </label>
          </div>
        </div>
        <button type="submit" className="btn-submit">Send</button>
      </form>
    </section>
  );
};
