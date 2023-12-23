export function colorHexToInt(color: string) {
  return parseInt(color.replace("#", ""), 16);
}
