export const truncate = (str: string, length: number): string => {
  if (str.length < 6 || str.length <= length) return str;

  let truncateStr: string = "";

  for (let i = 0; i < length; i++) {
    truncateStr += str[i];
  }

  return `${truncateStr}...`;
};
