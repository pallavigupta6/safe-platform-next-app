'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { AuthSession } from '@/lib/auth';
import { fetchJson } from '@/lib/api-client';
import { clearSession, readSession, writeSession } from '@/lib/session-storage';

export type AuthStatus = 'loading' | 'authenticated' | 'guest';

type AuthContextValue = {
  status: AuthStatus;
  session: AuthSession | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const SESSION_REFRESH_URL = '/api/session';

type SessionResponse = {
  session: AuthSession;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading');
  const [session, setSession] = useState<AuthSession | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = readSession();
    if (stored) {
      setSession(stored);
      setStatus('authenticated');
      return;
    }

    setStatus('guest');
  }, []);

  const refresh = useCallback(async () => {
    try {
      setError(null);
      const response = await fetchJson<SessionResponse>(SESSION_REFRESH_URL);
      setSession(response.session);
      writeSession(response.session);
      setStatus('authenticated');
    } catch (err) {
      setStatus('guest');
      setSession(null);
      clearSession();
      setError(err instanceof Error ? err.message : 'Unable to refresh session');
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setError(null);
      setStatus('loading');
      const response = await fetchJson<SessionResponse>(SESSION_REFRESH_URL, {
        method: 'POST',
        body: { email, password },
      });
      setSession(response.session);
      writeSession(response.session);
      setStatus('authenticated');
    } catch (err) {
      setStatus('guest');
      setSession(null);
      clearSession();
      setError(err instanceof Error ? err.message : 'Unable to sign in');
      throw err;
    }
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    setStatus('guest');
    setError(null);
    clearSession();
  }, []);

  const value = useMemo(
    () => ({ status, session, error, login, logout, refresh }),
    [status, session, error, login, logout, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
