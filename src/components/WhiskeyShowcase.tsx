'use client';

import { WhiskeyCard } from "./WhiskeyCard";

const FEATURED_WHISKEYS = [
  {
    title: 'Buffalo Trace',
    description: 'Kentucky Straight Bourbon Whiskey',
    age: '8 years',
    abv: '45%',
    origin: 'Kentucky, USA'
  },
  {
    title: 'Macallan 12',
    description: 'Single Malt Scotch Whisky',
    age: '12 years',
    abv: '43%',
    origin: 'Speyside, Scotland'
  },
  {
    title: 'Yamazaki',
    description: 'Japanese Single Malt Whisky',
    age: 'NAS',
    abv: '43%',
    origin: 'Japan'
  }
];

export function WhiskeyShowcase() {
  return (
    <div className="flex gap-4 mb-8 justify-center">
      {FEATURED_WHISKEYS.map((whiskey) => (
        <WhiskeyCard
          key={whiskey.title}
          {...whiskey}
          onLearnMore={() => console.log(`Learn more about ${whiskey.title}`)}
          onTasteNow={() => console.log(`Taste ${whiskey.title}`)}
        />
      ))}
    </div>
  );
} 