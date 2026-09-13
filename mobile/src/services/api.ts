const rawApiUrl = process.env.EXPO_PUBLIC_API_URL;

if (!rawApiUrl) {
  throw new Error(
    "EXPO_PUBLIC_API_URL est manquante. Vérifie le fichier mobile/.env.",
  );
}

const API_URL = rawApiUrl.replace(/\/$/, "");

type ApiErrorResponse = {
  message?: string;
};

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const headers = new Headers(options.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response
    .json()
    .catch(() => null);

  if (!response.ok) {
    const error = data as ApiErrorResponse | null;

    throw new Error(
      error?.message ??
        `Une erreur API est survenue (${response.status}).`,
    );
  }

  return data as T;
}