export const parseQuantity = (num: number): string => {
  {
    if (num < 1000) return num.toString();

    const units: string[] = ["K", "M", "B", "T"];

    let unitIndex: number = -1;

    while (num >= 1000 && unitIndex <= units.length - 1) {
      num /= 1000;
      unitIndex++;
    }

    const formatted = Math.floor(num * 10) / 10;

    return `${formatted}${units[unitIndex]}`;
  }
};
