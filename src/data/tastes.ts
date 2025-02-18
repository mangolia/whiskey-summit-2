export const BUFFALO_TRACE_HIGHLIGHTS = [
  "Vanilla", "Brown Sugar", "Toffee", "Orange", "Mint", "Oak", "Dark Chocolate"
] as const;

export const WHISKEY_TASTES = [
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
] as const; 