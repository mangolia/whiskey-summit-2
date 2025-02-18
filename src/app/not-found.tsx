import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Button asChild>
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
} 