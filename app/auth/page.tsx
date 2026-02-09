'use client';

import { useMemo } from 'react';
import Link from 'next/link';

import { PageShell } from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/components/auth/auth-provider';
import { getBackendUrl } from '@/lib/env';

export default function AuthPage() {
  const { status, session, logout } = useAuth();
  const isLoading = status === 'loading';
  const backendUrl = getBackendUrl();
  const loginUrl = backendUrl ? `${backendUrl}/auth/login` : '/auth/login';

  const sessionDetails = useMemo(
    () =>
      session
        ? `${session.user.name} (${session.user.role}) • ${session.user.email}`
        : 'No active session',
    [session]
  );

  return (
    <PageShell
      title="Sign in"
      description="Securely access your Triscend workspace."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,_1fr)_320px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-900">
              Sign in to continue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Use your Microsoft account to securely access the platform.
              </p>
              <Button className="w-full" disabled={isLoading} asChild>
                <a href={loginUrl}>
                  {isLoading ? 'Connecting…' : 'Continue with Microsoft'}
                </a>
              </Button>
              <p className="text-xs text-gray-500">
                You will be redirected to Microsoft for authentication.
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                Session status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <p>{sessionDetails}</p>
              <div className="rounded-md bg-gray-50 p-3 text-xs text-gray-500">
                Tokens are stored in session storage to avoid long-lived browser
                persistence.
              </div>
              {session ? (
                <Button variant="outline" onClick={logout}>
                  Log out
                </Button>
              ) : null}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                Need help?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Visit <Link className="font-medium text-blue-600" href="/help-support">Help &amp; Support</Link> for password resets.
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
