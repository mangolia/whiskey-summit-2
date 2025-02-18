import Section from '@/components/Section';
import Link from 'next/link';

export default function BuffaloTrace() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-oaklore-blue">Buffalo Trace Whiskey</h1>
      
      <div className="space-y-6">
        <Section title="Welcome to Your Tasting Experience">
          <p className="mb-4">
            Welcome to your guided journey through Buffalo Trace Bourbon. Together, we&apos;ll explore 
            this exceptional whiskey&apos;s character through its color, aroma, taste, and finish. 
            This experience is designed to help you discover and appreciate the complex flavors 
            that make Buffalo Trace unique.
          </p>
        </Section>

        <Section title="About Buffalo Trace">
          <div>
            <p className="mb-4">
              Buffalo Trace Distillery is the oldest continuously operating distillery in America, 
              crafting legendary bourbon for more than 200 years.
            </p>
            <p>
              Located in Frankfort, Kentucky, this historic distillery continues to win awards for 
              its wide variety of bourbons and whiskeys.
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