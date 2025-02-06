import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-8">Oaklore Whiskey Experience</h1>
      <main className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-2 gap-8">
          <Link href="/tasting-notes" className="block">
            <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
                Tasting Notes
              </h2>
            </div>
          </Link>
          
          <Link href="/buffalo-trace" className="block">
            <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
                Buffalo Trace Whiskey
              </h2>
            </div>
          </Link>
          
          <Link href="/whiskey-history" className="block">
            <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
                Whiskey History
              </h2>
            </div>
          </Link>
          
          <Link href="/barrel-aging" className="block">
            <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
                Barrel Aging
              </h2>
            </div>
          </Link>

          <Link href="/flavor-wheel" className="block">
            <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
                Whiskey Flavor Wheel
              </h2>
            </div>
          </Link>

          <Link href="/flavor-wheel-2" className="block">
            <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
              <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
                Whiskey Flavor Wheel 2
              </h2>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
