export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AuthSession = {
  token: string;
  user: AuthUser;
  issuedAt: string;
};

export const SESSION_STORAGE_KEY = 'triscend.session';
