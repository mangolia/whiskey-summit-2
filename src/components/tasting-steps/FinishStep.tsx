import { useState, useEffect } from 'react';

type FinishBar = {
  label: string;
  color: string;
};

interface FinishStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function FinishStep({ 
  onNext, 
  onPrevious,
  isFirst = false,
  isLast = false 
}: FinishStepProps) {
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [finishDescriptions, setFinishDescriptions] = useState<FinishBar[]>([]);

  useEffect(() => {
    async function loadFinishData() {
      try {
        // Load step data
        const { buffaloTraceTasting } = await import('@/data/tastings/buffaloTrace');
        const finishStep = buffaloTraceTasting.steps.find(step => step.id === 'finish');
        if (finishStep) {
          setDescription(finishStep.description);
        }

        // Load finish data
        const { FINISH_DESCRIPTIONS } = await import('@/data/finish');
        setFinishDescriptions(FINISH_DESCRIPTIONS);
      } catch (error) {
        console.error('Error loading finish data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFinishData();
  }, []);

  if (isLoading) {
    return <div>Loading finish information...</div>;
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
        
        <div className="flex flex-col items-center space-y-2 mt-8">
          {finishDescriptions.map((finish, index) => (
            <div key={index} className="flex items-center w-full max-w-md justify-between">
              <span className="text-black w-32">{finish.label}</span>
              <div 
                className="h-8 w-48 rounded border border-gray-200"
                style={{ backgroundColor: finish.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 