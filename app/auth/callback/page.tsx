'use client';

import { useEffect, useMemo, useState } from 'react';

import { PageShell } from '@/components/page-shell';
import { getBackendUrl } from '@/lib/env';
import { writeSession } from '@/lib/session-storage';

type CallbackState = 'loading' | 'success' | 'error';

type CallbackResponse = {
  session: {
    token: string;
    issuedAt: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  };
};

export default function AuthCallbackPage() {
  const [state, setState] = useState<CallbackState>('loading');
  const [message, setMessage] = useState<string>('Completing sign-in…');

  const backendUrl = getBackendUrl();
  const callbackUrl = useMemo(() => {
    if (!backendUrl || typeof window === 'undefined') {
      return '';
    }

    return `${backendUrl}/auth/callback${window.location.search}`;
  }, [backendUrl]);

  useEffect(() => {
    if (!backendUrl) {
      setState('error');
      setMessage('Missing backend configuration.');
      return;
    }

    if (!callbackUrl) {
      return;
    }

    const finalize = async () => {
      try {
        const response = await fetch(callbackUrl, {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Unable to complete sign-in.');
        }

        const payload = (await response.json()) as CallbackResponse;
        if (!payload?.session) {
          throw new Error('Missing session information.');
        }

        writeSession(payload.session);
        setState('success');
        setMessage('Sign-in complete. Redirecting…');
        window.location.assign('/dashboard');
      } catch (error) {
        setState('error');
        setMessage(
          error instanceof Error
            ? error.message
            : 'Unable to complete sign-in.'
        );
      }
    };

    void finalize();
  }, [backendUrl, callbackUrl]);

  return (
    <PageShell
      title="Signing you in"
      description="Finishing your Microsoft authentication."
    >
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-sm text-gray-600">
        <p className="font-medium text-gray-900">
          {state === 'loading' ? 'Please wait…' : null}
          {state === 'success' ? 'Welcome back!' : null}
          {state === 'error' ? 'Sign-in failed' : null}
        </p>
        <p className="mt-2 text-gray-600">{message}</p>
      </div>
    </PageShell>
  );
}
