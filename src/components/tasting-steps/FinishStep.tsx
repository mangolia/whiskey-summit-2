export default function FinishStep({ 
  title, 
  onNext,
  onPrevious 
}: {
  title: string;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const finishDescriptions = [
    { label: "Roasty", color: "rgb(180, 140, 100)" },
    { label: "Honey", color: "rgb(255, 226, 156)" },
    { label: "Caramel", color: "rgb(255, 224, 180)" },
    { label: "Earthy", color: "rgb(160, 140, 120)" },
    { label: "Toasted Oak", color: "rgb(198, 156, 109)" }
  ];

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
        
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onPrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <p className="text-black flex-1 text-center">Pay attention to how the flavors linger and evolve after swallowing. Do you taste any of these flavors?</p>

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