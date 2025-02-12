const currentYear: number = new Date().getFullYear();
export const generateYearRange = (
  start: number = 1980,
  end: number = currentYear,
): number[] => {
  const years: number[] = [];

  for (let i = start; i <= end; i++) {
    years.push(i);
  }

  return years;
};
