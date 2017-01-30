> Never type in TypeScript
> If you have a function that never returns, TypeScript infers the return type as never. 
> A good thing about never is that it can only ever be assigned to another never. 

Here we have a function that has an infinite loop and hence never returns. 

```
const foo = () => {
  while (true) { }
}
```

TypeScript automatically infers the return type of such a function as never. 

```
const bar = foo()
```

Similarly if a function always throws, then again TypeScript infers that the return type to be never. 

```
const foo = () => {
  throw new Error('Not implemented')
}

const bar = foo()
```

Also if during code flow analysis you end up with a condition that can never be true, TypeScript infers the type never

```
const foo = 123
if (foo !== 123) {
  let bar = foo
}
```

There is never any value in a never, and any attempt to add one, will result in an error.

```
const foo = 123
if (foo !== 123) {
  let bar = foo
  bar = 456
}
```



