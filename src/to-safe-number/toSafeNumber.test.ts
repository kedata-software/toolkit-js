import { describe, it } from 'vitest';
import toSafeNumber from './toSafeNumber';

describe('toSafeNumber', () => {
  it('should return 0 for invalid number', () => {
    expect(toSafeNumber('abc')).toBe(0);
  });

  it('should return 0 for NaN', () => {
    expect(toSafeNumber('NaN')).toBe(0);
  });

  it('should return 1 for 1', () => {
    expect(toSafeNumber('1')).toBe(1);
  });

  it('should return 1.5 for 1.5', () => {
    expect(toSafeNumber('1.5')).toBe(1.5);
  });
});
