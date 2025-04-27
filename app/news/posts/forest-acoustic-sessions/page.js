'use client';

import Navigation from '../../../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import DemoModal from '../../../components/DemoModal';
import { useState } from 'react';

export default function BlogPost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sessions = [
    {
      title: "Morning Light",
      location: "Olympic National Forest",
      description: "Recorded at dawn among ancient cedars",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6"
    },
    {
      title: "Ocean's Edge",
      location: "Cannon Beach",
      description: "Sunset session by the Pacific",
      image: "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7"
    },
    {
      title: "Mountain Echo",
      location: "Mount Hood",
      description: "Captured in a natural amphitheater",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    }
  ];

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
            Performance
          </span>
          <h1 className="font-amatic font-bold text-5xl mb-4 text-slate">
            Acoustic Sessions: Live from the Forest
          </h1>
          <div className="flex items-center space-x-4 text-slate/60">
            <span className="font-lato">January 30, 2025</span>
            <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
            <span className="font-lato">3 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6"
            alt="Forest acoustic session"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            There's something magical about stripping a song down to its essence. Over the past month, we've been recording acoustic versions of songs from our catalog in some of the Pacific Northwest's most breathtaking natural locations. Today, we're excited to share these intimate performances with you.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Concept</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            The idea for these sessions came during a hiking trip last fall. We found ourselves humming our songs while walking through the forest, and the natural reverb of the environment added something special to the melodies. We decided to capture that magic properly, with just acoustic instruments and the sounds of nature as our backdrop.
          </p>

          <div className="grid grid-cols-1 gap-6 my-12">
            {sessions.map((session, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="font-amatic font-bold text-2xl text-linen mb-2">{session.title}</h3>
                    <p className="font-lato text-sm text-linen/90 mb-1">{session.location}</p>
                    <p className="font-lato text-sm text-linen/80">{session.description}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-mauve/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-linen" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Process</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Recording in nature presents unique challenges. We worked with our sound engineer to develop a mobile recording setup that could capture both the intimacy of the performances and the natural ambience of each location. Each session was recorded at specific times of day to capture optimal natural light and minimize ambient noise.
          </p>

          <div className="bg-white/5 rounded-lg p-6 my-12">
            <h3 className="font-amatic font-bold text-2xl text-slate mb-4">Equipment Used</h3>
            <ul className="space-y-2">
              <li className="font-lato text-slate"><strong>Guitars:</strong> Martin D-28 (1967), Gibson J-45</li>
              <li className="font-lato text-slate"><strong>Microphones:</strong> Neumann KM 184 pair, DPA 4060</li>
              <li className="font-lato text-slate"><strong>Mobile Recording:</strong> Sound Devices MixPre-6 II</li>
              <li className="font-lato text-slate"><strong>Additional:</strong> Custom windscreens, solar power bank</li>
            </ul>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Songs</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We chose songs that we felt would benefit most from this stripped-down treatment. Some tracks revealed new meanings in this context, while others simply confirmed the strength of their original composition. The sessions include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="font-lato text-lg leading-relaxed text-slate">"Midnight Dreams" - Dawn version</li>
            <li className="font-lato text-lg leading-relaxed text-slate">"Echo Chamber" - Reimagined with nature's reverb</li>
            <li className="font-lato text-lg leading-relaxed text-slate">"Wild Heart" - Extended improvisation</li>
            <li className="font-lato text-lg leading-relaxed text-slate">"Pacific Lullaby" - With wave accompaniment</li>
          </ul>

          <div className="relative aspect-video rounded-lg overflow-hidden my-12">
            <Image
              src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714"
              alt="Behind the scenes"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Watch the Sessions</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We'll be releasing one session video each week throughout February. Each video includes the performance, behind-the-scenes footage, and short interviews about the location and song choices.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-mauve text-linen px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato w-full"
          >
            Watch the First Session
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
