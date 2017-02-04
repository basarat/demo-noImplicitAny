export let lastSumResult: number

export function sum(a: number, b: number) {
  lastSumResult = a + b
  return lastSumResult
}

const foo = {
  a: 123,
  b: 456
}
const values = Object.keys(foo).map(key => foo[key])