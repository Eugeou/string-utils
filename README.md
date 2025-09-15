# String Utils

A collection of useful string utility functions and data type conversion utilities for TypeScript/JavaScript projects.

## Installation

```bash
npm install @eugeou/string-utils
```

## Usage

### ES6 Modules

```typescript
import { capitalize, toCamelCase, isValidEmail, numToArray, stringToNum } from '@eugeou/string-utils';

// Capitalize first letter
const result = capitalize('hello world'); // 'Hello world'

// Convert to camelCase
const camelCase = toCamelCase('hello-world'); // 'helloWorld'

// Validate email
const isValid = isValidEmail('test@example.com'); // true

// Data type conversions
const digits = numToArray(123); // [1, 2, 3]
const number = stringToNum('456'); // 456
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

## Data Type Conversion Utilities

### `numToArray(num: number): number[]`

Converts a number to an array of its digits.

```typescript
numToArray(123) // [1, 2, 3]
numToArray(0) // [0]
numToArray(-456) // [-4, 5, 6]
```

### `arrayToNum(arr: number[]): number`

Converts an array of digits to a number.

```typescript
arrayToNum([1, 2, 3]) // 123
arrayToNum([0]) // 0
arrayToNum([]) // 0
```

### `numToString(num: number): string`

Converts a number to a string.

```typescript
numToString(123) // '123'
numToString(0) // '0'
numToString(-456) // '-456'
```

### `stringToNum(str: string): number`

Converts a string to a number.

```typescript
stringToNum('123') // 123
stringToNum('0') // 0
stringToNum('abc') // NaN
```

### `stringToArray(str: string): string[]`

Converts a string to an array of characters.

```typescript
stringToArray('hello') // ['h', 'e', 'l', 'l', 'o']
stringToArray('') // []
```

### `arrayToString(arr: string[]): string`

Converts an array of characters to a string.

```typescript
arrayToString(['h', 'e', 'l', 'l', 'o']) // 'hello'
arrayToString([]) // ''
```

### `numToBool(num: number): boolean`

Converts a number to a boolean (0 = false, non-zero = true).

```typescript
numToBool(1) // true
numToBool(0) // false
numToBool(-5) // true
```

### `boolToNum(bool: boolean): number`

Converts a boolean to a number (true = 1, false = 0).

```typescript
boolToNum(true) // 1
boolToNum(false) // 0
```

### `stringToBool(str: string): boolean`

Converts a string to a boolean (empty string = false, non-empty = true).

```typescript
stringToBool('hello') // true
stringToBool('') // false
stringToBool('false') // true (non-empty string)
```

### `boolToString(bool: boolean): string`

Converts a boolean to a string.

```typescript
boolToString(true) // 'true'
boolToString(false) // 'false'
```

### `arrayToBool<T>(arr: T[]): boolean`

Converts an array to a boolean (empty array = false, non-empty = true).

```typescript
arrayToBool([1, 2, 3]) // true
arrayToBool([]) // false
```

### `boolToArray(bool: boolean): boolean[]`

Converts a boolean to an array.

```typescript
boolToArray(true) // [true]
boolToArray(false) // [false]
```

### `numToBoolArray(num: number): boolean[]`

Converts a number to a boolean array (binary representation).

```typescript
numToBoolArray(5) // [true, false, true] (binary: 101)
numToBoolArray(0) // [false]
```

### `boolArrayToNum(arr: boolean[]): number`

Converts a boolean array to a number (from binary representation).

```typescript
boolArrayToNum([true, false, true]) // 5 (binary: 101)
boolArrayToNum([false]) // 0
```

### `stringToNumArray(str: string): number[]`

Converts a string to a number array (ASCII values).

```typescript
stringToNumArray('hi') // [104, 105]
stringToNumArray('') // []
```

### `numArrayToString(arr: number[]): string`

Converts a number array to a string (from ASCII values).

```typescript
numArrayToString([104, 105]) // 'hi'
numArrayToString([]) // ''
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

### 1.1.0
- Added comprehensive data type conversion utilities
- Added 16 new conversion functions covering all major data type combinations
- Enhanced test coverage with 100+ new test cases
- Updated documentation with complete API reference

### 1.0.0
- Initial release
- Added basic string utility functions
- TypeScript support
- Full test coverage
