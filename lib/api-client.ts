export type ApiErrorPayload = {
  message: string;
  details?: string;
};

export class ApiError extends Error {
  status: number;
  payload?: ApiErrorPayload;

  constructor(message: string, status: number, payload?: ApiErrorPayload) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}

type FetchJsonOptions = Omit<RequestInit, 'body'> & {
  body?: Record<string, unknown> | FormData;
};

const isFormData = (body: FetchJsonOptions['body']): body is FormData =>
  typeof FormData !== 'undefined' && body instanceof FormData;

export const fetchJson = async <T>(
  url: string,
  options: FetchJsonOptions = {}
): Promise<T> => {
  const { body, headers, ...rest } = options;
  const response = await fetch(url, {
    ...rest,
    headers: {
      ...(body && !isFormData(body)
        ? { 'Content-Type': 'application/json' }
        : {}),
      ...headers,
    },
    body: body
      ? isFormData(body)
        ? body
        : JSON.stringify(body)
      : undefined,
  });

  if (response.ok) {
    return (await response.json()) as T;
  }

  let payload: ApiErrorPayload | undefined;
  try {
    payload = (await response.json()) as ApiErrorPayload;
  } catch {
    payload = undefined;
  }

  throw new ApiError(
    payload?.message ?? 'Something went wrong',
    response.status,
    payload
  );
};
