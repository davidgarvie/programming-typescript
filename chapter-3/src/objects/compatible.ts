export {}

let person : { 
    firstName: string
    lastName: string
} = {
    firstName: "Ron",
    lastName: "Swason"
}

class Person {
    constructor(public firstName: string, public lastName: string ) {}
}

// we can assign person to the Person class because both satisfy the shape of a person (i.e. both the object literal and the class instance have a firstName and a lastName)
person = new Person("Leslie", "Knope");

let a: { b: number} 

// this is a compilaton error because the object is missing a b property
// a = {};

// this is a compilator error because the types are not compatible
// when using object literals, we cannot add additional properties
// a = {
//     b: 1,
//     c: 2,
// }
