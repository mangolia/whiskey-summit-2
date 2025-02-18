'use client';

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TastingSummaryStep() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Color</h2>
        <p className="text-gray-700 mb-4">
          Buffalo Trace exhibits a rich amber color with golden highlights, 
          characteristic of its careful aging process in oak barrels.
        </p>
      </section>

      <Separator className="h-[2px] bg-oaklore-blue/20" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Aroma (Nose)</h2>
        <p className="text-gray-700 mb-4">
          The nose reveals complex layers of:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Vanilla and caramel</li>
          <li>Oak and wood notes</li>
          <li>Hints of mint and complex spices</li>
        </ul>
      </section>

      <Separator className="h-[2px] bg-oaklore-blue/20" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Taste (Palate)</h2>
        <p className="text-gray-700 mb-4">
          The palate offers a harmonious blend of:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Rich vanilla and toffee</li>
          <li>Brown sugar and spice</li>
          <li>Subtle oak and char</li>
        </ul>
      </section>

      <Separator className="h-[2px] bg-oaklore-blue/20" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Finish</h2>
        <p className="text-gray-700 mb-4">
          The finish is characterized by:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Long, smooth finish</li>
          <li>Lingering warmth</li>
          <li>Pleasant oak and spice notes</li>
        </ul>
      </section>

      <div className="flex justify-center pt-8">
        <Button
          onClick={() => router.push('/')}
          className="px-8 py-4 text-lg"
        >
          Complete Tasting Experience
        </Button>
      </div>
    </div>
  );
} 