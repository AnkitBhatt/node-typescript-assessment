import {describe, expect, test} from '@jest/globals';
import {sum} from './sumController'

describe('Sum Controller', () => {
  test('should return 0 for no input', () => {
    expect(sum()).toBe(0);
  });

  test('should return number if single numeric is input', () => {
    expect(sum(5)).toBe(5);
  });

  test('should return sum of two values', () => {
    expect(sum(5, 7)).toBe(12);
  });

  test('should return sum of all the values available ', () => {
    expect(sum(5, 7, 13, 1)).toBe(26);
  });
});