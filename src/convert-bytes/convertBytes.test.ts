import { describe, it, expect } from 'vitest';
import convertBytes from './convertBytes';

describe('convertBytes', () => {
  it('Should convert 1024 bytes to be 1 KB', () => {
    expect(convertBytes.toKB(1024)).toBe(1);
  });

  it('Should convert 1048576 bytes to be 1 MB', () => {
    expect(convertBytes.toMB(1048576)).toBe(1);
  });

  it('Should convert 5242880 bytes to be 5 MB', () => {
    expect(convertBytes.toMB(5242880)).toBe(5);
  });

  it('Should convert 1073741824 bytes to be 1 GB', () => {
    expect(convertBytes.toGB(1073741824)).toBe(1);
  });
});
