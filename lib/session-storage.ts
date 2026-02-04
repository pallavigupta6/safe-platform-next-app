import { AuthSession, SESSION_STORAGE_KEY } from '@/lib/auth';

const isBrowser = () => typeof window !== 'undefined';

export const readSession = (): AuthSession | null => {
  if (!isBrowser()) {
    return null;
  }

  const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
};

export const writeSession = (session: AuthSession) => {
  if (!isBrowser()) {
    return;
  }

  window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
};

export const clearSession = () => {
  if (!isBrowser()) {
    return;
  }

  window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
};
