export async function getItemAsync(
  key: string,
): Promise<string | null> {
  if (
    typeof window === "undefined"
  ) {
    return null;
  }

  return window.localStorage.getItem(
    key,
  );
}

export async function setItemAsync(
  key: string,
  value: string,
): Promise<void> {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  window.localStorage.setItem(
    key,
    value,
  );
}

export async function deleteItemAsync(
  key: string,
): Promise<void> {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  window.localStorage.removeItem(
    key,
  );
}