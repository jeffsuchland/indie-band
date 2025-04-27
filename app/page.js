import Navigation from './components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
            <button className="bg-mauve text-linen px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato">
              Watch Full Video
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-slate/5 relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6"
            alt="Band background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="font-amatic font-bold text-4xl mb-6 text-slate text-center">Our Story</h2>
          <p className="font-lato text-lg mb-6 text-slate leading-relaxed">
            The Wandering Echoes emerged from the misty corners of the Pacific Northwest, 
            where dreams and reality intertwine. Our music weaves together threads of 
            folk tradition with modern dream-pop sensibilities, creating a tapestry of 
            sound that reflects the landscapes that inspired us.
          </p>
          <div className="text-center">
            <button className="bg-slate text-linen px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato">
              Read More
            </button>
          </div>
        </div>
      </section>

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
