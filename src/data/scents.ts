export const BUFFALO_TRACE_HIGHLIGHTS = [
  "Caramel", "Vanilla", "Honey", "Orange Zest", "Leather", "Oak", "Apricot"
] as const;

export const WHISKEY_SCENTS = [
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
] as const; 