/**
 * Get the size (in bytes) of a cookie value by name
 * @param name - The cookie name
 * @returns The size in bytes, or 0 if not found
 */
export function getCookieSize(name: string): number {
  const value = getCookie(name);
  if (value === null) return 0;
  // Each character is 1 byte in UTF-8 for ASCII, but may be more for Unicode
  return new Blob([value]).size;
}

/**
 * Set a cookie and call a callback if the size is near the limit
 * @param name - The cookie name
 * @param value - The cookie value
 * @param days - Number of days until the cookie expires (default: 7)
 * @param onSizeLimit - Callback called with (size, limit) if size >= threshold
 * @param threshold - Fraction of limit to trigger callback (default: 0.9)
 * @param limit - Max cookie size in bytes (default: 4096)
 */
export function setCookieWithSizeCheck(
  name: string,
  value: string,
  days: number = 7,
  onSizeLimit?: (size: number, limit: number) => void,
  threshold: number = 0.9,
  limit: number = 4096
): void {
  const encoded = encodeURIComponent(value);
  const size = new Blob([encoded]).size;
  if (onSizeLimit && size >= threshold * limit) {
    onSizeLimit(size, limit);
  }
  setCookie(name, value, days);
}

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