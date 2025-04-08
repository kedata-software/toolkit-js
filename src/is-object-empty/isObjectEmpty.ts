const isObjectEmpty = (obj?: Record<any, any> | null) => {
  if (!obj) {
    return true;
  }

  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export default isObjectEmpty;
