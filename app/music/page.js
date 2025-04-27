'use client';

import Navigation from '../components/Navigation';
import Image from 'next/image';
import AudioPlayer from '../components/AudioPlayer';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';

export default function Music() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handlePlaylistClick = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const albums = [
    {
      title: "Whispers of the Wild",
      year: "2025",
      coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
      description: "Our latest album exploring the untamed landscapes of the Pacific Northwest",
      audioUrl: "/audio/whispers-of-the-wild.mp3"
    },
    {
      title: "Midnight Reverie",
      year: "2024",
      coverUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1",
      description: "A collection of dream-pop ballads inspired by starlit nights",
      audioUrl: "/audio/midnight-reverie.mp3"
    },
    {
      title: "Echo Chamber",
      year: "2023",
      coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
      description: "Our debut album featuring acoustic-driven melodies",
      audioUrl: "/audio/echo-chamber.mp3"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae"
            alt="Music studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate/80 to-mauve/80" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-linen z-10">
          <h1 className="font-amatic font-bold text-6xl mb-6">Our Music</h1>
          <p className="font-lato text-xl mb-8 max-w-2xl mx-auto">
            Explore our discography, from our latest releases to the songs that started it all
          </p>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <div key={index} className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-square">
                  <Image
                    src={album.coverUrl}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-amatic font-bold text-3xl mb-2 text-slate">{album.title}</h3>
                  <p className="text-sm text-slate/80 mb-3">{album.year}</p>
                  <p className="font-lato text-slate mb-4">{album.description}</p>
                  <AudioPlayer audioUrl={album.audioUrl} title={album.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-20 px-4 bg-slate/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-amatic font-bold text-4xl mb-12 text-slate text-center">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
              onClick={() => handlePlaylistClick('Live Performances')}
              className="relative aspect-[2/1] rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-mauve focus:ring-offset-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                alt="Live Performances"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent group-hover:from-slate/90 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-amatic font-bold text-3xl mb-2 text-linen">Live Performances</h3>
                <p className="font-lato text-linen/90">Our most memorable moments on stage</p>
              </div>
            </button>
            <button 
              onClick={() => handlePlaylistClick('Acoustic Sessions')}
              className="relative aspect-[2/1] rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-mauve focus:ring-offset-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1485579149621-3123dd979885"
                alt="Acoustic Sessions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent group-hover:from-slate/90 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-amatic font-bold text-3xl mb-2 text-linen">Acoustic Sessions</h3>
                <p className="font-lato text-linen/90">Stripped-down versions of our favorite tracks</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <DemoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </main>
  );
}
