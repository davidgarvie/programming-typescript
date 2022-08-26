export {}

let foo: object = {
    x: 'hey ma'
}

// this is a compilaton error because b does not exist on the object type. 
// let value = foo.x;

let bar = {
    x: 'hey ma'
} // { x: string }

// this time we can safely access the property on our object because the compiler understands that our object has a property called "c"
let value = bar.x;

// here we explicitly describe the type of the object
let baz: { x: string } = {
    x: 'hey ma'
} 
