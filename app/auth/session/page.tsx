'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth/auth-provider';
import { PageShell } from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AuthSessionPage() {
  const { session, refresh, status, error } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!session && status === 'guest') {
      refresh().catch(() => undefined);
    }
  }, [refresh, session, status]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refresh();
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <PageShell
      title="Session"
      description="Verify token refresh and safe session storage."
      actions={
        <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
          {isRefreshing ? 'Refreshing…' : 'Refresh session'}
        </Button>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold text-gray-900">
            Session details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600">
          {session ? (
            <>
              <div>
                <span className="font-medium text-gray-900">Token</span>: {session.token}
              </div>
              <div>
                <span className="font-medium text-gray-900">User</span>: {session.user.name} ({session.user.email})
              </div>
              <div>
                <span className="font-medium text-gray-900">Issued at</span>: {session.issuedAt}
              </div>
            </>
          ) : (
            <div>No session available.</div>
          )}
          {error ? (
            <div className="text-sm text-red-600">{error}</div>
          ) : null}
        </CardContent>
      </Card>
    </PageShell>
  );
}
