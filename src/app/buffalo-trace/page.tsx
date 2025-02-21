import Section from '@/components/Section';
import Link from 'next/link';

export default function BuffaloTrace() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-oaklore-blue">Four Grain Bourbon Whiskey</h1>
      
      <div className="space-y-6">
        <Section title="Welcome to Your Tasting Experience">
          <p className="mb-4">
            Welcome to your guided journey through Oaklore&apos;s Four Grain Bourbon. Together, we&apos;ll explore 
            this exceptional whiskey&apos;s character through its color, aroma, taste, and finish. 
            This experience is designed to help you discover and appreciate the complex flavors 
            that make this bourbon unique.
          </p>
        </Section>

        <Section title="About Four Grain Bourbon Whiskey">
          <div>
            <p className="mb-4">
            Our flagship spirit embodies the bold, savory character that defines Oaklore.  
            This unique four-grain bourbon brings together wheat, rye, corn, and barley, 
            all aged to perfection for 4-6 years. It&apos;s a testament to our commitment to crafting exceptional spirits,
            </p>
          </div>
        </Section>

        <div className="flex justify-center mt-8">
          <Link 
            href="/buffalo-trace/tasting-steps" 
            className="bg-oaklore-blue hover:bg-oaklore-blue/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-xl"
          >
            Let&apos;s Sip
          </Link>
        </div>
      </div>
    </div>
  );
} 