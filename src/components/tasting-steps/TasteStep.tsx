import React from 'react';

type WhiskeyTaste = string;
type Taste = {
  name: string;
  color: string;
  isHighlighted?: boolean;
};

type TasteCategory = {
  category: string;
  subCategories?: {
    name: string;
    tastes: Taste[];
  }[];
  tastes?: Taste[];
};

interface TasteStepProps {
  description: string;
  onNext: () => void;
  onPrevious: () => void;
}

const BUFFALO_TRACE_HIGHLIGHTS: WhiskeyTaste[] = [
  "Vanilla", "Brown Sugar", "Toffee", "Orange", "Mint", "Oak", "Dark Chocolate"
];

const WHISKEY_TASTES: TasteCategory[] = [
  {
    category: "Sweet",
    subCategories: [
      {
        name: "Caramel",
        tastes: [
          { name: "Caramel", color: "rgb(255, 224, 180)" },
          { name: "Toffee", color: "rgb(210, 180, 140)", isHighlighted: true },
          { name: "Butterscotch", color: "rgb(255, 214, 170)" },
          { name: "Brown Sugar", color: "rgb(193, 154, 107)", isHighlighted: true }
        ]
      },
      {
        name: "Vanilla",
        tastes: [
          { name: "Vanilla", color: "rgb(255, 253, 208)", isHighlighted: true },
          { name: "Cream", color: "rgb(255, 253, 228)" },
          { name: "Custard", color: "rgb(255, 248, 200)" }
        ]
      },
      {
        name: "Syrup",
        tastes: [
          { name: "Maple Syrup", color: "rgb(255, 200, 150)" },
          { name: "Honey", color: "rgb(255, 226, 156)" },
          { name: "Molasses", color: "rgb(80, 48, 20)" }
        ]
      }
    ]
  },
  {
    category: "Fruit",
    subCategories: [
      {
        name: "Citrus",
        tastes: [
          { name: "Orange", color: "rgb(255, 231, 186)", isHighlighted: true },
          { name: "Lemon", color: "rgb(255, 247, 186)" },
          { name: "Lime", color: "rgb(230, 255, 186)" }
        ]
      },
      {
        name: "Stone Fruit",
        tastes: [
          { name: "Cherry", color: "rgb(255, 200, 200)" },
          { name: "Peach", color: "rgb(255, 229, 180)" },
          { name: "Apricot", color: "rgb(255, 215, 170)" }
        ]
      },
      {
        name: "Dried Fruit",
        tastes: [
          { name: "Raisin", color: "rgb(160, 82, 45)" },
          { name: "Fig", color: "rgb(142, 98, 98)" },
          { name: "Date", color: "rgb(139, 69, 19)" }
        ]
      }
    ]
  },
  {
    category: "Wood",
    subCategories: [
      {
        name: "Oak",
        tastes: [
          { name: "Oak", color: "rgb(222, 184, 135)", isHighlighted: true },
          { name: "Toasted Oak", color: "rgb(198, 156, 109)" },
          { name: "Charred Oak", color: "rgb(169, 132, 103)" }
        ]
      },
      {
        name: "Complex",
        tastes: [
          { name: "Cedar", color: "rgb(203, 161, 122)" },
          { name: "Tobacco", color: "rgb(156, 107, 58)" },
          { name: "Leather", color: "rgb(150, 113, 76)" }
        ]
      }
    ]
  },
  {
    category: "Spice",
    subCategories: [
      {
        name: "Baking Spices",
        tastes: [
          { name: "Cinnamon", color: "rgb(210, 105, 30)" },
          { name: "Nutmeg", color: "rgb(199, 144, 89)" },
          { name: "Allspice", color: "rgb(160, 82, 45)" }
        ]
      },
      {
        name: "Herbs",
        tastes: [
          { name: "Mint", color: "rgb(220, 255, 220)", isHighlighted: true },
          { name: "Eucalyptus", color: "rgb(200, 255, 200)" },
          { name: "Dill", color: "rgb(230, 238, 213)" }
        ]
      }
    ]
  },
  {
    category: "Confectionery",
    subCategories: [
      {
        name: "Chocolate",
        tastes: [
          { name: "Dark Chocolate", color: "rgb(77, 46, 38)", isHighlighted: true },
          { name: "Milk Chocolate", color: "rgb(139, 69, 19)" },
          { name: "Cocoa", color: "rgb(93, 47, 47)" }
        ]
      },
      {
        name: "Nutty",
        tastes: [
          { name: "Almond", color: "rgb(255, 235, 205)" },
          { name: "Walnut", color: "rgb(173, 129, 80)" },
          { name: "Pecan", color: "rgb(196, 164, 132)" }
        ]
      }
    ]
  }
];

export default function TasteStep({ 
  description, 
  onNext,
  onPrevious
}: TasteStepProps) {
  const renderHighlights = React.useMemo(() => (
    <div className="flex flex-wrap gap-2">
      {BUFFALO_TRACE_HIGHLIGHTS.map((taste, index) => (
        <span 
          key={`highlight-${taste}-${index}`} 
          className="px-3 py-1 bg-[rgb(134,56,12)] text-white rounded-full text-sm"
        >
          {taste}
        </span>
      ))}
    </div>
  ), []);

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
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-black mb-3">Key Flavors in Buffalo Trace:</h3>
          {renderHighlights}
        </div>
        
        <div className="space-y-8">
          {WHISKEY_TASTES.map((category, index) => (
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