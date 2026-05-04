# cookie-utils

A utility library for working with cookies in JavaScript/TypeScript projects.

## Features
- Easy cookie set, get, and delete functions
- TypeScript support
- Lightweight and dependency-free

## Getting Started

### Installation
```bash
npm install cookie-utils
```

### Usage
```typescript
import { setCookie, getCookie, deleteCookie } from 'cookie-utils';

setCookie('name', 'value', { days: 7 });
const value = getCookie('name');
deleteCookie('name');
```

## Project Structure
- `src/` — Source code
- `index.tsx` — Main entry point

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
