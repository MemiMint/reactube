export function getSize<T extends Record<string, string>>(
  sizes: T,
  size: keyof T,
): string {
  return sizes[size] ?? "";
}
