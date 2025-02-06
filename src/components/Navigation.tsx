'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
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
    <div className="relative" ref={menuRef}>
      {isOpen && (
        <div className="absolute right-0 bottom-16 w-48 bg-[rgb(134,56,12)] shadow-lg rounded-lg">
          {NAV_ITEMS.map((item) => (
            <Link key={item.title} href={item.href} className="block px-4 py-2 text-white hover:bg-[rgb(154,76,32)]">
              {item.title}
            </Link>
          ))}
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-4 hover:bg-gray-200 rounded-full"
      >
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </button>
    </div>
  );
} 