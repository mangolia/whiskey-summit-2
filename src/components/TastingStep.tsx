import { TastingStep } from '@/types/tasting';
import Section from './Section';

type TastingStepProps = {
  step: TastingStep;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
};

export default function TastingStepComponent({ 
  step, 
  onNext, 
  onPrevious, 
  isFirst, 
  isLast 
}: TastingStepProps) {
  return (
    <div className="space-y-6">
      <Section title={step.title}>
        <p className="mb-6">{step.description}</p>
        
        {step.instructions && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2">
              {step.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        )}

        {step.notes && (
          <div>
            <h3 className="text-lg font-semibold mb-2">What to Look For:</h3>
            <ul className="list-disc list-inside space-y-2">
              {step.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <div className="flex justify-between pt-4">
        <button
          onClick={onPrevious}
          className={`px-6 py-3 rounded-lg transition-colors ${
            isFirst 
              ? 'invisible' 
              : 'bg-[rgb(134,56,12)] hover:bg-[rgb(154,76,32)] text-white'
          }`}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className={`px-6 py-3 rounded-lg transition-colors ${
            isLast
              ? 'bg-[rgb(3,22,52)] hover:bg-[rgb(23,42,72)] text-white'
              : 'bg-[rgb(134,56,12)] hover:bg-[rgb(154,76,32)] text-white'
          }`}
        >
          {isLast ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
} 