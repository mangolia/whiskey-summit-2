'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="space-x-4">
        <Button
          onClick={reset}
          variant="default"
        >
          Try again
        </Button>
        <Button
          onClick={() => window.location.href = '/'}
          variant="outline"
        >
          Go home
        </Button>
      </div>
    </div>
  );
} 