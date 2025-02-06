import React from 'react';

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
  title: string;
  description: string;
  onNext: () => void;
  onPrevious: () => void;
}

// Buffalo Trace highlighted scents
const BUFFALO_TRACE_HIGHLIGHTS: WhiskeyScent[] = [
  "Caramel", "Vanilla", "Honey", "Orange Zest", "Leather", "Oak", "Apricot"
];

const WHISKEY_SCENTS: ScentCategory[] = [
  {
    category: "Fruity",
    scents: [
      { name: "Apple", color: "rgb(255, 230, 230)" },
      { name: "Pear", color: "rgb(236, 255, 220)" },
      { name: "Cherry", color: "rgb(255, 200, 200)" },
      { name: "Orange Zest", color: "rgb(255, 231, 186)", isHighlighted: true },
      { name: "Dried Fruit", color: "rgb(255, 218, 185)" },
      { name: "Apricot", color: "rgb(255, 215, 170)", isHighlighted: true },
      { name: "Citrus Peel", color: "rgb(255, 245, 186)" }
    ]
  },
  {
    category: "Sweet",
    scents: [
      { name: "Vanilla", color: "rgb(255, 253, 208)", isHighlighted: true },
      { name: "Caramel", color: "rgb(255, 224, 180)", isHighlighted: true },
      { name: "Honey", color: "rgb(255, 226, 156)", isHighlighted: true },
      { name: "Butterscotch", color: "rgb(255, 214, 170)" },
      { name: "Toffee", color: "rgb(210, 180, 140, 0.3)" },
      { name: "Brown Sugar", color: "rgb(193, 154, 107, 0.2)" },
      { name: "Maple", color: "rgb(255, 200, 150)" }
    ]
  },
  {
    category: "Woody",
    scents: [
      { name: "Oak", color: "rgb(222, 184, 135, 0.2)", isHighlighted: true },
      { name: "Cedar", color: "rgb(203, 161, 122, 0.2)" },
      { name: "Pine", color: "rgb(205, 233, 144, 0.3)" },
      { name: "Toasted Wood", color: "rgb(198, 156, 109, 0.2)" },
      { name: "Charred Oak", color: "rgb(169, 132, 103, 0.2)" },
      { name: "Leather", color: "rgb(150, 113, 76, 0.2)", isHighlighted: true }
    ]
  },
  {
    category: "Spicy",
    scents: [
      { name: "Cinnamon", color: "rgb(210, 105, 30, 0.2)" },
      { name: "Nutmeg", color: "rgb(199, 144, 89, 0.2)" },
      { name: "Clove", color: "rgb(165, 91, 42, 0.2)" },
      { name: "Black Pepper", color: "rgb(128, 128, 128, 0.1)" },
      { name: "Ginger", color: "rgb(255, 236, 184)" },
      { name: "Allspice", color: "rgb(160, 82, 45, 0.2)" }
    ]
  },
  {
    category: "Floral & Herbal",
    scents: [
      { name: "Rose", color: "rgb(255, 182, 193, 0.4)" },
      { name: "Mint", color: "rgb(220, 255, 220)" },
      { name: "Grass", color: "rgb(226, 255, 204)" },
      { name: "Hay", color: "rgb(255, 248, 179)" },
      { name: "Tobacco", color: "rgb(156, 107, 58, 0.2)" },
      { name: "Tea Leaves", color: "rgb(196, 220, 186, 0.3)" },
      { name: "Dried Herbs", color: "rgb(230, 238, 213)" }
    ]
  },
  {
    category: "Nutty",
    scents: [
      { name: "Almond", color: "rgb(255, 235, 205)" },
      { name: "Walnut", color: "rgb(173, 129, 80, 0.2)" },
      { name: "Pecan", color: "rgb(196, 164, 132, 0.2)" },
      { name: "Roasted Nuts", color: "rgb(205, 170, 125, 0.2)" },
      { name: "Marzipan", color: "rgb(255, 228, 196)" }
    ]
  }
];

export default function NoseStep({ 
  title, 
  description, 
  onNext,
  onPrevious 
}: NoseStepProps) {
  // Memoize the highlights to prevent recreation on each render
  const renderHighlights = React.useMemo(() => (
    <div className="flex flex-wrap gap-2">
      {BUFFALO_TRACE_HIGHLIGHTS.map((scent, index) => (
        <span 
          key={`highlight-${scent}-${index}`} 
          className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
        >
          {scent}
        </span>
      ))}
    </div>
  ), []);

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
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-black mb-3">Key Aromas in Buffalo Trace:</h3>
          {renderHighlights}
        </div>
        
        <div className="space-y-8">
          {WHISKEY_SCENTS.map((category, index) => (
            <div key={`category-${category.category}-${index}`} className="space-y-3">
              <h3 className="text-xl font-semibold text-black">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.scents.map((scent, scentIndex) => (
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