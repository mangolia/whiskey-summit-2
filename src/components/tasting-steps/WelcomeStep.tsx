export default function WelcomeStep({ 
  title, 
  description, 
  onNext 
}: {
  title: string;
  description: string;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-[rgb(3,22,52)] text-[rgb(255,253,252)]">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
      </div>
      <div className="flex justify-end">
        <button 
          onClick={onNext}
          className="px-6 py-3 rounded-lg bg-[rgb(134,56,12)] hover:bg-[rgb(154,76,32)] text-white"
        >
          Begin Tasting
        </button>
      </div>
    </div>
  );
} 