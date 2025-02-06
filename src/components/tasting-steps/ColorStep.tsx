type ColorBar = {
  label: string;
  color: string;
};

const WHISKEY_COLORS: ColorBar[] = [
  { label: "Clear", color: "rgb(255, 255, 255)" },
  { label: "White Wine", color: "rgb(255, 253, 220)" },
  { label: "Pale Straw", color: "rgb(254, 238, 151)" },
  { label: "Pale Gold", color: "rgb(251, 234, 119)" },
  { label: "Yellow Gold", color: "rgb(248, 220, 85)" },
  { label: "Old Gold", color: "rgb(248, 215, 73)" },
  { label: "Amber", color: "rgb(247, 207, 73)" },
  { label: "Deep Gold", color: "rgb(245, 201, 76)" },
  { label: "Sherry", color: "rgb(246, 194, 59)" },
  { label: "Deep Copper", color: "rgb(245, 190, 48)" },
  { label: "Burnished", color: "rgb(234, 173, 7)" },
  { label: "Oloroso Sherry", color: "rgb(231, 158, 20)" },
  { label: "Chestnut Muscat", color: "rgb(229, 149, 2)" },
  { label: "Gold Brown", color: "rgb(220, 116, 21)" },
  { label: "Polished Mahogany", color: "rgb(224, 101, 41)" },
  { label: "Mahogany", color: "rgb(204, 79, 47)" },
  { label: "Brown Chocolate", color: "rgb(175, 48, 41)" },
  { label: "Old Cask", color: "rgb(158, 35, 28)" },
  { label: "Brown Sherry", color: "rgb(114, 45, 29)" },
  { label: "Black", color: "rgb(66, 27, 10)" },
];

export default function ColorStep({ 
  title, 
  description, 
  onNext,
  onPrevious 
}: {
  title: string;
  description: string;
  onNext: () => void;
  onPrevious: () => void;
}) {
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
          {WHISKEY_COLORS.map((colorBar, index) => (
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