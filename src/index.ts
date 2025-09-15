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

// Export all functions as default object
export default {
  capitalize,
  toCamelCase,
  toKebabCase,
  truncate,
  removeWhitespace,
  isValidEmail,
  generateRandomString,
};
