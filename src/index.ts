/**
 * String utility functions
 */

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The string with the first letter capitalized
 * @example
 * ```typescript
 * capitalize('hello world') // 'Hello world'
 * ```
 */
export function capitalize(str: string): string {
  if (!str || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns The string in camelCase format
 * @example
 * ```typescript
 * toCamelCase('hello world') // 'helloWorld'
 * toCamelCase('hello-world') // 'helloWorld'
 * ```
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^[A-Z]/, char => char.toLowerCase());
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The string in kebab-case format
 * @example
 * ```typescript
 * toKebabCase('helloWorld') // 'hello-world'
 * toKebabCase('Hello World') // 'hello-world'
 * ```
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - The string to truncate
 * @param length - The maximum length
 * @param suffix - The suffix to add (default: '...')
 * @returns The truncated string
 * @example
 * ```typescript
 * truncate('Hello world', 5) // 'Hello...'
 * truncate('Hello world', 5, '...') // 'Hello...'
 * ```
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

/**
 * Removes all whitespace from a string
 * @param str - The string to process
 * @returns The string without whitespace
 * @example
 * ```typescript
 * removeWhitespace('hello world') // 'helloworld'
 * ```
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s/g, '');
}

/**
 * Checks if a string is a valid email
 * @param email - The email to validate
 * @returns True if the email is valid
 * @example
 * ```typescript
 * isValidEmail('test@example.com') // true
 * isValidEmail('invalid-email') // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates a random string of specified length
 * @param length - The length of the random string
 * @param charset - The character set to use (default: alphanumeric)
 * @returns A random string
 * @example
 * ```typescript
 * generateRandomString(8) // 'aB3dE9fG'
 * generateRandomString(5, '0123456789') // '12345'
 * ```
 */
export function generateRandomString(
  length: number, 
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Data Type Conversion Utilities
 */

/**
 * Converts a number to an array of its digits
 * @param num - The number to convert
 * @returns Array of digits
 * @example
 * ```typescript
 * numToArray(123) // [1, 2, 3]
 * numToArray(0) // [0]
 * ```
 */
export function numToArray(num: number): number[] {
  if (num === 0) return [0];
  const isNegative = num < 0;
  const absNum = Math.abs(num);
  const digits = absNum.toString().split('').map(Number);
  return isNegative ? [-digits[0], ...digits.slice(1)] : digits;
}

/**
 * Converts an array of digits to a number
 * @param arr - Array of digits
 * @returns The number
 * @example
 * ```typescript
 * arrayToNum([1, 2, 3]) // 123
 * arrayToNum([0]) // 0
 * ```
 */
export function arrayToNum(arr: number[]): number {
  if (arr.length === 0) return 0;
  return parseInt(arr.join(''), 10);
}

/**
 * Converts a number to a string
 * @param num - The number to convert
 * @returns String representation of the number
 * @example
 * ```typescript
 * numToString(123) // '123'
 * numToString(0) // '0'
 * ```
 */
export function numToString(num: number): string {
  return num.toString();
}

/**
 * Converts a string to a number
 * @param str - The string to convert
 * @returns The number, or NaN if conversion fails
 * @example
 * ```typescript
 * stringToNum('123') // 123
 * stringToNum('0') // 0
 * stringToNum('abc') // NaN
 * ```
 */
export function stringToNum(str: string): number {
  return Number(str);
}

/**
 * Converts a string to an array of characters
 * @param str - The string to convert
 * @returns Array of characters
 * @example
 * ```typescript
 * stringToArray('hello') // ['h', 'e', 'l', 'l', 'o']
 * stringToArray('') // []
 * ```
 */
export function stringToArray(str: string): string[] {
  return str.split('');
}

/**
 * Converts an array of characters to a string
 * @param arr - Array of characters
 * @returns The string
 * @example
 * ```typescript
 * arrayToString(['h', 'e', 'l', 'l', 'o']) // 'hello'
 * arrayToString([]) // ''
 * ```
 */
export function arrayToString(arr: string[]): string {
  return arr.join('');
}

/**
 * Converts a number to a boolean (0 = false, non-zero = true)
 * @param num - The number to convert
 * @returns Boolean value
 * @example
 * ```typescript
 * numToBool(1) // true
 * numToBool(0) // false
 * numToBool(-5) // true
 * ```
 */
export function numToBool(num: number): boolean {
  return num !== 0;
}

/**
 * Converts a boolean to a number (true = 1, false = 0)
 * @param bool - The boolean to convert
 * @returns Number value
 * @example
 * ```typescript
 * boolToNum(true) // 1
 * boolToNum(false) // 0
 * ```
 */
export function boolToNum(bool: boolean): number {
  return bool ? 1 : 0;
}

/**
 * Converts a string to a boolean
 * @param str - The string to convert
 * @returns Boolean value (empty string = false, non-empty = true)
 * @example
 * ```typescript
 * stringToBool('hello') // true
 * stringToBool('') // false
 * stringToBool('false') // true (non-empty string)
 * ```
 */
export function stringToBool(str: string): boolean {
  return str.length > 0;
}

/**
 * Converts a boolean to a string
 * @param bool - The boolean to convert
 * @returns String representation
 * @example
 * ```typescript
 * boolToString(true) // 'true'
 * boolToString(false) // 'false'
 * ```
 */
export function boolToString(bool: boolean): string {
  return bool.toString();
}

/**
 * Converts an array to a boolean (empty array = false, non-empty = true)
 * @param arr - The array to convert
 * @returns Boolean value
 * @example
 * ```typescript
 * arrayToBool([1, 2, 3]) // true
 * arrayToBool([]) // false
 * ```
 */
export function arrayToBool<T>(arr: T[]): boolean {
  return arr.length > 0;
}

/**
 * Converts a boolean to an array
 * @param bool - The boolean to convert
 * @returns Array with single boolean element
 * @example
 * ```typescript
 * boolToArray(true) // [true]
 * boolToArray(false) // [false]
 * ```
 */
export function boolToArray(bool: boolean): boolean[] {
  return [bool];
}

/**
 * Converts a number to a boolean array (binary representation)
 * @param num - The number to convert
 * @returns Array of boolean values representing binary
 * @example
 * ```typescript
 * numToBoolArray(5) // [true, false, true] (binary: 101)
 * numToBoolArray(0) // [false]
 * ```
 */
export function numToBoolArray(num: number): boolean[] {
  if (num === 0) return [false];
  const binary = num.toString(2);
  return binary.split('').map(bit => bit === '1');
}

/**
 * Converts a boolean array to a number (from binary representation)
 * @param arr - Array of boolean values
 * @returns The number
 * @example
 * ```typescript
 * boolArrayToNum([true, false, true]) // 5 (binary: 101)
 * boolArrayToNum([false]) // 0
 * ```
 */
export function boolArrayToNum(arr: boolean[]): number {
  if (arr.length === 0) return 0;
  const binary = arr.map(bool => bool ? '1' : '0').join('');
  return parseInt(binary, 2);
}

/**
 * Converts a string to a number array (ASCII values)
 * @param str - The string to convert
 * @returns Array of ASCII values
 * @example
 * ```typescript
 * stringToNumArray('hi') // [104, 105]
 * stringToNumArray('') // []
 * ```
 */
export function stringToNumArray(str: string): number[] {
  return str.split('').map(char => char.charCodeAt(0));
}

/**
 * Converts a number array to a string (from ASCII values)
 * @param arr - Array of ASCII values
 * @returns The string
 * @example
 * ```typescript
 * numArrayToString([104, 105]) // 'hi'
 * numArrayToString([]) // ''
 * ```
 */
export function numArrayToString(arr: number[]): string {
  return arr.map(num => String.fromCharCode(num)).join('');
}

// Export all functions as default object
export default {
  capitalize,
  toCamelCase,
  toKebabCase,
  truncate,
  removeWhitespace,
  isValidEmail,
  generateRandomString,
  // Data type conversion utilities
  numToArray,
  arrayToNum,
  numToString,
  stringToNum,
  stringToArray,
  arrayToString,
  numToBool,
  boolToNum,
  stringToBool,
  boolToString,
  arrayToBool,
  boolToArray,
  numToBoolArray,
  boolArrayToNum,
  stringToNumArray,
  numArrayToString,
};
