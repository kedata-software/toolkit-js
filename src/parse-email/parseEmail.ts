const parseEmail = (email: string) => {
  const isValidEmail = email.includes('@');

  if (!isValidEmail) {
    return { username: undefined, host: undefined };
  }

  const result = email.split('@');
  const username = result[0] as string | undefined;
  const host = result[1] as string | undefined;

  return { username, host };
};

export default parseEmail;
