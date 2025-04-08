const ______DO_NOT_EDIT_THIS_ARRAY: unknown[] = [];

const defaultArray = <T>(value: T[] | undefined | null): T[] => {
  return !!value ? value : (______DO_NOT_EDIT_THIS_ARRAY as T[]);
};

export default defaultArray;
