'use client';
import { useState } from 'react';

type FlavorCategory = {
  name: string;
  color: string;
  subCategories: {
    name: string;
    flavors: string[];
    color: string;
  }[];
};

const FLAVOR_CATEGORIES: FlavorCategory[] = [
  {
    name: "Fruity",
    color: "rgb(255, 220, 100)",
    subCategories: [
      {
        name: "Citrus",
        color: "rgb(255, 235, 120)",
        flavors: ["Lime", "Lemon", "Grapefruit", "Orange Peel"]
      },
      {
        name: "Tropical Fruits",
        color: "rgb(255, 210, 80)",
        flavors: ["Mango", "Banana", "Pineapple", "Passion Fruit"]
      },
      {
        name: "Stone Fruits",
        color: "rgb(255, 182, 193)",
        flavors: ["Peach", "Cherry", "Plum"]
      },
      {
        name: "Red Berries",
        color: "rgb(255, 150, 150)",
        flavors: ["Raspberry", "Blackcurrant", "Blackberry"]
      },
      {
        name: "Dried Fruits",
        color: "rgb(210, 140, 100)",
        flavors: ["Prune", "Dried Fig", "Dried Apricot"]
      }
    ]
  },
  {
    name: "Floral",
    color: "rgb(255, 182, 193)",
    subCategories: [
      {
        name: "Flowers",
        color: "rgb(255, 200, 200)",
        flavors: ["Orange Blossom", "Rose", "Heather", "Geranium", "Lavender", "Violet"]
      }
    ]
  },
  {
    name: "Woody",
    color: "rgb(180, 140, 100)",
    subCategories: [
      {
        name: "Fresh Wood",
        color: "rgb(200, 160, 120)",
        flavors: ["Pine", "Cedar", "Oak"]
      },
      {
        name: "Nutty",
        color: "rgb(190, 150, 110)",
        flavors: ["Walnut", "Hazelnut", "Almond", "Coconut"]
      }
    ]
  },
  {
    name: "Peaty",
    color: "rgb(120, 130, 120)",
    subCategories: [
      {
        name: "Earth",
        color: "rgb(140, 150, 140)",
        flavors: ["Earth", "Tree Moss", "Medicinal"]
      },
      {
        name: "Fire",
        color: "rgb(160, 140, 130)",
        flavors: ["Smoke", "Peat", "Tar", "Bacon"]
      }
    ]
  }
];

export default function FlavorWheel() {
  const [selectedCategory, setSelectedCategory] = useState<FlavorCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<{name: string, flavors: string[]} | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Whiskey Flavor Wheel</h1>
      
      <div className="space-y-4">
        {/* Main categories */}
        <div className="grid grid-cols-2 gap-4">
          {FLAVOR_CATEGORIES.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubCategory(null);
              }}
              className={`p-4 rounded-lg text-white font-semibold transition-transform transform hover:scale-105
                ${selectedCategory?.name === category.name ? 'ring-4 ring-offset-2' : ''}`}
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Sub-categories */}
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{selectedCategory.name} Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedCategory.subCategories.map((subCategory: { name: string, color: string, flavors: string[] }) => (
                <button
                  key={subCategory.name}
                  onClick={() => setSelectedSubCategory(subCategory)}
                  className={`p-4 rounded-lg text-white font-semibold transition-transform transform hover:scale-105
                    ${selectedSubCategory?.name === subCategory.name ? 'ring-4 ring-offset-2' : ''}`}
                  style={{ backgroundColor: subCategory.color }}
                >
                  {subCategory.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Flavors */}
        {selectedSubCategory && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">{selectedSubCategory.name} Flavors</h3>
            <div className="grid grid-cols-2 gap-4">
              {selectedSubCategory.flavors.map((flavor) => (
                <div
                  key={flavor}
                  className="p-4 rounded-lg bg-gray-100 text-center"
                >
                  {flavor}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 