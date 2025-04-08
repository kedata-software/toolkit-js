import { expect, test } from 'vitest';
import decodeBasicToken from './decodeBasicToken';

test('Should decode YWRtaW46YWRtaW4= (admin:admin)', () => {
  const decoded = decodeBasicToken('YWRtaW46YWRtaW4=');
  expect(decoded).toEqual({ username: 'admin', password: 'admin' });
});

test('Should decode Og== (:)', () => {
  const decoded = decodeBasicToken('Og==');
  expect(decoded).toEqual({ username: '', password: '' });
});

test('Should decode bWFpbEBnbWFpbC5jb206aGVsbG8= (mail@gmail.com:hello)', () => {
  const decoded = decodeBasicToken('bWFpbEBnbWFpbC5jb206aGVsbG8=');
  expect(decoded).toEqual({ username: 'mail@gmail.com', password: 'hello' });
});

test('Should decode bWFpbEBnbWFpbC5jb206aGVsbG86MTIz (mail@gmail.com:hello:123)', () => {
  const decoded = decodeBasicToken('bWFpbEBnbWFpbC5jb206aGVsbG86MTIz');
  expect(decoded).toEqual({
    username: 'mail@gmail.com',
    password: 'hello:123',
  });
});

test('Invalid token format', () => {
  expect(() => decodeBasicToken('invalid')).toThrowError(
    'Invalid token format',
  );
});

test('Token must be a string', () => {
  expect(() => decodeBasicToken(undefined as any)).toThrowError(
    'Token must be a string',
  );
});
