import React, { useState, useRef, useEffect } from 'react';

interface MusicPlayerProps {
  isVisible?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isVisible = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const wasPlayingRef = useRef(false);

  useEffect(() => {
    const handlePlayMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    };
    window.addEventListener('playMusic', handlePlayMusic);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && !audioRef.current.paused) {
          wasPlayingRef.current = true;
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          wasPlayingRef.current = false;
        }
      } else {
        if (wasPlayingRef.current && audioRef.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('playMusic', handlePlayMusic);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/assets/Lula Band - Cant take my eyes off you - Cover.mp3" type="audio/mpeg" />
      </audio>
      {isVisible && (
        <button 
          onClick={toggleMusic}
          aria-label="Toggle musik"
          className={`fixed bottom-5 right-5 z-[999] bg-[#7B2020] text-white border-none rounded-full w-12 h-12 text-[22px] cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center ${isPlaying ? 'music-playing' : ''}`}
        >
          ♪
        </button>
      )}
    </>
  );
};
