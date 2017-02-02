> TypeScript never type
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
You can use this to do exhaustive checks in union types. For example let say you have a variable returned from a server that can be a string or a number

```
declare var foo: 
  | string
  | number
```

You can handle these cases using typeof. You can add an additional else to tell TypeScript that it should ensure that all types were eliminated.

```
declare var foo: 
  | string
  | number

if (typeof foo === 'string') { 
  /** todo */
} else if (typeof foo === 'number') { 
  /** todo */
} else {
  const check: never = foo;
}
```

Later if you need to add another type to the union, you will get nice errors for all the places where that type was not handled

```
declare var foo: 
  | string
  | number

if (typeof foo === 'string') { 
  /** todo */
} else if (typeof foo === 'number') { 
  /** todo */
} else {
  const check: never = foo;
}
```

In this case you can add another typeof check to handle this new case cases and then the errors go away

```
declare var foo:
  | string
  | number
  | boolean

if (typeof foo === 'string') {
  /** todo */
} else if (typeof foo === 'number') {
  /** todo */
} else if (typeof foo === 'boolean') {
  /** todo */
} else {
  const check: never = foo;
}
```
