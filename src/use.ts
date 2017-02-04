import { sum } from './demo'

sum(1, 2)

const foo = {
  a: 123,
  b: 456
}
const values = Object.keys(foo).map(key => foo[key])