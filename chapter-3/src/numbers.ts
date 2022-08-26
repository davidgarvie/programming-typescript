export {}

let a = 1234                // number
var b = Infinity * 0.10     // number
// similar to booleans, the TS compiler will infer a type literal here as we are using const. The type is not number but the type is the specific numeric value 5678.
const c = 5678              // 5678
let d = a < b               // boolean
let e: number = 100         // number
let f: 26.218 = 26.218      // 26.218
// let g: 26.218 = 10          // Error TS2322: Type '10' is not assignable
                            // to type '26.218'.



// when working with long numbers, you can use numeric seperators to make the numbers easier to read   
let oneMillion = 1_000_000; // number
const twoMillion = 2_000_000; // 2000000
