/**
 * @description
 * If we set data attribute with boolan type it will treat boolean as string.
 * This function is useful when we want show data attribute only when value is `true`. The data attribute will be removed when value is `false`.
 *
 * @example
 * dataAttrBoolean(true) // returns ''
 * dataAttrBoolean(false) // returns undefined
 * dataAttrBoolean(12) // returns undefined
 */
const dataAttrBoolean = (value?: unknown) => {
  return value ? '' : undefined;
};

export default dataAttrBoolean;
