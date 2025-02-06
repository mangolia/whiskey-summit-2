import { WhiskeyTasting } from '@/types/tasting';

export const buffaloTraceTasting: WhiskeyTasting = {
  id: 'buffalo-trace',
  name: 'Buffalo Trace Bourbon',
  steps: [
    {
      id: 'about',
      title: 'About Buffalo Trace',
      description: 'Buffalo Trace Distillery is the oldest continuously operating distillery in America, crafting legendary bourbon for more than 200 years.',
      notes: [
        'Award-winning bourbon since 1773',
        'Located in Frankfort, Kentucky',
        'Uses limestone-filtered water and carefully selected grains'
      ]
    },
    {
      id: 'color',
      title: 'Color',
      description: 'Hold your glass against a white background in good lighting to observe the bourbon\'s color and clarity. You\'ll notice deep amber with golden highlights, rich warm honey tones, and crystal clear clarity.'
    },
    {
      id: 'nose',
      title: 'Nose (Aroma)',
      description: 'Take time to appreciate the complex aromas. Keep your mouth slightly open while you smell to experience the full range of scents.',
      instructions: [
        'Swirl gently to release aromas',
        'Hold glass just below your nose',
        'Take short sniffs with mouth slightly open'
      ],
      notes: [
        'Vanilla and caramel',
        'Oak and wood notes',
        'Hints of mint and complex spices'
      ]
    },
    {
      id: 'taste',
      title: 'Taste',
      description: 'Take a small sip and let it coat your entire palate. Notice how the flavors develop and change.',
      instructions: [
        'Take a small sip',
        'Let it coat your tongue',
        'Notice the progression of flavors'
      ],
      notes: [
        'Rich vanilla and toffee',
        'Brown sugar and spice',
        'Subtle oak and char'
      ]
    },
    {
      id: 'finish',
      title: 'Finish',
      description: 'Pay attention to how the flavors linger and evolve after swallowing.',
      instructions: [
        'Notice the length of the finish',
        'Observe how flavors change',
        'Take note of the final impressions'
      ],
      notes: [
        'Long, smooth finish',
        'Lingering warmth',
        'Pleasant oak and spice notes'
      ]
    }
  ]
}; 