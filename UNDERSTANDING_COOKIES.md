# Understanding Cookies in Web Development

## What are Cookies?
Cookies are small pieces of data stored by a web browser at the request of a website. They are used to remember information about the user between HTTP requests, which are stateless by default.

## Why Do We Need a Cookie Utility Package?
- **Simplifies API**: The native `document.cookie` API is cumbersome and error-prone. It requires manual string parsing and formatting.
- **Readability**: Utility functions like `getCookie`, `setCookie`, and `deleteCookie` make code more readable and maintainable.
- **Consistency**: Ensures consistent handling of encoding, expiration, and path across your codebase.
- **TypeScript Support**: Provides type safety and autocompletion in modern projects.
- **Cross-browser Handling**: Abstracts away quirks and differences in browser implementations.

## How Cookies Work
- **Setting a Cookie**: The server or client sets a cookie using the `Set-Cookie` HTTP header or `document.cookie` in JavaScript.
- **Getting a Cookie**: The browser sends cookies back to the server with each request to the same domain, or you can read them in JavaScript.
- **Deleting a Cookie**: Set the cookie's expiration date to a past date.

## Cookie Attributes
- **Name/Value**: The key-value pair stored in the cookie.
- **Expires/Max-Age**: Controls how long the cookie persists.
- **Path**: Limits the cookie to a specific path on the domain.
- **Domain**: Specifies which domain(s) can access the cookie.
- **Secure**: Only sent over HTTPS.
- **HttpOnly**: Not accessible via JavaScript (set by server only).
- **SameSite**: Controls cross-site request behavior.

## Example: Native vs Utility
### Native JavaScript
```js
document.cookie = "user=shubham; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/";
// To read: must parse document.cookie string manually
```

### With Utility Package
```ts
setCookie('user', 'shubham', 365);
const user = getCookie('user');
deleteCookie('user');
```

## Security Considerations
- Never store sensitive data (like passwords) in cookies.
- Use `Secure`, `HttpOnly`, and `SameSite` attributes where possible.

## References
- [MDN Web Docs: document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [OWASP: Cookies](https://owasp.org/www-community/HttpOnly)

---
This file provides a deep dive into cookies and the motivation for a cookie utility package like `cookie-utils`.
