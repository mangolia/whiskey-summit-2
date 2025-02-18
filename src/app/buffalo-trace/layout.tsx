export default function BuffaloTraceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-page min-h-screen">
      {children}
    </div>
  );
} 