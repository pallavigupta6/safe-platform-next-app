import { Navbar } from '@/components/navbar';

type PageShellProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
};

export function PageShell({ title, description, children, actions }: PageShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-8">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description ? (
              <p className="mt-2 text-gray-600">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
        </header>
        {children}
      </main>
    </div>
  );
}
