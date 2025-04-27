'use client';

import Navigation from '../../../components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const collaborators = [
    {
      name: "Portland Chamber Strings",
      role: "String Ensemble",
      contribution: "Orchestral arrangements on three tracks",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6"
    },
    {
      name: "Sarah Chen",
      role: "Violinist",
      contribution: "Solo performances and string arrangements",
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212"
    },
    {
      name: "Marcus Rivera",
      role: "Percussion",
      contribution: "Traditional and experimental percussion",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7"
    },
    {
      name: "Emily Zhang",
      role: "Visual Artist",
      contribution: "Album artwork and tour visuals",
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212"
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
            Collaboration
          </span>
          <h1 className="font-amatic font-bold text-5xl mb-4 text-slate">
            Collaborating with Local Artists
          </h1>
          <div className="flex items-center space-x-4 text-slate/60">
            <span className="font-lato">February 15, 2025</span>
            <span className="w-1 h-1 bg-slate/30 rounded-full"></span>
            <span className="font-lato">4 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="Collaboration session"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Music has always been about community for us. As we've worked on our latest album, we've had the privilege of collaborating with some of the Pacific Northwest's most talented artists. These collaborations have not only enriched our sound but have also deepened our connection to the local music scene.
          </p>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">A Meeting of Minds</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            The idea for these collaborations emerged naturally during our recording sessions at Echo Studio. The studio has become a hub for local musicians, and the conversations and impromptu jam sessions that happened there led to some exciting creative partnerships.
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
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
                alt="Recording session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Our Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {collaborators.map((collaborator, index) => (
              <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-amatic font-bold text-2xl mb-2 text-slate">{collaborator.name}</h3>
                  <p className="font-lato text-sm text-mauve mb-2">{collaborator.role}</p>
                  <p className="font-lato text-slate/80">{collaborator.contribution}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">The Creative Process</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            Each collaboration brought something unique to the project. The Portland Chamber Strings added a rich orchestral dimension to our sound, while Marcus Rivera's innovative percussion techniques helped us explore new rhythmic territories. Sarah Chen's violin work brought an emotional depth to our ballads, and Emily Zhang's visual art has helped us create a complete multimedia experience.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden my-12">
            <Image
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745"
              alt="Collaboration in progress"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="font-amatic font-bold text-3xl text-slate mt-12 mb-6">Looking Ahead</h2>
          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            These collaborations have opened up new possibilities for our live performances. We're excited to announce that several of our collaborators will be joining us for special appearances during our upcoming summer tour. The Portland and Seattle shows will feature the full Chamber Strings ensemble, while other venues will showcase different combinations of our collaborative partners.
          </p>

          <div className="bg-white/5 rounded-lg p-6 my-12">
            <h3 className="font-amatic font-bold text-2xl text-slate mb-4">Upcoming Collaborative Performances</h3>
            <ul className="space-y-4">
              <li className="font-lato text-slate">
                <strong>June 15 - Portland:</strong> Full ensemble with Portland Chamber Strings
              </li>
              <li className="font-lato text-slate">
                <strong>June 18 - Seattle:</strong> Chamber Strings and Sarah Chen
              </li>
              <li className="font-lato text-slate">
                <strong>June 22 - Vancouver:</strong> Special percussion set with Marcus Rivera
              </li>
              <li className="font-lato text-slate">
                <strong>July 2 - Red Rocks:</strong> Full collaborative showcase
              </li>
            </ul>
          </div>

          <p className="font-lato text-lg leading-relaxed text-slate mb-6">
            We believe that music is at its best when it brings people together. These collaborations have not only enhanced our music but have also created lasting friendships and connections within our local arts community. We're grateful to all our collaborators for their contributions and can't wait to share the results with our fans.
          </p>
        </div>

        {/* Author */}
        <footer className="mt-12 pt-12 border-t border-slate/20">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7"
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
