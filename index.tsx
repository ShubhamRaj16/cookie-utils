/**
 * Get a cookie value by name
 * @param name - The cookie name
 * @returns The cookie value or null if not found
 */
export function getCookie(name: string): string | null {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

/**
 * Set a cookie
 * @param name - The cookie name
 * @param value - The cookie value
 * @param days - Number of days until the cookie expires (default: 7)
 */
export function setCookie(name: string, value: string, days: number = 7): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}

/**
 * Delete a cookie by name
 * @param name - The cookie name
 */
export function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}