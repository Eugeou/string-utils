import {
  capitalize,
  toCamelCase,
  toKebabCase,
  truncate,
  removeWhitespace,
  isValidEmail,
  generateRandomString,
} from '../index';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('hello world')).toBe('Hello world');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('toCamelCase', () => {
    it('should convert strings to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('hello-world')).toBe('helloWorld');
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    it('should handle already camelCase strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });
  });

  describe('toKebabCase', () => {
    it('should convert strings to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
      expect(toKebabCase('Hello World')).toBe('hello-world');
      expect(toKebabCase('hello_world')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    it('should truncate strings to specified length', () => {
      expect(truncate('Hello world', 5)).toBe('Hello...');
      expect(truncate('Hello world', 5, '...')).toBe('Hello...');
    });

    it('should not truncate if string is shorter than length', () => {
      expect(truncate('Hi', 5)).toBe('Hi');
    });

    it('should use custom suffix', () => {
      expect(truncate('Hello world', 5, '---')).toBe('Hello---');
    });
  });

  describe('removeWhitespace', () => {
    it('should remove all whitespace from strings', () => {
      expect(removeWhitespace('hello world')).toBe('helloworld');
      expect(removeWhitespace('  hello   world  ')).toBe('helloworld');
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('generateRandomString', () => {
    it('should generate string of correct length', () => {
      const result = generateRandomString(10);
      expect(result).toHaveLength(10);
    });

    it('should generate different strings on multiple calls', () => {
      const result1 = generateRandomString(10);
      const result2 = generateRandomString(10);
      expect(result1).not.toBe(result2);
    });

    it('should use custom charset', () => {
      const result = generateRandomString(5, '0123456789');
      expect(result).toMatch(/^[0-9]{5}$/);
    });
  });
});
