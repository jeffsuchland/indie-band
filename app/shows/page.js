'use client';

import Navigation from '../components/Navigation';
import Image from 'next/image';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';

export default function Shows() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleTicketClick = (venue) => {
    setModalTitle(`Tickets for ${venue}`);
    setIsModalOpen(true);
  };

  const upcomingShows = [
    {
      date: "May 15, 2025",
      venue: "The Woodland Theater",
      location: "Portland, OR",
      time: "8:00 PM",
      price: "$25",
      status: "On Sale",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
    },
    {
      date: "May 22, 2025",
      venue: "Echo Chamber",
      location: "Seattle, WA",
      time: "9:00 PM",
      price: "$30",
      status: "Limited",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781"
    },
    {
      date: "June 1, 2025",
      venue: "Moonlight Festival",
      location: "Vancouver, BC",
      time: "7:30 PM",
      price: "$45",
      status: "Early Bird",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"
    }
  ];

  const pastShows = [
    {
      date: "March 30, 2025",
      venue: "Dreamy Hollow",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
    },
    {
      date: "March 15, 2025",
      venue: "Starlight Lounge",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
    },
    {
      date: "February 28, 2025",
      venue: "The Crystal Room",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
            alt="Concert venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate/80 to-mauve/80" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-linen z-10">
          <h1 className="font-amatic font-bold text-6xl mb-6">Live Shows</h1>
          <p className="font-lato text-xl mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable evening of ethereal melodies and atmospheric soundscapes
          </p>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-amatic font-bold text-4xl mb-12 text-slate text-center">Upcoming Shows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingShows.map((show, index) => (
              <div key={index} className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-video">
                  <Image
                    src={show.image}
                    alt={show.venue}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-amatic font-bold text-3xl text-linen mb-1">{show.venue}</p>
                    <p className="font-lato text-sm text-linen/90">{show.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-lato font-bold text-slate">{show.date}</p>
                      <p className="font-lato text-sm text-slate/80">{show.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-lato font-bold text-mauve">{show.price}</p>
                      <p className="font-lato text-xs text-slate/80">{show.status}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTicketClick(show.venue)}
                    className="w-full bg-mauve text-linen px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-lato"
                  >
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Shows */}
      <section className="py-20 px-4 bg-slate/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-amatic font-bold text-4xl mb-12 text-slate text-center">Past Shows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastShows.map((show, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src={show.image}
                  alt={show.venue}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-amatic font-bold text-2xl text-linen mb-1">{show.venue}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-lato text-sm text-linen/90">{show.location}</p>
                    <p className="font-lato text-sm text-linen/80">{show.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-amatic font-bold text-4xl mb-6 text-slate">Never Miss a Show</h2>
          <p className="font-lato text-lg mb-8 text-slate">
            Subscribe to our newsletter for tour updates and exclusive presale access
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
                onClick={() => {
                  setModalTitle('Newsletter Subscription');
                  setIsModalOpen(true);
                }}
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
        title={modalTitle}
      />
    </main>
  );
}
