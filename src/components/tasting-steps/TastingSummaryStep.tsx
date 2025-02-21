'use client';

import { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TastingSummaryStep() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [noseHighlights, setNoseHighlights] = useState<readonly string[]>([]);
  const [tasteHighlights, setTasteHighlights] = useState<readonly string[]>([]);
  const [finishHighlights, setFinishHighlights] = useState<readonly string[]>([]);

  useEffect(() => {
    async function loadSummaryData() {
      try {
        // Load highlights from each step
        const { BUFFALO_TRACE_HIGHLIGHTS: noseData } = await import('@/data/scents');
        const { BUFFALO_TRACE_HIGHLIGHTS: tasteData } = await import('@/data/tastes');
        const { BUFFALO_TRACE_HIGHLIGHTS: finishData } = await import('@/data/finish');

        setNoseHighlights(noseData);
        setTasteHighlights(tasteData);
        setFinishHighlights(finishData);
      } catch (error) {
        console.error('Error loading summary data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSummaryData();
  }, []);

  if (isLoading) {
    return <div>Loading summary information...</div>;
  }

  return (
    <div className="space-y-8">
      <section>
        <p className="text-gray-700 mb-4">
          We hope you have enjoyed this exceptional whiskey, aged 4-6 years it is best enjoyed however you like to drink your whiskey
        </p>
      </section>

      <Separator className="h-[2px] bg-oaklore-blue/20" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Aroma (Nose)</h2>
        <p className="text-gray-700 mb-4">
          The nose reveals complex layers of:
        </p>
        <div className="flex flex-wrap gap-2 ml-4">
          {noseHighlights.map((highlight, index) => (
            <span 
              key={`nose-${index}`}
              className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <Separator className="h-[2px] bg-oaklore-blue/20" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Taste (Palate)</h2>
        <p className="text-gray-700 mb-4">
          The palate offers a harmonious blend of:
        </p>
        <div className="flex flex-wrap gap-2 ml-4">
          {tasteHighlights.map((highlight, index) => (
            <span 
              key={`taste-${index}`}
              className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <Separator className="h-[2px] bg-oaklore-blue/20" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">Finish</h2>
        <p className="text-gray-700 mb-4">
          The finish is characterized by:
        </p>
        <div className="flex flex-wrap gap-2 ml-4">
          {finishHighlights.map((highlight, index) => (
            <span 
              key={`finish-${index}`}
              className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
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