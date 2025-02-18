type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="bg-page p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-oaklore-blue">{title}</h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
} 