import { describe, it } from 'vitest';
import defaultArray from './defaultArray';

describe('defaultArray', () => {
  it('should return empty array when value is undefined', () => {
    expect(defaultArray(undefined)).toEqual([]);
  });

  it('should return empty array when value is null', () => {
    expect(defaultArray(null)).toEqual([]);
  });

  it('should return empty array when value is empty array', () => {
    expect(defaultArray([])).toEqual([]);
  });

  it('should return value when value is not empty array', () => {
    expect(defaultArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
