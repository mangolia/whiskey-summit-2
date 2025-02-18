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
      <div className="p-6 rounded-lg bg-page">
        <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">{title}</h2>
        <p className="mb-6 text-gray-700">{description}</p>
      </div>
      <div className="flex justify-end">
        <button 
          onClick={onNext}
          className="px-6 py-3 rounded-lg bg-oaklore-blue hover:bg-oaklore-blue/90 text-white"
        >
          Begin Tasting
        </button>
      </div>
    </div>
  );
} 