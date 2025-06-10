export const sec2min = (seconds: number): { min: number; sec: number } => {
  const min: number = Math.floor(seconds / 60);
  const remainSeconds: number = Math.floor(seconds % 60);

  return {
    min,
    sec: remainSeconds,
  };
};
