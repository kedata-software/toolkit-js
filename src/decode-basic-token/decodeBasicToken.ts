/**
 * @description Decode basic token and return username and password. Don't passing `Basic` prefix.
 */
const decodeBasicToken = (token: string) => {
  if (typeof token !== 'string') {
    throw new Error('Token must be a string');
  }

  const base64 = Buffer.from(token, 'base64').toString('utf8');
  if (!base64.includes(':')) {
    throw new Error('Invalid token format');
  }

  const [username, ...password] = base64.split(':');

  return { username, password: password.join(':') };
};

export default decodeBasicToken;
