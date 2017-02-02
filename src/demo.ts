declare var foo: 
  | string
  | number
  | boolean

if (typeof foo === 'string') {
  /** todo */
} else if (typeof foo === 'number') {
  /** todo */
} else if (typeof foo === 'boolean') { 
  
}else {
  const check: never = foo;
}