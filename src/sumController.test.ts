import {describe, expect, test} from '@jest/globals';
import {sum} from './sumController'

describe('Sum Controller', () => {
  test('should return 0 for no input', () => {
    expect(sum()).toBe(0);
  });
});