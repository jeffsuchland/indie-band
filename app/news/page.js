'use client';

import Navigation from '../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';

export default function News() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredPost = {
    title: "New Album 'Whispers of the Wild' Out Now",
    date: "April 15, 2025",
    excerpt: "We're thrilled to announce the release of our third studio album, a journey through the mystical landscapes that shaped our sound.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    category: "Release",
    readTime: "3 min read",
    slug: "whispers-album-release"
  };

  const posts = [
    {
      title: "Behind the Scenes: Recording at Echo Studio",
      date: "April 1, 2025",
      excerpt: "Take a peek into our creative process as we record our latest album in the historic Echo Studio.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      category: "Studio Update",
      readTime: "5 min read",
      slug: "behind-the-scenes"
    },
    {
      title: "Summer Tour 2025 Announced",
      date: "March 20, 2025",
      excerpt: "Join us as we embark on our most extensive tour yet, bringing our music to cities across North America.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      category: "Tour News",
      readTime: "4 min read",
      slug: "summer-tour-2025"
    },
    {
      title: "Interview: The Evolution of Our Sound",
      date: "March 10, 2025",
      excerpt: "Luna and River sit down with Indie Music Monthly to discuss how our sound has evolved over the years.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      category: "Interview",
      readTime: "7 min read",
      slug: "sound-evolution-interview"
    },
    {
      title: "New Music Video: 'Midnight Dreams'",
      date: "February 28, 2025",
      excerpt: "Watch our latest music video, filmed in the enchanting forests of the Pacific Northwest.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      category: "Video Release",
      readTime: "2 min read",
      slug: "midnight-dreams-video"
    },
    {
      title: "Collaborating with Local Artists",
      date: "February 15, 2025",
      excerpt: "We're excited to announce our upcoming collaboration with several talented local artists.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      category: "Collaboration",
      readTime: "4 min read",
      slug: "local-artist-collab"
    },
    {
      title: "Acoustic Sessions: Live from the Forest",
      date: "January 30, 2025",
      excerpt: "Experience our songs in their most raw form with our new acoustic session recordings.",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6",
      category: "Performance",
      readTime: "3 min read",
      slug: "forest-acoustic-sessions"
    }
  ];

  const isPostAvailable = (slug) => {
    return [
      'behind-the-scenes',
      'summer-tour-2025',
      'sound-evolution-interview',
      'midnight-dreams-video',
      'local-artist-collab',
      'forest-acoustic-sessions'
    ].includes(slug);
  };

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section with Featured Post */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[600px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 pb-20 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-mauve/90 text-linen rounded-full font-lato text-sm mb-4">
                  {featuredPost.category}
                </span>
                <h1 className="font-amatic font-bold text-5xl md:text-7xl mb-4 text-linen">
                  {featuredPost.title}
                </h1>
                <p className="font-lato text-lg text-linen/90 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-linen/80">
                  <span className="font-lato text-sm">{featuredPost.date}</span>
                  <span className="w-1 h-1 bg-linen/50 rounded-full"></span>
                  <span className="font-lato text-sm">{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-amatic font-bold text-4xl mb-12 text-slate">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const PostWrapper = isPostAvailable(post.slug) ? Link : 'div';
              const wrapperProps = isPostAvailable(post.slug) 
                ? { href: `/news/posts/${post.slug}` }
                : { onClick: () => setIsModalOpen(true) };

              return (
                <PostWrapper
                  key={index}
                  {...wrapperProps}
                  className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-mauve/90 text-linen rounded-full font-lato text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-amatic font-bold text-2xl mb-2 text-slate group-hover:text-mauve transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="font-lato text-slate/80 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-slate/60">
                      <span className="font-lato text-sm">{post.date}</span>
                      <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
                      <span className="font-lato text-sm">{post.readTime}</span>
                    </div>
                  </div>
                </PostWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-slate/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-amatic font-bold text-4xl mb-6 text-slate">Stay Updated</h2>
          <p className="font-lato text-lg mb-8 text-slate">
            Subscribe to our newsletter for the latest news, behind-the-scenes content, and exclusive updates
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md bg-white/50 border border-slate/20 focus:outline-none focus:border-mauve transition-colors duration-300 font-lato"
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-slate text-linen px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      <DemoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Demo Feature"
      />
    </main>
  );
}
