const ensureTrailingSlashRemoved = (value: string) =>
  value.endsWith('/') ? value.slice(0, -1) : value;

export const getBackendUrl = () => {
  const raw = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!raw) {
    return '';
  }

  return ensureTrailingSlashRemoved(raw);
};
