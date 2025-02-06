type ColorStepProps = {
  title: string;
  description: string;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
};

export default function ColorTastingStep({ 
  title, 
  description, 
  onNext, 
  onPrevious, 
  isFirst, 
  isLast 
}: ColorStepProps) {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
        <p className="mb-6 text-black">{description}</p>
      </div>

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