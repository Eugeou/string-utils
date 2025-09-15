# String Utils

A collection of useful string utility functions for TypeScript/JavaScript projects.

## Installation

```bash
npm install @eugeou/string-utils
```

## Usage

### ES6 Modules

```typescript
import { capitalize, toCamelCase, isValidEmail } from '@eugeou/string-utils';

// Capitalize first letter
const result = capitalize('hello world'); // 'Hello world'

// Convert to camelCase
const camelCase = toCamelCase('hello-world'); // 'helloWorld'

// Validate email
const isValid = isValidEmail('test@example.com'); // true
```

### CommonJS

```javascript
const { capitalize, toCamelCase, isValidEmail } = require('@eugeou/string-utils');
```

### Default Import

```typescript
import stringUtils from '@eugeou/string-utils';

const result = stringUtils.capitalize('hello world');
```

## API Reference

### `capitalize(str: string): string`

Capitalizes the first letter of a string.

```typescript
capitalize('hello world') // 'Hello world'
capitalize('') // ''
```

### `toCamelCase(str: string): string`

Converts a string to camelCase format.

```typescript
toCamelCase('hello world') // 'helloWorld'
toCamelCase('hello-world') // 'helloWorld'
toCamelCase('hello_world') // 'helloWorld'
```

### `toKebabCase(str: string): string`

Converts a string to kebab-case format.

```typescript
toKebabCase('helloWorld') // 'hello-world'
toKebabCase('Hello World') // 'hello-world'
toKebabCase('hello_world') // 'hello-world'
```

### `truncate(str: string, length: number, suffix?: string): string`

Truncates a string to a specified length and adds a suffix.

```typescript
truncate('Hello world', 5) // 'Hello...'
truncate('Hello world', 5, '---') // 'Hello---'
```

### `removeWhitespace(str: string): string`

Removes all whitespace from a string.

```typescript
removeWhitespace('hello world') // 'helloworld'
removeWhitespace('  hello   world  ') // 'helloworld'
```

### `isValidEmail(email: string): boolean`

Validates if a string is a valid email address.

```typescript
isValidEmail('test@example.com') // true
isValidEmail('invalid-email') // false
```

### `generateRandomString(length: number, charset?: string): string`

Generates a random string of specified length.

```typescript
generateRandomString(8) // 'aB3dE9fG'
generateRandomString(5, '0123456789') // '12345'
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Eugeou/string-utils.git
cd string-utils

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

### Scripts

- `npm run build` - Build the TypeScript code
- `npm test` - Run tests
- `npm run dev` - Watch mode for development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0
- Initial release
- Added basic string utility functions
- TypeScript support
- Full test coverage
