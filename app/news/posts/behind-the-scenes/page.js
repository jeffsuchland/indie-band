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
            Studio Update
          </span>
          <h1 className="font-amatic font-bold text-5xl mb-4 text-slate">
            Behind the Scenes: Recording at Echo Studio
          </h1>
          <div className="flex items-center space-x-4 text-slate/60">
            <span className="font-lato">April 1, 2025</span>
            <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
            <span className="font-lato">5 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
            alt="Recording studio session"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            As we wrap up another incredible session at Echo Studio, we wanted to share a glimpse into the creative process behind our latest album, "Whispers of the Wild." The historic Echo Studio, nestled in the heart of Portland's artistic district, has been our creative sanctuary for the past three months.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Perfect Space</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Echo Studio's main recording room, with its 20-foot ceilings and reclaimed wood walls, creates the perfect acoustic environment for our sound. The natural reverb of the room has become an instrument in itself, adding depth and warmth to our recordings that would be impossible to replicate digitally.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">New Sounds, New Directions</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            For this album, we've expanded our sonic palette with some unexpected instruments. Luna has been experimenting with a vintage Mellotron we found in the studio's collection, while River has incorporated a pedal steel guitar into several tracks. The result is a dreamy, atmospheric sound that pushes our music in exciting new directions.
          </p>

          <div className="grid grid-cols-2 gap-6 my-12">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42"
                alt="Studio equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7"
                alt="Recording session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Collaborative Spirit</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            One of the most exciting aspects of recording at Echo Studio has been the opportunity to collaborate with local artists. We've had the pleasure of working with the Portland Chamber Strings on two tracks, adding a lush orchestral element to our sound. The talented Sarah Chen (no relation to River) also joined us on violin for several sessions.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Looking Ahead</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            As we move into the final stages of mixing and mastering, we can't wait to share these new songs with you. The album captures both the intimate moments of our acoustic roots and the expansive soundscapes we've been exploring. Stay tuned for more updates and behind-the-scenes content as we prepare for the release.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden my-12">
            <Image
              src="https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17"
              alt="Studio wide shot"
              fill
              className="object-cover"
            />
          </div>

          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We're grateful for the support of our fans throughout this journey. Your messages and enthusiasm keep us inspired as we push ourselves creatively. We can't wait for you to hear what we've been working on.
          </p>
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
    </main>
  );
}
