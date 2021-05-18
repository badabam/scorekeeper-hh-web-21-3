export function add(...rest) {
  return rest.reduce((sum, cur) => sum + cur)
}
