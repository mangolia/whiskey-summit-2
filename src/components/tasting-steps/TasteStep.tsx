import React, { useState, useEffect } from 'react';

type WhiskeyTaste = string;
type Taste = {
  readonly name: string;
  readonly color: string;
  readonly isHighlighted?: boolean;
};

type TasteCategory = {
  readonly category: string;
  readonly subCategories?: readonly {
    readonly name: string;
    readonly tastes: readonly Taste[];
  }[];
  readonly tastes?: readonly Taste[];
};

interface TasteStepProps {
  description: string;
  onNext: () => void;
  onPrevious: () => void;
}

export default function TasteStep({ 
  description, 
  onNext,
  onPrevious
}: TasteStepProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [tasteCategories, setTasteCategories] = useState<readonly TasteCategory[]>([]);
  const [highlights, setHighlights] = useState<readonly WhiskeyTaste[]>([]);
  const [stepDescription, setStepDescription] = useState(description);

  useEffect(() => {
    async function loadTasteData() {
      try {
        // Load step data
        const { buffaloTraceTasting } = await import('@/data/tastings/buffaloTrace');
        const tasteStep = buffaloTraceTasting.steps.find(step => step.id === 'taste');
        if (tasteStep) {
          setStepDescription(tasteStep.description);
        }

        // Load taste data
        const { WHISKEY_TASTES, BUFFALO_TRACE_HIGHLIGHTS } = await import('@/data/tastes');
        setTasteCategories(WHISKEY_TASTES);
        setHighlights(BUFFALO_TRACE_HIGHLIGHTS);
      } catch (error) {
        console.error('Error loading taste data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTasteData();
  }, []);

  const renderHighlights = React.useMemo(() => (
    <div className="flex flex-wrap gap-2">
      {highlights.map((taste, index) => (
        <span 
          key={`highlight-${taste}-${index}`} 
          className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
        >
          {taste}
        </span>
      ))}
    </div>
  ), [highlights]);

  if (isLoading) {
    return <div>Loading taste information...</div>;
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

          <p className="text-black flex-1 text-center">{stepDescription}</p>

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
          <h3 className="text-lg font-semibold text-black mb-3">Key Flavors in Buffalo Trace:</h3>
          {renderHighlights}
        </div>
        
        <div className="space-y-8">
          {tasteCategories.map((category, index) => (
            <div key={`category-${category.category}-${index}`} className="space-y-3">
              <h3 className="text-xl font-semibold text-black">{category.category}</h3>
              <div className="space-y-6">
                {category.subCategories?.map((subCategory, subIndex) => (
                  <div key={`subcategory-${subCategory.name}-${subIndex}`} className="space-y-2">
                    <h4 className="text-lg font-medium text-black ml-4">{subCategory.name}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {subCategory.tastes.map((taste, tasteIndex) => (
                        <div 
                          key={`taste-${taste.name}-${tasteIndex}`}
                          className={`p-3 rounded-lg border text-center text-black hover:opacity-80 transition-opacity
                            ${taste.isHighlighted 
                              ? 'border-[rgb(134,56,12)] border-2' 
                              : 'border-gray-200'}`}
                          style={{ backgroundColor: taste.color }}
                        >
                          {taste.name}
                        </div>
                      ))}
                    </div>
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