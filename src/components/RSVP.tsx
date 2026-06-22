import React, { useState, useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { supabase } from '../lib/supabase';

export const RSVP: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const urlName = params.get('nama');

  const [attendance, setAttendance] = useState<'attend' | 'not_attend'>('attend');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name] = useState(urlName || '');
  const [wishes, setWishes] = useState('');
  const [allWishes, setAllWishes] = useState<{ name: string; wishes: string; attendance: string; reply?: string }[]>([]);

  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    const { data } = await supabase
      .from('guests')
      .select('name, wishes, attendance, reply')
      .not('wishes', 'is', null)
      .neq('wishes', '')
      .order('created_at', { ascending: false });
    if (data) setAllWishes(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlName) {
      alert('Maaf, hanya tamu yang menerima link undangan resmi yang dapat mengisi RSVP.');
      return;
    }
    if (!name.trim()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('guests')
        .insert([{ name, attendance, wishes }]);

      if (error) throw error;

      setIsSuccess(true);
      setWishes('');
      fetchWishes(); // refresh ucapan setelah submit
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Maaf, terjadi kesalahan saat mengirim RSVP. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surface-container-lowest py-16 px-4 md:px-margin-desktop relative flex flex-col justify-center" id="rsvp">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* LEFT: RSVP FORM */}
        <div className="w-full">
          <AnimatedSection delay={0.2}>
            {/* RSVP Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-label-caps text-[12px] font-bold tracking-[0.2em] text-deep-burgundy/80">RSVP</span>
              <div className="flex-1 h-[1px] bg-deep-burgundy/20"></div>
            </div>

            {/* Title & Description */}
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-burgundy mb-4">WILL YOU ATTEND?</h2>
            <p className="font-body-main text-[13px] md:text-[14px] text-deep-burgundy/80 leading-relaxed mb-8">
              We kindly request your response to confirm your attendance. Please take a moment to extend your warm regards and best wishes.
            </p>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.4}>
            {isSuccess ? (
              <div className="bg-white/50 p-8 text-center border border-deep-burgundy/10 animate-[fadeIn_0.5s_ease-out]">
                <span className="material-symbols-outlined text-[48px] text-[#8b8076] block mb-3">check_circle</span>
                <h3 className="font-cormorant text-2xl text-deep-burgundy mb-2 font-bold">Terima Kasih!</h3>
                <p className="font-body-main text-[13px] text-deep-burgundy/80">RSVP dan ucapan Anda telah kami terima.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2 bg-transparent border border-deep-burgundy text-deep-burgundy font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-deep-burgundy hover:text-paper-white transition-all duration-500 rounded-full"
                >
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {!urlName && (
                  <div className="bg-red-50 text-red-600 p-3 text-xs border border-red-200 rounded-md text-center">
                    Akses via link resmi untuk mengisi RSVP.
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block font-label-caps text-[11px] font-bold tracking-wider text-deep-burgundy mb-2">NAME</label>
                  <input
                    className={`w-full bg-transparent border border-deep-burgundy/30 px-4 py-3 font-body-main text-[14px] text-deep-burgundy focus:outline-none focus:ring-0 focus:border-deep-burgundy ${urlName ? 'opacity-80' : 'opacity-50'} cursor-not-allowed`}
                    id="name"
                    placeholder="Guest Name"
                    type="text"
                    value={name}
                    readOnly
                    required
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="block font-label-caps text-[11px] font-bold tracking-wider text-deep-burgundy mb-2">ATTENDANCE</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => setAttendance('attend')} className={`py-3 border text-[11px] font-label-caps tracking-widest transition-colors duration-300 ${attendance === 'attend' ? 'bg-deep-burgundy border-deep-burgundy text-paper-white' : 'border-deep-burgundy/30 text-deep-burgundy hover:border-deep-burgundy'}`}>
                      ATTEND
                    </button>
                    <button type="button" onClick={() => setAttendance('not_attend')} className={`py-3 border text-[11px] font-label-caps tracking-widest transition-colors duration-300 ${attendance === 'not_attend' ? 'bg-deep-burgundy border-deep-burgundy text-paper-white' : 'border-deep-burgundy/30 text-deep-burgundy hover:border-deep-burgundy'}`}>
                      NOT ATTEND
                    </button>
                  </div>
                </div>

                {/* Wishes */}
                <div>
                  <label className="block font-label-caps text-[11px] font-bold tracking-wider text-deep-burgundy mb-2">WISHES</label>
                  <textarea
                    className="w-full bg-transparent border border-deep-burgundy/30 px-4 py-3 font-body-main text-[14px] text-deep-burgundy transition-colors resize-none placeholder:text-deep-burgundy/40 focus:border-deep-burgundy focus:outline-none focus:ring-0 h-28"
                    id="message"
                    placeholder="Write your wishes and blessings..."
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    disabled={!urlName}
                  />
                </div>

                {/* Submit */}
                <button
                  className={`w-full py-4 bg-[#8b8076] text-white font-label-caps text-[12px] font-bold tracking-[0.2em] rounded-[24px] transition-colors duration-300 flex items-center justify-center gap-2 ${(isSubmitting || !urlName) ? 'opacity-70 cursor-not-allowed' : 'hover:bg-deep-burgundy'}`}
                  type="submit"
                  disabled={isSubmitting || !urlName}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[16px]">sync</span>
                      SUBMITTING...
                    </>
                  ) : 'SUBMIT'}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>

        {/* RIGHT: WISHES WALL */}
        <AnimatedSection delay={0.5} className="w-full flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-deep-burgundy/70">💌</span>
            <h3 className="font-cormorant text-2xl font-bold text-deep-burgundy">Ucapan & Doa</h3>
            <span className="text-[10px] font-bold tracking-wider text-deep-burgundy/40 uppercase">{allWishes.length} ucapan</span>
          </div>

          {allWishes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 border border-dashed border-deep-burgundy/20 rounded-lg text-center">
              <span className="material-symbols-outlined text-[36px] text-deep-burgundy/20 mb-2">chat</span>
              <p className="text-sm text-deep-burgundy/40 italic">Belum ada ucapan. Jadilah yang pertama!</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-deep-burgundy/20 scrollbar-track-transparent">
              {allWishes.map((g, i) => (
                <div key={i} className="bg-white/70 border border-deep-burgundy/10 rounded-xl p-4 relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-deep-burgundy/10 flex items-center justify-center text-deep-burgundy font-bold text-sm flex-shrink-0">
                        {g.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-cormorant font-bold text-deep-burgundy text-[15px]">{g.name}</span>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${g.attendance === 'attend' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                      {g.attendance === 'attend' ? '✓ Hadir' : '✗ Tidak'}
                    </span>
                  </div>
                  {/* Guest Wish */}
                  <p className="font-body-main text-[13px] text-deep-burgundy/80 italic leading-relaxed pl-10">"{g.wishes}"</p>
                  {/* Reply from Couple */}
                  {g.reply && (
                    <div className="mt-3 ml-10 bg-deep-burgundy/5 border-l-2 border-deep-burgundy/30 rounded-r-lg px-3 py-2">
                      <p className="text-[10px] font-bold text-deep-burgundy/50 uppercase tracking-widest mb-1">💌 Intan & Aldo</p>
                      <p className="text-[13px] text-deep-burgundy/80 italic">{g.reply}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>

      </div>
    </section>
  );
};
