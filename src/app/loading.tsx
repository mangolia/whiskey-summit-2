export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-oaklore-blue rounded-full border-t-transparent animate-spin"></div>
        <p className="text-oaklore-blue font-medium">Loading...</p>
      </div>
    </div>
  );
} 