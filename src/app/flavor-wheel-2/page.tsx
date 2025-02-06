'use client';
import { useState } from 'react';

type FlavorCategory = {
  name: string;
  color: string;
  angle: number;
  subCategories: {
    name: string;
    color: string;
    flavors: Array<{
      name: string;
      color: string;
    }>;
  }[];
};

const FLAVOR_WHEEL_DATA: FlavorCategory[] = [
  {
    name: "FRUITY",
    color: "rgb(255, 220, 100)",
    angle: 90,
    subCategories: [
      {
        name: "CITRUS",
        color: "rgb(255, 235, 120)",
        flavors: [
          { name: "lime", color: "rgb(220, 255, 100)" },
          { name: "lemon", color: "rgb(255, 250, 100)" },
          { name: "grapefruit", color: "rgb(255, 240, 100)" },
          { name: "orange peel", color: "rgb(255, 230, 100)" }
        ]
      },
      {
        name: "TROPICAL FRUITS",
        color: "rgb(255, 210, 80)",
        flavors: [
          { name: "mango", color: "rgb(255, 200, 100)" },
          { name: "banana", color: "rgb(255, 220, 100)" },
          { name: "pineapple", color: "rgb(255, 230, 100)" },
          { name: "passion fruit", color: "rgb(255, 210, 100)" }
        ]
      },
      {
        name: "STONE FRUITS",
        color: "rgb(255, 182, 193)",
        flavors: [
          { name: "peach", color: "rgb(255, 190, 180)" },
          { name: "cherry", color: "rgb(255, 160, 170)" },
          { name: "plum", color: "rgb(255, 140, 160)" }
        ]
      },
      {
        name: "RED BERRIES",
        color: "rgb(255, 150, 150)",
        flavors: [
          { name: "raspberry", color: "rgb(255, 130, 140)" },
          { name: "blackcurrant", color: "rgb(255, 110, 120)" },
          { name: "blackberry", color: "rgb(255, 90, 100)" }
        ]
      },
      {
        name: "DRIED FRUITS",
        color: "rgb(210, 140, 100)",
        flavors: [
          { name: "prune", color: "rgb(200, 130, 90)" },
          { name: "dried fig", color: "rgb(190, 120, 80)" },
          { name: "dried apricot", color: "rgb(180, 110, 70)" }
        ]
      }
    ]
  },
  {
    name: "FLORAL",
    color: "rgb(255, 182, 193)",
    angle: 45,
    subCategories: [
      {
        name: "FLOWERS",
        color: "rgb(255, 200, 200)",
        flavors: [
          { name: "orange blossom", color: "rgb(255, 190, 190)" },
          { name: "rose", color: "rgb(255, 180, 180)" },
          { name: "heather", color: "rgb(255, 170, 170)" },
          { name: "geranium", color: "rgb(255, 160, 160)" },
          { name: "lavender", color: "rgb(255, 150, 150)" },
          { name: "violet", color: "rgb(255, 140, 140)" }
        ]
      }
    ]
  },
  {
    name: "GRASSY",
    color: "rgb(150, 200, 50)",
    angle: 30,
    subCategories: [
      {
        name: "FRESH",
        color: "rgb(170, 210, 70)",
        flavors: [
          { name: "cut grass", color: "rgb(160, 220, 60)" },
          { name: "fern", color: "rgb(150, 210, 50)" },
          { name: "mint", color: "rgb(140, 200, 40)" },
          { name: "eucalyptus", color: "rgb(130, 190, 30)" },
          { name: "juniper", color: "rgb(120, 180, 20)" }
        ]
      }
    ]
  },
  {
    name: "WOODY",
    color: "rgb(180, 140, 100)",
    angle: 60,
    subCategories: [
      {
        name: "FRESH WOOD",
        color: "rgb(200, 160, 120)",
        flavors: [
          { name: "pine", color: "rgb(190, 150, 110)" },
          { name: "cedar", color: "rgb(180, 140, 100)" },
          { name: "oak", color: "rgb(170, 130, 90)" }
        ]
      },
      {
        name: "NUTTY",
        color: "rgb(190, 150, 110)",
        flavors: [
          { name: "walnut", color: "rgb(180, 140, 100)" },
          { name: "hazelnut", color: "rgb(170, 130, 90)" },
          { name: "almond", color: "rgb(160, 120, 80)" },
          { name: "coconut", color: "rgb(150, 110, 70)" }
        ]
      }
    ]
  },
  {
    name: "PEATY",
    color: "rgb(120, 130, 120)",
    angle: 45,
    subCategories: [
      {
        name: "MEDICINAL",
        color: "rgb(140, 150, 140)",
        flavors: [
          { name: "iodine", color: "rgb(130, 140, 130)" },
          { name: "seaweed", color: "rgb(120, 130, 120)" },
          { name: "shellfish", color: "rgb(110, 120, 110)" },
          { name: "flint", color: "rgb(100, 110, 100)" }
        ]
      },
      {
        name: "SMOKY",
        color: "rgb(130, 140, 130)",
        flavors: [
          { name: "peat", color: "rgb(120, 130, 120)" },
          { name: "earth", color: "rgb(110, 120, 110)" },
          { name: "smoke", color: "rgb(100, 110, 100)" },
          { name: "bacon", color: "rgb(90, 100, 90)" },
          { name: "tar", color: "rgb(80, 90, 80)" }
        ]
      }
    ]
  },
  {
    name: "CEREAL",
    color: "rgb(230, 180, 100)",
    angle: 45,
    subCategories: [
      {
        name: "ROASTED",
        color: "rgb(220, 170, 90)",
        flavors: [
          { name: "toast", color: "rgb(210, 160, 80)" },
          { name: "bread", color: "rgb(200, 150, 70)" }
        ]
      },
      {
        name: "YEASTY",
        color: "rgb(210, 160, 80)",
        flavors: [
          { name: "malt", color: "rgb(200, 150, 70)" },
          { name: "bread dough", color: "rgb(190, 140, 60)" }
        ]
      }
    ]
  },
  {
    name: "WINEY",
    color: "rgb(200, 100, 100)",
    angle: 45,
    subCategories: [
      {
        name: "OXIDIZED",
        color: "rgb(190, 90, 90)",
        flavors: [
          { name: "sherry", color: "rgb(180, 80, 80)" },
          { name: "madeira", color: "rgb(170, 70, 70)" }
        ]
      }
    ]
  }
];

