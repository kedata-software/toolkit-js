/**
 * @description
 * Wraps an asynchronous function in a try-catch block, capturing both the result
 * of the function and any potential errors.
 */
const tryAsync = async <D, E = Error>(fn: () => Promise<D>) => {
  try {
    return [await fn(), undefined] as [D, undefined];
  } catch (err) {
    return [undefined, err] as [undefined, E];
  }
};

export default tryAsync;
