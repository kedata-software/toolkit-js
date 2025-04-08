/**
 * @description Delay for a given amount of time
 */
const delayAsync = (ms: number) => {
  return new Promise<null>((resolve) => setTimeout(() => resolve(null), ms));
};

export default delayAsync;
