const ______DO_NOT_EDIT_THIS_OBJECT: any = {};

const defaultObject = <T>(value: T | undefined | null): T => {
  return !!value ? value : (______DO_NOT_EDIT_THIS_OBJECT as T);
};

export default defaultObject;
