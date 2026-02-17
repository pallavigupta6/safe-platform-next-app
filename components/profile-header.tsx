import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type ProfileHeaderProps = {
  title: string;
  description: string;
  backHref?: string;
};

export function ProfileHeader({
  title,
  description,
  backHref = '/dashboard',
}: ProfileHeaderProps) {
  return (
    <header className="border-b bg-[#f6f3e8]">
      <div className="mx-auto w-full max-w-3xl px-6 py-8">
        <Link
          href={backHref}
          className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </header>
  );
}
