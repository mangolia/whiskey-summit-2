import { Separator } from '@/components/ui/separator';
import { NavigationGrid } from '@/components/NavigationGrid';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-8">
        Oaklore Whiskey Experience
      </h1>
      <main className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <Separator className="h-[3px] bg-oaklore-blue" />
        </div>
        <NavigationGrid />
      </main>
    </div>
  );
}
