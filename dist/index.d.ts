/**
 * Get a cookie value by name
 * @param name - The cookie name
 * @returns The cookie value or null if not found
 */
export declare function getCookie(name: string): string | null;
/**
 * Set a cookie
 * @param name - The cookie name
 * @param value - The cookie value
 * @param days - Number of days until the cookie expires (default: 7)
 */
export declare function setCookie(name: string, value: string, days?: number): void;
/**
 * Delete a cookie by name
 * @param name - The cookie name
 */
export declare function deleteCookie(name: string): void;
