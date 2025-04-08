import { describe, it } from 'vitest';
import delayAsync from './delayAsync';

describe('delayAsync', () => {
  it('should delay for 1 second', async () => {
    const start = Date.now();
    await delayAsync(200);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(200);
  });
});
