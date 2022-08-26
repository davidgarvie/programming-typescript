export {}

/**
 * Typescript will never infer something as unknown
 * You can compare values to types that are unknown
 * You have to validate the type before performing other operators (e.g. d variable)
 */


let a: unknown = 30         // unknown
let b = a === 123           // boolean
// let c = a + 10              // compilation error as compiler does not let us use the + operator on an unknown type
if (typeof a === 'number') {
  let d = a + 10            // number
}
