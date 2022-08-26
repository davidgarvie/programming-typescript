/**
 * Any is the least restrictive type and prevents typescript from doing useful type checks. Any should be a last resort and can be disabled by configuring tsconfig with either option:
 *     "strict": true
 *     "noImplicitAny": true
 * Note, setting strict as true will automatically enable no implict any
 */

let a: any = 666            // any
let b: any = ['danger']     // any
// In this example Javascript will convert the types and concatonate the results. This can cause some unexpected behaviour but the Typescript compiler will not complain because the type is any.
let c = a + b               // any”

