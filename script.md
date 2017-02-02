> TypeScript tries to infer as much about your code as it can.
> But sometimes there really is not enough context for it to infer reliably.


Let create an sum function, that is meant to add to numbers.
```
export function sum(a,b) {
  return a+b
}

```

However TypeScript cannot know reliably in this case if a,b are meant to be a number or a string so it infers the any type. 

Similarly if we go ahead and export a variable. 

```
export let lastSumResult
```