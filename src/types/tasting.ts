export type TastingStep = {
  id: string;
  title: string;
  description: string;
  instructions?: string[];
  notes?: string[];
};

export type WhiskeyTasting = {
  id: string;
  name: string;
  steps: TastingStep[];
}; 