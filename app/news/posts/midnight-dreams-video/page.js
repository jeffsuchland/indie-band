'use client';

import Navigation from '../../../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import DemoModal from '../../../components/DemoModal';
import { useState } from 'react';

export default function BlogPost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 py-20">
        <Link 
          href="/news"
          className="inline-block mb-8 text-mauve hover:text-slate transition-colors duration-300 font-lato"
        >
          ← Back to News
        </Link>

        {/* Header */}
        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-mauve/90 text-linen rounded-full font-lato text-sm mb-4">
            Video Release
          </span>
          <h1 className="font-amatic font-bold text-5xl mb-4 text-slate">
            New Music Video: 'Midnight Dreams'
          </h1>
          <div className="flex items-center space-x-4 text-slate/60">
            <span className="font-lato">February 28, 2025</span>
            <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
            <span className="font-lato">2 min read</span>
          </div>
        </header>

        {/* Video Thumbnail */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <Image
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae"
            alt="Midnight Dreams Music Video"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-slate/50 group-hover:bg-slate/40 transition-colors duration-300 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-mauve/90 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-linen" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We're thrilled to share our latest music video for "Midnight Dreams," the second single from our upcoming album "Whispers of the Wild." Shot over three moonlit nights in the enchanting forests of the Pacific Northwest, this video captures the ethereal essence of the song and the magical landscapes that inspired it.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Behind the Vision</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Directed by acclaimed filmmaker Sarah Chen (no relation to River), the video follows a nocturnal journey through ancient forests, misty coastlines, and starlit meadows. Using a combination of traditional cinematography and innovative drone techniques, Sarah has created a dreamlike sequence that perfectly complements the song's atmospheric sound.
          </p>

          <div className="grid grid-cols-2 gap-6 my-12">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159"
                alt="Forest night scene"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5"
                alt="Starry sky"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Making Of</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Filming took place in three iconic Pacific Northwest locations:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="font-lato text-lg leading-relaxed text-slate">The ancient groves of Olympic National Park</li>
            <li className="font-lato text-lg leading-relaxed text-slate">The misty shores of Cannon Beach</li>
            <li className="font-lato text-lg leading-relaxed text-slate">The rolling hills of the Willamette Valley</li>
          </ul>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            The video features choreography by contemporary dancer Maya Williams, whose fluid movements embody the song's themes of transformation and natural cycles. Special thanks to our incredible crew who worked through the night to capture these magical moments.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden my-12">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
              alt="Behind the scenes"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Technical Details</h2>
          <div className="bg-white/5 rounded-lg p-6 my-6">
            <div className="space-y-4">
              <p className="font-lato text-slate"><strong>Director:</strong> Sarah Chen</p>
              <p className="font-lato text-slate"><strong>Cinematographer:</strong> Michael Torres</p>
              <p className="font-lato text-slate"><strong>Choreographer:</strong> Maya Williams</p>
              <p className="font-lato text-slate"><strong>Equipment:</strong> Shot on ARRI Alexa Mini with vintage anamorphic lenses</p>
              <p className="font-lato text-slate"><strong>Lighting:</strong> Natural moonlight supplemented with custom LED arrays</p>
              <p className="font-lato text-slate"><strong>Post-Production:</strong> Color grading by Lighthouse Studios</p>
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Watch Now</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            The music video is available now on our YouTube channel. Special thanks to everyone who helped bring this vision to life, and to our fans for their continued support. We hope this visual journey enhances your experience of "Midnight Dreams."
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-mauve text-linen px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato w-full"
          >
            Watch the Full Video
          </button>
        </div>

        {/* Author */}
        <footer className="mt-12 pt-12 border-t border-slate/20">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                alt="Luna Bennett"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-lato font-bold text-slate">Luna Bennett</h3>
              <p className="font-lato text-sm text-slate/60">Lead Vocalist, The Wandering Echoes</p>
            </div>
          </div>
        </footer>
      </article>

      <DemoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Video Player"
      />
    </main>
  );
}
