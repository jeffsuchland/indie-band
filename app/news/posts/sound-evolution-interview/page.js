'use client';

import Navigation from '../../../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
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
            Interview
          </span>
          <h1 className="font-amatic font-bold text-5xl mb-4 text-slate">
            Interview: The Evolution of Our Sound
          </h1>
          <div className="flex items-center space-x-4 text-slate/60">
            <span className="font-lato">March 10, 2025</span>
            <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
            <span className="font-lato">7 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
            alt="Luna and River in the studio"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="font-lato text-lg leading-relaxed text-slate mb-6 italic">
            In this exclusive interview with Indie Music Monthly, Luna Bennett and River Chen discuss their musical journey, the evolution of The Wandering Echoes' sound, and their vision for the future.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Early Days</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>IMM: Let's start at the beginning. How did The Wandering Echoes come together?</strong>
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>Luna:</strong> River and I met at an open mic night in Portland back in 2020. I was performing some folk songs, and River was there with his electric guitar. We got talking about our influences – everything from Fleet Foxes to Radiohead – and realized we shared a vision for creating something that bridged the gap between folk intimacy and atmospheric rock.
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>River:</strong> Yeah, that first conversation lasted until sunrise. We started jamming together the next day, and the sound just clicked immediately. The name came from that first session – the way our sounds were bouncing off the walls of my tiny apartment, creating these beautiful echoes.
          </p>

          <div className="grid grid-cols-2 gap-6 my-12">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                alt="Studio session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714"
                alt="Acoustic performance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Finding Our Voice</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>IMM: Your first album had a distinctly folk sound. How has that evolved?</strong>
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>River:</strong> Our roots are definitely in folk music, but we've always been drawn to experimentation. With each album, we've pushed ourselves to incorporate new elements while staying true to our storytelling core.
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>Luna:</strong> The change has been organic. We started adding more layers, more textures. Working with different producers opened our eyes to new possibilities. By our second album, we were incorporating electronic elements, string arrangements, even field recordings from our travels.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The New Album</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>IMM: "Whispers of the Wild" feels like your most ambitious work yet. What inspired this direction?</strong>
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>Luna:</strong> We spent a lot of time in nature during the writing process. The Pacific Northwest has this incredible energy – the forests, the coast, the mountains. We wanted to capture that vastness in our sound.
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>River:</strong> We also invested in some vintage equipment that really shaped the sound. There's this old Mellotron that features heavily on the album, and we used tape delays and analog synths to create these lush, organic textures.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden my-12">
            <Image
              src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6"
              alt="Band performing"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Looking Forward</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>IMM: What's next for The Wandering Echoes?</strong>
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>Luna:</strong> We're really excited about the upcoming tour. We've arranged the new songs to be even more expansive live, with some special guests joining us at certain venues.
          </p>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            <strong>River:</strong> And we're already collecting ideas for the next album. We've been experimenting with different time signatures, unconventional song structures. The journey continues.
          </p>

          <div className="bg-white/5 rounded-lg p-6 my-12">
            <h3 className="font-amatic font-bold text-2xl text-slate mb-4">Quick Takes</h3>
            <div className="space-y-4">
              <p className="font-lato text-slate"><strong>Favorite venue:</strong> Red Rocks Amphitheatre (Luna), The Fillmore (River)</p>
              <p className="font-lato text-slate"><strong>Dream collaboration:</strong> Bon Iver (Luna), Jonny Greenwood (River)</p>
              <p className="font-lato text-slate"><strong>Current listening:</strong> Big Thief, Adrianne Lenker (Luna), Olafur Arnalds (River)</p>
              <p className="font-lato text-slate"><strong>Essential gear:</strong> 1967 Martin D-28 (Luna), Vintage Jazzmaster (River)</p>
            </div>
          </div>
        </div>

        {/* Author */}
        <footer className="mt-12 pt-12 border-t border-slate/20">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Alex Thompson"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-lato font-bold text-slate">Alex Thompson</h3>
              <p className="font-lato text-sm text-slate/60">Senior Editor, Indie Music Monthly</p>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
