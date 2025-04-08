import { describe, expect, it } from 'vitest';
import nameInitials from './nameInitials';

describe('nameInitials', () => {
  it('Should return JD of John Doe', () => {
    expect(nameInitials('John Doe')).toBe('JD');
  });

  it('Should return J of John', () => {
    expect(nameInitials('John')).toBe('J');
  });

  it('Should return empty string for empty name', () => {
    expect(nameInitials('')).toBe('');
  });
});
