import { expect, test } from 'vitest';
import createBasicToken from './createBasicToken';

test('Should return "YWRtaW46YWRtaW4=" when username:"admin" and password:"admin"', () => {
  const token = createBasicToken({ username: 'admin', password: 'admin' });
  expect(token).toBe('YWRtaW46YWRtaW4=');
});

test('Should return "Og==" when username:"" and password:""', () => {
  const token = createBasicToken({ username: '', password: '' });
  expect(token).toBe('Og==');
});
