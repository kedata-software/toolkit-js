import { describe, it, expect } from 'vitest';
import getBytes from './getBytes';

describe('getBytes', () => {
  it('Should return 1024 bytes for 1 KB', () => {
    expect(getBytes.fromKB(1)).toBe(1024);
  });

  it('Should return 1048576 bytes for 1 MB', () => {
    expect(getBytes.fromMB(1)).toBe(1048576);
  });

  it('Should return 1073741824 bytes for 1 GB', () => {
    expect(getBytes.fromGB(1)).toBe(1073741824);
  });
});