export default function FlavorWheel2() {
  const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);
  const wheelSize = 800;
  const centerX = wheelSize / 2;
  const centerY = wheelSize / 2;

  const calculateArcPath = (
    startAngle: number,
    endAngle: number,
    innerRadius: number,
    outerRadius: number
  ) => {
    const start = polarToCartesian(centerX, centerY, outerRadius, startAngle);
    const end = polarToCartesian(centerX, centerY, outerRadius, endAngle);
    const innerStart = polarToCartesian(centerX, centerY, innerRadius, startAngle);
    const innerEnd = polarToCartesian(centerX, centerY, innerRadius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `
      M ${start.x} ${start.y}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
      L ${innerEnd.x} ${innerEnd.y}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}
      Z
    `;
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Whiskey Flavor Wheel</h1>
      
      <div className="relative w-full aspect-square max-w-[800px] mx-auto">
        <svg
          viewBox={`0 0 ${wheelSize} ${wheelSize}`}
          className="w-full h-full"
        >
          {/* Outer ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={wheelSize / 2 - 10}
            fill="rgb(0, 100, 0)"
            stroke="white"
            strokeWidth="2"
          />

          {/* Render flavor segments */}
          {FLAVOR_WHEEL_DATA.map((category, categoryIndex) => {
            const categoryStartAngle = (360 / FLAVOR_WHEEL_DATA.length) * categoryIndex;
            const categoryEndAngle = categoryStartAngle + (360 / FLAVOR_WHEEL_DATA.length);
            
            return (
              <g key={category.name}>
                {/* Main category segment */}
                <path
                  d={calculateArcPath(
                    categoryStartAngle,
                    categoryEndAngle,
                    wheelSize * 0.2, // Inner radius
                    wheelSize * 0.4  // Outer radius
                  )}
                  fill={category.color}
                  stroke="white"
                  strokeWidth="1"
                  className="transition-opacity duration-200 hover:opacity-80"
                />
                
                {/* Category label */}
                <text
                  x={centerX}
                  y={centerY}
                  transform={`rotate(${categoryStartAngle + (categoryEndAngle - categoryStartAngle) / 2 - 90}, ${centerX}, ${centerY})`}
                  textAnchor="middle"
                  className="text-sm font-bold fill-white"
                  dy="-140"
                >
                  {category.name}
                </text>

                {/* Render subcategories */}
                {category.subCategories.map((subCategory, subIndex) => {
                  const subCategoryWidth = (categoryEndAngle - categoryStartAngle) / category.subCategories.length;
                  const subStartAngle = categoryStartAngle + (subCategoryWidth * subIndex);
                  const subEndAngle = subStartAngle + subCategoryWidth;

                  return (
                    <g key={`${category.name}-${subCategory.name}`}>
                      {/* Subcategory segment */}
                      <path
                        d={calculateArcPath(
                          subStartAngle,
                          subEndAngle,
                          wheelSize * 0.25, // Inner radius
                          wheelSize * 0.35  // Outer radius
                        )}
                        fill={subCategory.color}
                        stroke="white"
                        strokeWidth="1"
                        className="transition-opacity duration-200 hover:opacity-80"
                      />

                      {/* Render individual flavors */}
                      {subCategory.flavors.map((flavor, flavorIndex) => {
                        const flavorWidth = subCategoryWidth / subCategory.flavors.length;
                        const flavorStartAngle = subStartAngle + (flavorWidth * flavorIndex);
                        const flavorEndAngle = flavorStartAngle + flavorWidth;

                        return (
                          <path
                            key={`${category.name}-${subCategory.name}-${flavor.name}`}
                            d={calculateArcPath(
                              flavorStartAngle,
                              flavorEndAngle,
                              wheelSize * 0.3, // Inner radius
                              wheelSize * 0.4  // Outer radius
                            )}
                            fill={flavor.color}
                            stroke="white"
                            strokeWidth="1"
                            onMouseEnter={() => setHoveredFlavor(flavor.name)}
                            onMouseLeave={() => setHoveredFlavor(null)}
                            className={`transition-opacity duration-200 ${
                              hoveredFlavor === flavor.name
                                ? 'opacity-80 cursor-pointer'
                                : 'opacity-100'
                            }`}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Center icon */}
          <circle
            cx={centerX}
            cy={centerY}
            r={wheelSize * 0.1}
            fill="rgb(0, 100, 0)"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* Hover tooltip */}
        {hoveredFlavor && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-white px-4 py-2 rounded shadow-lg text-black"
          >
            {hoveredFlavor}
          </div>
        )}
      </div>
    </div>
  );
} 
