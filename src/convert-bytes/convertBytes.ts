const convertBytes = {
  /**
   * @example
   * convertBytes.toKB(1024) // 1
   */
  toKB: (bytes: number) => bytes / 1024,
  /**
   * @example
   * convertBytes.toMB(1048576) // 1
   * convertBytes.toMB(5242880) // 5
   */
  toMB: (bytes: number) => bytes / 1024 / 1024,
  /**
   * @example
   * convertBytes.toGB(1073741824) // 1
   * convertBytes.toGB(5368709120) // 5
   */
  toGB: (bytes: number) => bytes / 1024 / 1024 / 1024,
};

export default convertBytes;
