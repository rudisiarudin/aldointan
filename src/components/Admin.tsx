import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const Admin: React.FC = () => {
  const [guests, setGuests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyDrafts, setReplyDrafts] = useState<Record<string, string>>({});
  const [savingId, setSavingId] = useState<string | null>(null);

  // WA Generator Form State
  const [guestName, setGuestName] = useState('');
  const [prefix, setPrefix] = useState('Bapak/Ibu/Saudara/i');

  const domain = window.location.origin;

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('guests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching guests:', error);
    } else {
      setGuests(data || []);
      // pre-fill reply drafts
      const drafts: Record<string, string> = {};
      data?.forEach((g: any) => {
        if (g.reply) drafts[g.id] = g.reply;
      });
      setReplyDrafts(drafts);
    }
    setLoading(false);
  };

  const handleSaveReply = async (guestId: string) => {
    const replyText = replyDrafts[guestId] || '';
    setSavingId(guestId);
    const { error } = await supabase
      .from('guests')
      .update({ reply: replyText })
      .eq('id', guestId);

    if (error) {
      alert('Gagal menyimpan balasan. Coba lagi.');
      console.error(error);
    } else {
      // update local state
      setGuests(prev => prev.map(g => g.id === guestId ? { ...g, reply: replyText } : g));
    }
    setSavingId(null);
  };

  const generatedLink = `${domain}/?nama=${encodeURIComponent(guestName.trim())}`;
  const generatedMessage = `Bismillahirahmanirrahim.
Assalamu'alaikum Warahmatullahi Wabarakatuh.

Tanpa mengurangi rasa hormat, perkenankan kami mengundang ${prefix} ${guestName.trim()} untuk hadir dan memberikan doa restu pada acara pernikahan kami.

Detail acara dapat dilihat pada tautan berikut:
${generatedLink}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila ${prefix} berkenan hadir.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
Hormat kami,
Intan & Aldo`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    alert('Pesan berhasil disalin!');
  };

  const handleSendWA = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(generatedMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] p-6 md:p-12 font-body-main text-deep-burgundy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-cormorant text-5xl font-bold text-deep-burgundy mb-1">Admin Dashboard</h1>
          <p className="text-sm text-deep-burgundy/50">Intan & Aldo Wedding — Panel Pengelola</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* WA Generator Section */}
          <div className="bg-white p-6 md:p-8 shadow-sm border border-deep-burgundy/10 rounded-2xl">
            <h2 className="font-cormorant text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[22px]">send</span> WhatsApp Generator
            </h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold tracking-wider text-deep-burgundy/70 mb-2 uppercase">Sebutan / Prefix</label>
                <select
                  className="w-full bg-transparent border border-deep-burgundy/30 px-4 py-2.5 text-sm outline-none focus:border-deep-burgundy rounded-lg"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                >
                  <option value="Bapak/Ibu/Saudara/i">Bapak/Ibu/Saudara/i</option>
                  <option value="Bapak">Bapak</option>
                  <option value="Ibu">Ibu</option>
                  <option value="Saudara">Saudara</option>
                  <option value="Saudari">Saudari</option>
                  <option value="Teman-teman">Teman-teman</option>
                  <option value="">(Tanpa Sebutan)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider text-deep-burgundy/70 mb-2 uppercase">Nama Tamu</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-deep-burgundy/30 px-4 py-2.5 text-sm outline-none focus:border-deep-burgundy rounded-lg"
                  placeholder="Contoh: Budi Santoso"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold tracking-wider text-deep-burgundy/70 mb-2 uppercase">Preview Pesan</label>
              <div className="w-full bg-[#FDF8F3] border border-deep-burgundy/20 px-4 py-3 text-sm rounded-lg min-h-[200px] whitespace-pre-wrap text-deep-burgundy/80">
                {guestName.trim() ? generatedMessage : 'Masukkan nama tamu untuk melihat preview pesan.'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopy}
                disabled={!guestName.trim()}
                className="flex-1 bg-[#FDF8F3] border border-deep-burgundy text-deep-burgundy py-3 rounded-lg font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-deep-burgundy hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed uppercase"
              >
                <span className="material-symbols-outlined text-[18px]">content_copy</span> Copy
              </button>
              <button
                onClick={handleSendWA}
                disabled={!guestName.trim()}
                className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#128C7E] transition disabled:opacity-50 disabled:cursor-not-allowed uppercase border-none"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span> Kirim WA
              </button>
            </div>
          </div>

          {/* RSVP & Wishes List */}
          <div className="bg-white p-6 md:p-8 shadow-sm border border-deep-burgundy/10 rounded-2xl flex flex-col" style={{ maxHeight: '800px' }}>
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-cormorant text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[22px]">groups</span> Daftar RSVP & Balasan
              </h2>
              <button onClick={fetchGuests} className="p-2 bg-[#FDF8F3] rounded-full hover:bg-deep-burgundy hover:text-white transition flex items-center justify-center" title="Refresh">
                <span className="material-symbols-outlined text-[16px]">refresh</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-4 min-h-0">
              {loading ? (
                <div className="text-center py-10 text-deep-burgundy/50">Loading data...</div>
              ) : guests.length === 0 ? (
                <div className="text-center py-10 text-deep-burgundy/50">Belum ada tamu yang mengisi RSVP.</div>
              ) : (
                guests.map((guest) => (
                  <div key={guest.id} className="border border-deep-burgundy/10 rounded-xl p-4 bg-[#FDF8F3]">
                    {/* Guest Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-deep-burgundy/10 flex items-center justify-center text-deep-burgundy font-bold text-sm flex-shrink-0">
                          {guest.name.charAt(0).toUpperCase()}
                        </div>
                        <h3 className="font-cormorant font-bold text-lg">{guest.name}</h3>
                      </div>
                      <span className={`text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${guest.attendance === 'attend' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {guest.attendance === 'attend' ? '✓ Hadir' : '✗ Tidak'}
                      </span>
                    </div>

                    {/* Wishes */}
                    {guest.wishes && (
                      <p className="text-sm text-deep-burgundy/80 italic bg-white p-3 rounded-lg border border-deep-burgundy/5 mb-3">
                        💬 "{guest.wishes}"
                      </p>
                    )}

                    {/* Existing reply badge */}
                    {guest.reply && (
                      <div className="text-xs text-deep-burgundy/60 bg-white border border-deep-burgundy/10 rounded-lg px-3 py-2 mb-3 flex gap-2">
                        <span className="font-bold text-deep-burgundy/40">Balasan tersimpan:</span>
                        <span className="italic">{guest.reply}</span>
                      </div>
                    )}

                    {/* Reply Input */}
                    {guest.wishes && (
                      <div className="flex gap-2 items-end">
                        <textarea
                          rows={2}
                          className="flex-1 text-sm border border-deep-burgundy/20 rounded-lg px-3 py-2 resize-none outline-none focus:border-deep-burgundy bg-white placeholder:text-deep-burgundy/30"
                          placeholder={`Balas ucapan ${guest.name}...`}
                          value={replyDrafts[guest.id] ?? (guest.reply || '')}
                          onChange={(e) => setReplyDrafts(prev => ({ ...prev, [guest.id]: e.target.value }))}
                        />
                        <button
                          onClick={() => handleSaveReply(guest.id)}
                          disabled={savingId === guest.id}
                          className="px-4 py-2 bg-deep-burgundy text-white text-xs font-bold rounded-lg flex items-center gap-1 hover:bg-deep-burgundy/80 transition disabled:opacity-50 flex-shrink-0 h-fit"
                        >
                          {savingId === guest.id ? (
                            <span className="material-symbols-outlined animate-spin text-[14px]">sync</span>
                          ) : (
                            <span className="material-symbols-outlined text-[14px]">send</span>
                          )}
                          Kirim
                        </button>
                      </div>
                    )}

                    <p className="text-[10px] text-deep-burgundy/30 mt-3 text-right">
                      {new Date(guest.created_at).toLocaleString('id-ID')}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
