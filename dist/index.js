"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.deleteCookie = deleteCookie;
/**
 * Get a cookie value by name
 * @param name - The cookie name
 * @returns The cookie value or null if not found
 */
function getCookie(name) {
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
function setCookie(name, value, days = 7) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}
/**
 * Delete a cookie by name
 * @param name - The cookie name
 */
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
