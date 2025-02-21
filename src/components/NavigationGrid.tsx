'use client';

import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type NavigationItem = {
  title: string;
  href: string;
  description: string;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    title: 'Four Grain Bourbon',
    description: 'Explore this exceptional NC bourbon',
    href: '/buffalo-trace'
  },
  { 
    title: 'Whiskey Flavor Wheel',
    description: 'Explore the complex flavors of whiskey',
    href: '/flavor-wheel'
  },
  { 
    title: 'Whiskey Flavor Wheel 2',
    description: 'An alternative way to visualize whiskey flavors',
    href: '/flavor-wheel-2'
  }
];

export function NavigationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {NAVIGATION_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className="block group">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="w-full py-2 text-center font-medium text-sm bg-primary text-primary-foreground rounded-md group-hover:bg-primary/90">
                Explore
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
} 