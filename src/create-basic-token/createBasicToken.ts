/**
 * @description
 * Digunakan untuk membuat basic token. Basic token memiliki format: `username:password` yang di-encode menggunakan base64.
 */
const createBasicToken = (params: { username: string; password: string }) => {
  const { username, password } = params;
  const value = `${username}:${password}`;
  const base64 = Buffer.from(value).toString('base64');

  return base64;
};

export default createBasicToken;
