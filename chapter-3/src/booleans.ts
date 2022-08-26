export {}

/**
 * the compiler can easily infer that a and b are booleans
 * Type iteral - a type that represents a single value and nothing else
 */

let a = true                // boolean
var b = false               // boolean
// because we are using const to assign a value to c, the compiler kmows the value will never change so can narrow the type from boolean to a type literal of true
const c = true              // true
// not necessary to annotate here, the compiler can figure it out
let d: boolean = true       // boolean
// e is a type literal. The type of c is not a boolean but a specific boolean. This can provide some additional type safety 
let e: true = true          // true
// let f: true = false         // Error TS2322: Type 'false' is not assignable to type "true"

