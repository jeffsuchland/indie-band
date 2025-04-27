'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ audioUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
      });

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', () => {});
          audioRef.current.removeEventListener('timeupdate', () => {});
        }
      };
    }
  }, [audioRef]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration;
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full">
      <audio ref={audioRef} src={audioUrl} />
      <div className="flex items-center justify-between mb-4">
        <span className="font-lato text-sm text-slate">{title}</span>
        <div className="flex items-center space-x-2">
          <span className="font-lato text-xs text-slate">{formatTime(currentTime)}</span>
          <span className="font-lato text-xs text-slate">/</span>
          <span className="font-lato text-xs text-slate">{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="bg-mauve text-linen w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="flex-1 h-2 bg-slate/20 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #B19CD9 0%, #B19CD9 ${
              (currentTime / duration) * 100
            }%, rgba(72, 86, 101, 0.2) ${(currentTime / duration) * 100}%, rgba(72, 86, 101, 0.2) 100%)`
          }}
        />
      </div>
    </div>
  );
}
