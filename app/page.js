'use client';

import Navigation from './components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import DemoModal from './components/DemoModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            alt="Concert atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate/60 to-mauve/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative text-center text-linen z-10 px-4">
          <h1 className="font-amatic font-bold text-6xl md:text-8xl mb-4 animate-fade-in">
            The Wandering Echoes
          </h1>
          <p className="font-lato text-xl md:text-2xl mb-8 text-linen opacity-90">
            Ethereal melodies for wandering souls
          </p>
          <Link 
            href="/music"
            className="inline-block bg-mauve text-linen px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato text-lg"
          >
            Listen Now
          </Link>
        </div>
      </section>

      {/* Featured Song Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="font-amatic font-bold text-4xl mb-6 text-slate">Latest Release</h2>
            <div className="aspect-video relative rounded-lg mb-6 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                alt="Music video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate/20 hover:bg-slate/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-linen font-lato text-lg">Play Video</span>
              </div>
            </div>
            <h3 className="font-amatic font-bold text-2xl mb-2 text-slate">Whispers of the Wild</h3>
            <p className="font-lato text-lg mb-6 text-slate">
              A journey through misty forests and moonlit valleys
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-mauve text-linen px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato"
            >
              Watch Full Video
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-slate/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <Image
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae"
                alt="Band performance"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate/50 group-hover:bg-slate/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-mauve/90 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-linen" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-amatic text-4xl font-bold text-slate mb-4">Latest Music Video</h2>
              <p className="font-lato text-lg text-slate/80 mb-6">
                Experience our latest single "Midnight Dreams" in a stunning visual journey through the Pacific Northwest.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-mauve text-linen px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato"
              >
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-amatic text-4xl font-bold text-slate mb-4">Our Story</h2>
              <p className="font-lato text-lg text-slate/80 mb-6">
                From humble beginnings in Portland's indie scene to enchanting audiences across the Pacific Northwest, our journey has been one of musical exploration and growth.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-mauve text-linen px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato"
              >
                Read More
              </Link>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec"
                alt="Band members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <DemoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Video Player"
      />

      {/* Footer */}
      <footer className="bg-slate text-linen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-amatic font-bold text-2xl mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-mauve transition-colors">Spotify</a>
                <a href="#" className="block hover:text-mauve transition-colors">Apple Music</a>
                <a href="#" className="block hover:text-mauve transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="font-amatic font-bold text-2xl mb-4">Contact</h3>
              <p className="mb-2">For bookings and inquiries:</p>
              <a href="mailto:contact@wanderingechoes.com" className="hover:text-mauve transition-colors">
                contact@wanderingechoes.com
              </a>
            </div>
            <div>
              <h3 className="font-amatic font-bold text-2xl mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest releases and shows</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded bg-linen/10 text-linen placeholder-linen/60"
                />
                <button type="submit" className="bg-mauve text-linen px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato w-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-linen/20">
            <p>&copy; {new Date().getFullYear()} The Wandering Echoes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
