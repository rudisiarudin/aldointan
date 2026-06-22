import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { supabase } from '../lib/supabase';

export const RSVP: React.FC = () => {
  const [attendance, setAttendance] = useState<'attend' | 'not_attend'>('attend');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('guests')
        .insert([
          { name, attendance, wishes }
        ]);

      if (error) throw error;
      
      setIsSuccess(true);
      setName('');
      setWishes('');
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Maaf, terjadi kesalahan saat mengirim RSVP. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surface-container-lowest py-20 px-4 md:px-margin-desktop relative snap-start min-h-[100dvh] flex flex-col justify-center" id="rsvp">
      <div className="max-w-md mx-auto">
        <AnimatedSection delay={0.2}>
          {/* RSVP Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-label-caps text-[12px] font-bold tracking-[0.2em] text-deep-burgundy/80">RSVP</span>
            <div className="flex-1 h-[1px] bg-deep-burgundy/20"></div>
          </div>

          {/* Title & Description */}
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-burgundy mb-6">WILL YOU ATTEND?</h2>
          <p className="font-body-main text-[13px] md:text-[14px] text-deep-burgundy/80 leading-relaxed mb-10">
            We kindly request your prompt response to confirm your attendance at our upcoming event. Alongside your RSVP, please take a moment to extend your warm regards and best wishes.
          </p>
        </AnimatedSection>
        
        {/* Form */}
        <AnimatedSection delay={0.4}>
          {isSuccess ? (
            <div className="bg-white/50 p-8 text-center border border-deep-burgundy/10 animate-[fadeIn_0.5s_ease-out]">
              <span className="material-symbols-outlined text-[48px] text-[#8b8076] mb-4">check_circle</span>
              <h3 className="font-cormorant text-2xl text-deep-burgundy mb-2 font-bold">Terima Kasih!</h3>
              <p className="font-body-main text-[13px] text-deep-burgundy/80">RSVP dan ucapan Anda telah berhasil kami terima.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 px-6 py-2 bg-transparent border border-deep-burgundy text-deep-burgundy font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-deep-burgundy hover:text-paper-white transition-all duration-500 rounded-full"
              >
                Kirim Lagi
              </button>
            </div>
          ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block font-label-caps text-[11px] font-bold tracking-wider text-deep-burgundy mb-2">NAME</label>
              <input 
                className="w-full bg-transparent border border-deep-burgundy/30 px-4 py-3 font-body-main text-[14px] text-deep-burgundy transition-colors placeholder:text-deep-burgundy/40 focus:border-deep-burgundy focus:outline-none focus:ring-0" 
                id="name" 
                placeholder="Guest Name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Attendance Buttons */}
            <div>
              <label className="block font-label-caps text-[11px] font-bold tracking-wider text-deep-burgundy mb-2">ATTENDANCE</label>
              <div className="flex gap-4">
                <button 
                  type="button" 
                  onClick={() => setAttendance('attend')}
                  className={`flex-1 py-3 border font-label-caps text-[11px] font-bold tracking-wider transition-colors duration-300 ${attendance === 'attend' ? 'bg-deep-burgundy text-white border-deep-burgundy' : 'bg-transparent text-deep-burgundy border-deep-burgundy/30 hover:border-deep-burgundy/60'}`}
                >
                  ATTEND
                </button>
                <button 
                  type="button" 
                  onClick={() => setAttendance('not_attend')}
                  className={`flex-1 py-3 border font-label-caps text-[11px] font-bold tracking-wider transition-colors duration-300 ${attendance === 'not_attend' ? 'bg-deep-burgundy text-white border-deep-burgundy' : 'bg-transparent text-deep-burgundy border-deep-burgundy/30 hover:border-deep-burgundy/60'}`}
                >
                  NOT ATTEND
                </button>
              </div>
            </div>

            {/* Wishes Input */}
            <div>
              <label className="block font-label-caps text-[11px] font-bold tracking-wider text-deep-burgundy mb-2">WISHES</label>
              <textarea 
                className="w-full bg-transparent border border-deep-burgundy/30 px-4 py-3 font-body-main text-[14px] text-deep-burgundy transition-colors resize-none placeholder:text-deep-burgundy/40 focus:border-deep-burgundy focus:outline-none focus:ring-0 h-32" 
                id="message" 
                placeholder="Write your wishes and blessings" 
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                className={`w-full py-4 bg-[#8b8076] text-white font-label-caps text-[12px] font-bold tracking-[0.2em] rounded-[24px] transition-colors duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-deep-burgundy'}`} 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[16px]">sync</span>
                    SUBMITTING...
                  </>
                ) : 'SUBMIT'}
              </button>
            </div>
          </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};
