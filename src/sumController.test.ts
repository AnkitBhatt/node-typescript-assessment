import {describe, expect, test} from '@jest/globals';

describe('Sum Controller', () => {
  test('should return 0 for no input', () => {
    expect(sum()).toBe(0);
  });
});