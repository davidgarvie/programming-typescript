export {}
let foo : {
    x: number // property is a number
    y?: string // property is an optional string
    [key: number]: boolean // b can have any number of numeric properties that are of type boolean
}

foo = {x: 1} 
foo = {x: 1, y: undefined}
foo = {x: 1, y: 'd'}
foo = {x: 1, 10: true}
foo = {x: 1, 10: true, 20: false}

// foo = {10: true}          // missing property x
// foo = {x: 1, 33: 'true'}   // type string is not assignable to type boolean
