const toSafeNumber = (value: string) => {
  const parsed = +value;
  return isNaN(parsed) ? 0 : parsed;
};

export default toSafeNumber;
