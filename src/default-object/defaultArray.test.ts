import { describe, it, expect } from 'vitest';
import defaultObject from './defaultObject';

describe('defaultObject', () => {
  it('should return empty object when value is undefined', () => {
    expect(defaultObject(undefined)).toEqual({});
  });

  it('should return empty object when value is null', () => {
    expect(defaultObject(null)).toEqual({});
  });

  it('should return empty object when value is empty object', () => {
    expect(defaultObject({})).toEqual({});
  });

  it('should return value when value is not empty', () => {
    expect(defaultObject({ hello: 'world' })).toEqual({ hello: 'world' });
  });
});
