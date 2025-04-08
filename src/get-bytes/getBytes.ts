const getBytes = {
  /**
   * @description 1 KB = 1024 bytes
   * @example
   * getBytes.fromKB(1) // 1024
   * getBytes.fromKB(5) // 5120
   */
  fromKB: (KB: number) => KB * 1024,
  /**
   * @description 1 MB = 1048576 bytes
   * @example
   * getBytes.fromMB(1) // 1048576
   * getBytes.fromMB(5) // 5242880
   */
  fromMB: (MB: number) => MB * 1024 * getBytes.fromKB(1),
  /**
   * @description 1 GB = 1073741824 bytes
   * @example
   * getBytes.fromGB(1) // 1073741824
   * getBytes.fromGB(5) // 5368709120
   */
  fromGB: (GB: number) => GB * 1024 * getBytes.fromMB(1),
};

export default getBytes;
