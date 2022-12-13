export default function capitalize(str: string): string {
  const firstChar = str[0]
  const restString = str.slice(1)
  return firstChar.toUpperCase() + restString
}
