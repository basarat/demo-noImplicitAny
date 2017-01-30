> If you have a function that never returns, TypeScript infers the return type as never. 
> A good thing about never is that it can only ever be assigned to another never. 

Here we have a function that never returns. 

```
function foo ()  {while (true){}} 
```

TypeScript infers that the return type is never. 

```
const bar = foo();
```

Similarly if a function always throws, TypeScript again infers that the return type is never. 

```
function foo ()  {throw new Error('Not implemented')} 
const bar = foo(); 
```

Also if you end up with a condition that can never be true TypeScript infers never

```
let foo = 123; 
if (typeof foo === 'number') { 
}
else {
    const bar = foo;
}
```

A never can only ever be assigned to another never.

```
let foo = 123; 
if (typeof foo === 'number') { 
}
else {
    const bar = foo;
    const bas:number = bar; // error
}
```

There is never an actual value contained in a never variable.

