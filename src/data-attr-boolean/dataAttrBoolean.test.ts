import { describe, it, expect } from 'vitest';
import dataAttrBoolean from './dataAttrBoolean';

describe('dataAttrBoolean', () => {
  it('Should return undefined when value is undefined', () => {
    expect(dataAttrBoolean(undefined)).toBeUndefined();
  });

  it('Should return empty string when value is true', () => {
    expect(dataAttrBoolean(true)).toBe('');
  });

  it('Should return undefined when value is false', () => {
    expect(dataAttrBoolean(false)).toBeUndefined();
  });
});
