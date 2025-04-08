import omitProps from './omitProps';

describe('omitProps', () => {
  it('should omit props', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = omitProps(obj, ['a']);

    expect(result).toEqual({
      b: 2,
      c: 3,
    });
  });
});
