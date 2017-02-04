> TypeScript noImplicitAny

> Increase TypeScript type safety with `noImplicitAny`.

> TypeScript tries to infer as much about your code as it can.
> But sometimes there really is not enough context for it to infer reliably. To see all such cases you 



If we go ahead and export a variable from a file, 

```
export let lastSumResult
```

TypeScript cannot know reliably the intended use of this variable, so it inferrs the `any` type.

Now let create an sum function, that is meant to sum two numbers.
```
export function sum(a, b) {
  lastSumResult = a + b
  return lastSumResult
}
```

However TypeScript cannot know reliably in this case if a,b are meant to be a number or a string so it infers the `any` type.


The main reason why the any type is bad is because it is compatible with all types. E.g. you could call sum with two booleans,


```
sum(true, true)
```

This is almost definitely not the intended use case of the sum function. Similarly you can assign any value you want to the lastSumResult variable.

```
lastSumResult = false
```

To catch all the cases where TypeScript cannot infer the reliably the intended type of a variable or parameter you can enable the flag `noImplicitAny` in your tsconfig.json

As soon as you switch this on, you now have to provide annotations for any variables whose type cannot be inferred e.g. the parameters for sum, and the lastSumResult variable.


```
export let lastSumResult: number

export function sum(a: number, b: number) {
  lastSumResult = a + b
  return lastSumResult
}

```

And with these annotations in place the errors cascade to misss-usages of the these variables. 

```
import { sum } from './demo'

sum(1, 2)
```

one thing to be aware of with `noImplicitAny` is that it also prevents indexer access into objects. As an example consider an object foo that has a few members 

```
const foo = {
  a: 123,
  b: 456
}
```
We can go ahead and get all its values using `Object.keys` and mapping each key to a value in foo. 

```
const values = Object.keys(foo).map(key => foo[key])
```

However TypeScript will complain that the object foo does not have an index signature. 

To make it easier for you to write dynamic code like this without having to forgo noImplicitAny completely, we can use the compiler flag `suppressImplicitAnyIndexErrors`