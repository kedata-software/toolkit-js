import { describe, it, expect } from 'vitest';
import parseEmail from './parseEmail';

describe('parseEmail', () => {
  it('Should valid return when success', () => {
    const { username, host } = parseEmail('test@test.com');
    expect(username).toBe('test');
    expect(host).toBe('test.com');
  });

  it('Should valid return when success', () => {
    const { username, host } = parseEmail('test@test.com');
    expect(username).toBe('test');
    expect(host).toBe('test.com');
  });

  it('Should return undefined when invalid', () => {
    const { username, host } = parseEmail('test');
    expect(username).toBeUndefined();
    expect(host).toBeUndefined();
  });
});
