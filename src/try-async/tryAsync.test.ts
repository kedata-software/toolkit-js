import { describe, it } from 'vitest';
import tryAsync from './tryAsync';

describe('tryAsync', () => {
  it('Should valid return when success', async () => {
    const [data, err] = await tryAsync(async () => 1);
    expect(err).toBeUndefined();
    expect(data).toBe(1);
  });

  it('Should valid return when error', async () => {
    const [data, error] = await tryAsync(async () => {
      throw new Error('Error');
    });
    expect(data).toBeUndefined();
    expect(error).toBeInstanceOf(Error);
  });
});
