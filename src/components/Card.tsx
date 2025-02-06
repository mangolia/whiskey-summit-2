import Link from 'next/link';

type CardProps = {
  title: string;
  href: string;
};

export default function Card({ title, href }: CardProps) {
  return (
    <Link href={href} className="block">
      <div className="aspect-square rounded-lg bg-[rgb(3,22,52)] flex items-center justify-center hover:opacity-90 transition-opacity">
        <h2 className="text-2xl font-semibold text-[rgb(255,253,252)]">
          {title}
        </h2>
      </div>
    </Link>
  );
} 