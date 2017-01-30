> If you have a function that never returns, TypeScript infers the return type as never. 
> A good thing about never is that it can only ever be assigned to another never. 

Here we have a function that never returns. 

```
const foo = () => {
  while (true) { }
}
```

TypeScript infers that the return type is never. 

```
const bar = foo();
```

Similarly if a function always throws, TypeScript again infers that the return type is never. 

```
const foo = () => {
  throw new Error('Not implemented')
};
const bar = foo(); 
```

Also if you end up with a condition that can never be true TypeScript infers never

```
const foo = 123;
if (foo === 123) {
}
else {
  let bar = foo;
}
```

A never can only ever be assigned to another never.

```
const foo = 123;
if (foo === 123) {
}
else {
  let bar = foo;
  bar = 456;
}
```

Its called never because there is never an actual value in a never variable.

