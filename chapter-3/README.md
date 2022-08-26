# Chapter 3

## Type literals 

> "A type that represents a single value and nothing else" 

The typescript compiler knows that when a primitive variable is assigned a value using `const` that the value can never be reassigned. As such, it can narrow the type from a primitive value (e.g. `boolean`) to a single value (e.g. `true`). Some examples: 

```ts
const a = true; // true
const b = 42; // 42
const c = "hey ma"; // hey ma
```

Type literals can also be explicitly applied to variables: 

```ts
let e = 42; // number
let d: 42 = 42 // 42 
```

Note, type literals are not automatically applied to object properties when objects are declared using `const`. This is because objects in Javascript are mutable and the type _can_ change. 

## Structural Typing
> "A style of programming where you just care that an object has certain properties, and not what it's name is (nominal typing). Also referred to as duck typing (if it looks like a duck and sounds like a duck)"

## Index Signatures
In the following example: 
```ts
let foo: {
  [key: number]: boolean 
}
```
We are telling the compiler that all keys of type number must be a boolean value. For example: 

```ts
let foo: {
  [key: number]: boolean 
}

foo = {
    10: false,
    20: true,
    30: false,
}
```
This is called an index signature and let's us specify the types of object properties when we do not know what the property names may be. 

>The [key: T]: U syntax is called an index signature, and this is the way you tell TypeScript that the given object might contain more keys. The way to read it is, “For this object, all keys of type T must have values of type U.

We can use any word for the key name, it doesn't have to be `key`. 
```ts
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  '34D': 'Leslie Knope',
  '34E': 'Ron Swanson'
}
```

## Typing Objects
Do not use an empty object literal or the Object constructor to type an object, it will cause problems. All of these are will not throw an error:
```ts
let foo : {};
foo = {}
foo = {x: 1}
foo = []
foo = 2

let bar: Object
bar = "oops";
bar = 42;
```
