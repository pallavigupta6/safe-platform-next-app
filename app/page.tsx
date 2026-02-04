import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const highlights = [
  {
    title: 'Auth state + safe session storage',
    description:
      'Session tokens are stored in session storage and surfaced via the AuthProvider.',
    href: '/auth',
  },
  {
    title: 'API orchestration + error handling',
    description:
      'Centralized fetchJson helper standardizes error handling and response parsing.',
    href: '/auth/session',
  },
  {
    title: 'Optimistic UI + loading states',
    description:
      'Buttons and inline status indicators respond instantly during async actions.',
    href: '/dashboard',
  },
  {
    title: 'Form validation',
    description:
      'Zod + react-hook-form keep input validation consistent and user friendly.',
    href: '/auth',
  },
];

export default function Home() {
  return (
    <PageShell
      title="Triscend frontend readiness"
      description="Prepared flows for authentication, API calls, and navigation."
      actions={
        <Link href="/auth">
          <Button>Review auth flow</Button>
        </Link>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base font-semibold text-gray-900">
                {item.title}
                <Badge variant="secondary">Ready</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              <p className="mb-4">{item.description}</p>
              <Link className="font-medium text-blue-600" href={item.href}>
                View details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
