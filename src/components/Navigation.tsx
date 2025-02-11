'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { title: 'Match Game', href: '/match-game' },
  { title: 'Tasting Notes', href: '/tasting-notes' },
  { title: 'Buffalo Trace Whiskey', href: '/buffalo-trace' },
  { title: 'Whiskey History', href: '/whiskey-history' },
  { title: 'Barrel Aging', href: '/barrel-aging' },
  { title: 'Admin', href: '/admin' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-5 items-center px-4">
      <Link href="/" className="flex justify-center">
        <div className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      </Link>
      
      {/* Empty spaces for future icons */}
      <div className="flex justify-center">
        {/* Icon 2 placeholder */}
      </div>
      <div className="flex justify-center">
        {/* Icon 3 placeholder */}
      </div>
      <div className="flex justify-center">
        {/* Icon 4 placeholder */}
      </div>
      
      <div className="flex justify-center" ref={menuRef}>
        {isOpen && (
          <div className="absolute right-4 bottom-16 w-48 bg-[rgb(134,56,12)] shadow-lg rounded-lg">
            {NAV_ITEMS.map((item) => (
              <Link key={item.title} href={item.href} className="block px-4 py-2 text-white hover:bg-[rgb(154,76,32)]">
                {item.title}
              </Link>
            ))}
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>
    </div>
  );
} 