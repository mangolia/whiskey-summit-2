import * as React from 'react';
const { useState, useEffect, useMemo } = React;

type WhiskeyScent = string;
type Scent = {
  name: string;
  color: string;
  isHighlighted?: boolean;
};

type ScentCategory = {
  category: string;
  scents: Scent[];
};

interface NoseStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function NoseStep({ 
  onNext, 
  onPrevious,
  isFirst = false,
  isLast = false 
}: NoseStepProps) {
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [scentCategories, setScentCategories] = useState<ScentCategory[]>([]);
  const [highlights, setHighlights] = useState<WhiskeyScent[]>([]);

  useEffect(() => {
    async function loadNoseData() {
      try {
        // Load step data
        const { buffaloTraceTasting } = await import('@/data/tastings/buffaloTrace');
        const noseStep = buffaloTraceTasting.steps.find(step => step.id === 'nose');
        if (noseStep) {
          setDescription(noseStep.description);
        }

        // Load scent data
        const { WHISKEY_SCENTS, BUFFALO_TRACE_HIGHLIGHTS } = await import('@/data/scents');
        setScentCategories(WHISKEY_SCENTS.map(category => ({
          ...category,
          scents: [...category.scents]
        })));
        setHighlights([...BUFFALO_TRACE_HIGHLIGHTS]);
      } catch (error) {
        console.error('Error loading nose data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadNoseData();
  }, []);

  // Memoize the highlights to prevent recreation on each render
  const renderHighlights = useMemo(() => (
    <div className="flex flex-wrap gap-2">
      {highlights.map((scent: WhiskeyScent, index: number) => (
        <span 
          key={`highlight-${scent}-${index}`} 
          className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
        >
          {scent}
        </span>
      ))}
    </div>
  ), [highlights]);

  if (isLoading) {
    return <div>Loading aroma information...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onPrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <p className="text-black flex-1 text-center">{description}</p>

          <button
            onClick={onNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-black mb-3">Key Aromas in Buffalo Trace:</h3>
          {renderHighlights}
        </div>
        
        <div className="space-y-8">
          {scentCategories.map((category: ScentCategory, index: number) => (
            <div key={`category-${category.category}-${index}`} className="space-y-3">
              <h3 className="text-xl font-semibold text-black">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.scents.map((scent: Scent, scentIndex: number) => (
                  <div 
                    key={`scent-${scent.name}-${scentIndex}`}
                    className={`p-3 rounded-lg border text-center text-black hover:opacity-80 transition-opacity
                      ${scent.isHighlighted 
                        ? 'border-[rgb(134,56,12)] border-2' 
                        : 'border-gray-200'}`}
                    style={{ backgroundColor: scent.color }}
                  >
                    {scent.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 