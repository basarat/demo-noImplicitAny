export let lastSumResult: number

export function sum(a: number, b: number) {
  lastSumResult = a + b
  return lastSumResult
}
