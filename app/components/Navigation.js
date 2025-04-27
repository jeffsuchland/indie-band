'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-linen/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="font-amatic font-bold text-3xl text-slate hover:text-mauve transition-colors duration-300"
          >
            The Wandering Echoes
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['Music', 'About', 'Shows', 'News', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-lato text-slate hover:text-mauve transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden p-2 rounded-md text-slate hover:text-mauve transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {['Music', 'About', 'Shows', 'News', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block py-2 px-4 font-lato text-slate hover:text-mauve hover:bg-slate/5 rounded-md transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
