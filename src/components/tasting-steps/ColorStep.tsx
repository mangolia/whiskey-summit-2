import { useState, useEffect } from 'react';

type ColorBar = {
  label: string;
  color: string;
};

interface ColorStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function ColorStep({ 
  onNext, 
  onPrevious,
  isFirst = false,
  isLast = false 
}: ColorStepProps) {
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [whiskyColors, setWhiskyColors] = useState<ColorBar[]>([]);

  useEffect(() => {
    async function loadColorData() {
      try {
        const { buffaloTraceTasting } = await import('@/data/tastings/buffaloTrace');
        const colorStep = buffaloTraceTasting.steps.find(step => step.id === 'color');
        if (colorStep) {
          setDescription(colorStep.description);
        }

        // Load color data
        const { WHISKEY_COLORS } = await import('@/data/colors');
        setWhiskyColors([...WHISKEY_COLORS]);
      } catch (error) {
        console.error('Error loading color data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadColorData();
  }, []);

  if (isLoading) {
    return <div>Loading color information...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          {!isFirst && (
            <button
              onClick={onPrevious}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <p className="text-black flex-1 text-center">{description}</p>

          <button
            onClick={onNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isLast && <span className="sr-only">Finish</span>}
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-2 mt-8">
          {whiskyColors.map((colorBar, index) => (
            <div key={index} className="flex items-center w-full max-w-md justify-between">
              <span className="text-black w-32">{colorBar.label}</span>
              <div 
                className="h-8 w-48 rounded border border-gray-200"
                style={{ backgroundColor: colorBar.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 