/**
 * @description Generates initials from a given name.
 *
 * @example
 * nameInitials('John Doe'); // JD
 * nameInitials('John'); // J
 * nameInitials(''); // ''
 * nameInitials('John Doe Smith'); // JD
 */
const nameInitials = (name: string) => {
  if (!name) return '';

  const words = name.split(' ', 2);
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  return initials.join('');
};

export default nameInitials;
