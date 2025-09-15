import {
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

describe('Data Type Conversion Utils', () => {
  describe('numToArray', () => {
    it('should convert positive numbers to digit arrays', () => {
      expect(numToArray(123)).toEqual([1, 2, 3]);
      expect(numToArray(456)).toEqual([4, 5, 6]);
      expect(numToArray(1)).toEqual([1]);
    });

    it('should convert zero to array', () => {
      expect(numToArray(0)).toEqual([0]);
    });

    it('should convert negative numbers to digit arrays', () => {
      expect(numToArray(-123)).toEqual([-1, 2, 3]);
      expect(numToArray(-456)).toEqual([-4, 5, 6]);
    });
  });

  describe('arrayToNum', () => {
    it('should convert digit arrays to numbers', () => {
      expect(arrayToNum([1, 2, 3])).toBe(123);
      expect(arrayToNum([4, 5, 6])).toBe(456);
      expect(arrayToNum([1])).toBe(1);
    });

    it('should handle zero', () => {
      expect(arrayToNum([0])).toBe(0);
    });

    it('should handle empty arrays', () => {
      expect(arrayToNum([])).toBe(0);
    });
  });

  describe('numToString', () => {
    it('should convert numbers to strings', () => {
      expect(numToString(123)).toBe('123');
      expect(numToString(0)).toBe('0');
      expect(numToString(-456)).toBe('-456');
    });
  });

  describe('stringToNum', () => {
    it('should convert valid number strings to numbers', () => {
      expect(stringToNum('123')).toBe(123);
      expect(stringToNum('0')).toBe(0);
      expect(stringToNum('-456')).toBe(-456);
    });

    it('should return NaN for invalid strings', () => {
      expect(stringToNum('abc')).toBeNaN();
    });

    it('should return 0 for empty strings', () => {
      expect(stringToNum('')).toBe(0);
    });
  });

  describe('stringToArray', () => {
    it('should convert strings to character arrays', () => {
      expect(stringToArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
      expect(stringToArray('abc')).toEqual(['a', 'b', 'c']);
    });

    it('should handle empty strings', () => {
      expect(stringToArray('')).toEqual([]);
    });
  });

  describe('arrayToString', () => {
    it('should convert character arrays to strings', () => {
      expect(arrayToString(['h', 'e', 'l', 'l', 'o'])).toBe('hello');
      expect(arrayToString(['a', 'b', 'c'])).toBe('abc');
    });

    it('should handle empty arrays', () => {
      expect(arrayToString([])).toBe('');
    });
  });

  describe('numToBool', () => {
    it('should convert non-zero numbers to true', () => {
      expect(numToBool(1)).toBe(true);
      expect(numToBool(-5)).toBe(true);
      expect(numToBool(100)).toBe(true);
    });

    it('should convert zero to false', () => {
      expect(numToBool(0)).toBe(false);
    });
  });

  describe('boolToNum', () => {
    it('should convert true to 1', () => {
      expect(boolToNum(true)).toBe(1);
    });

    it('should convert false to 0', () => {
      expect(boolToNum(false)).toBe(0);
    });
  });

  describe('stringToBool', () => {
    it('should convert non-empty strings to true', () => {
      expect(stringToBool('hello')).toBe(true);
      expect(stringToBool('false')).toBe(true); // non-empty string is truthy
      expect(stringToBool('0')).toBe(true);
    });

    it('should convert empty strings to false', () => {
      expect(stringToBool('')).toBe(false);
    });
  });

  describe('boolToString', () => {
    it('should convert booleans to strings', () => {
      expect(boolToString(true)).toBe('true');
      expect(boolToString(false)).toBe('false');
    });
  });

  describe('arrayToBool', () => {
    it('should convert non-empty arrays to true', () => {
      expect(arrayToBool([1, 2, 3])).toBe(true);
      expect(arrayToBool(['a'])).toBe(true);
      expect(arrayToBool([false])).toBe(true);
    });

    it('should convert empty arrays to false', () => {
      expect(arrayToBool([])).toBe(false);
    });
  });

  describe('boolToArray', () => {
    it('should convert booleans to single-element arrays', () => {
      expect(boolToArray(true)).toEqual([true]);
      expect(boolToArray(false)).toEqual([false]);
    });
  });

  describe('numToBoolArray', () => {
    it('should convert numbers to binary boolean arrays', () => {
      expect(numToBoolArray(5)).toEqual([true, false, true]); // binary: 101
      expect(numToBoolArray(3)).toEqual([true, true]); // binary: 11
      expect(numToBoolArray(8)).toEqual([true, false, false, false]); // binary: 1000
    });

    it('should handle zero', () => {
      expect(numToBoolArray(0)).toEqual([false]);
    });
  });

  describe('boolArrayToNum', () => {
    it('should convert boolean arrays to numbers from binary', () => {
      expect(boolArrayToNum([true, false, true])).toBe(5); // binary: 101
      expect(boolArrayToNum([true, true])).toBe(3); // binary: 11
      expect(boolArrayToNum([true, false, false, false])).toBe(8); // binary: 1000
    });

    it('should handle empty arrays', () => {
      expect(boolArrayToNum([])).toBe(0);
    });

    it('should handle single false', () => {
      expect(boolArrayToNum([false])).toBe(0);
    });
  });

  describe('stringToNumArray', () => {
    it('should convert strings to ASCII arrays', () => {
      expect(stringToNumArray('hi')).toEqual([104, 105]);
      expect(stringToNumArray('A')).toEqual([65]);
      expect(stringToNumArray('!')).toEqual([33]);
    });

    it('should handle empty strings', () => {
      expect(stringToNumArray('')).toEqual([]);
    });
  });

  describe('numArrayToString', () => {
    it('should convert ASCII arrays to strings', () => {
      expect(numArrayToString([104, 105])).toBe('hi');
      expect(numArrayToString([65])).toBe('A');
      expect(numArrayToString([33])).toBe('!');
    });

    it('should handle empty arrays', () => {
      expect(numArrayToString([])).toBe('');
    });
  });
});
