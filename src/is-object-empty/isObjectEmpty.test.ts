import { describe, it } from 'vitest';
import isObjectEmpty from './isObjectEmpty';

describe('isObjectEmpty', () => {
  it('should return true for empty object', () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  it('should return false for non-empty object', () => {
    expect(isObjectEmpty({ a: 1 })).toBe(false);
  });

  it('should return true for null', () => {
    expect(isObjectEmpty(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isObjectEmpty(undefined)).toBe(true);
  });
});
