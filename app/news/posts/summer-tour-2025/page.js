'use client';

import Navigation from '../../../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const tourDates = [
    { date: "June 15", city: "Portland, OR", venue: "The Woodland Theater" },
    { date: "June 18", city: "Seattle, WA", venue: "Echo Chamber" },
    { date: "June 22", city: "Vancouver, BC", venue: "Moonlight Festival" },
    { date: "June 25", city: "San Francisco, CA", venue: "The Fillmore" },
    { date: "June 28", city: "Los Angeles, CA", venue: "The Wiltern" },
    { date: "July 2", city: "Denver, CO", venue: "Red Rocks Amphitheatre" },
    { date: "July 5", city: "Austin, TX", venue: "Stubb's BBQ" },
    { date: "July 8", city: "Nashville, TN", venue: "Ryman Auditorium" },
    { date: "July 12", city: "New York, NY", venue: "Brooklyn Steel" },
    { date: "July 15", city: "Montreal, QC", venue: "MTELUS" }
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
            Tour News
          </span>
          <h1 className="font-amatic font-bold text-5xl mb-4 text-slate">
            Summer Tour 2025 Announced
          </h1>
          <div className="flex items-center space-x-4 text-slate/60">
            <span className="font-lato">March 20, 2025</span>
            <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
            <span className="font-lato">4 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
            alt="Concert venue at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We're thrilled to announce our most extensive tour yet! This summer, we'll be bringing "Whispers of the Wild" to cities across North America. From intimate venues to iconic amphitheaters, we've crafted a journey that will showcase our music in unique and memorable settings.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Journey Ahead</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Starting in our hometown of Portland and winding our way across the continent, this tour represents a milestone for us. We'll be visiting some venues we've dreamed of playing since we first formed the band, including the legendary Red Rocks Amphitheatre and the historic Ryman Auditorium.
          </p>

          <div className="bg-white/5 rounded-lg p-6 my-12">
            <h3 className="font-amatic font-bold text-2xl text-slate mb-6">Tour Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tourDates.map((date, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="font-lato font-bold text-mauve">{date.date}</span>
                  </div>
                  <div>
                    <p className="font-lato font-bold text-slate">{date.city}</p>
                    <p className="font-lato text-sm text-slate/60">{date.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Special Performances</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We're excited to announce that several shows will feature extended sets with special acoustic performances and surprise guest appearances. The Red Rocks show will include a full string section, bringing a new dimension to songs from our latest album.
          </p>

          <div className="grid grid-cols-2 gap-6 my-12">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
                alt="Concert crowd"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
                alt="Stage lights"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Pre-sale Information</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Newsletter subscribers will have first access to tickets through our pre-sale, starting next week. General ticket sales begin the following Monday. Each show will have a limited number of VIP packages that include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="font-lato text-lg leading-relaxed text-slate">Early venue access</li>
            <li className="font-lato text-lg leading-relaxed text-slate">Exclusive acoustic pre-show performance</li>
            <li className="font-lato text-lg leading-relaxed text-slate">Limited edition tour poster</li>
            <li className="font-lato text-lg leading-relaxed text-slate">Meet and greet opportunity</li>
          </ul>

          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Stay tuned for more updates as we get closer to the tour dates. We can't wait to see you all this summer and share these songs with you in person!
          </p>
        </div>

        {/* Author */}
        <footer className="mt-12 pt-12 border-t border-slate/20">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
                alt="River Chen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-lato font-bold text-slate">River Chen</h3>
              <p className="font-lato text-sm text-slate/60">Lead Guitarist, The Wandering Echoes</p>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
