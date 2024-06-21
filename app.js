// write code here
let a = 1;      // a=1, b=Undefined, c=Undefined, d=Undefined, e=Undefined
let b = 2;      // a=1, b=2, c=Undefined, d=Undefined, e=Undefined
let c = a++;    // a=2, b=2, c=1, d=Undefined, e=Undefined
let d = ++c;    // a=2, b=2, c=2, d=2, e=Undefined
let e = ++d + d++ + d;  // a=2, b=2, c=2, d=4, e=10 (3+3+4)

console.log(`The value of 'a' is: ${a}, \nThe value of 'b' is: ${b}, \nThe value of 'c' is: ${c}, \nThe value of 'd' is: ${d}, \nThe value of 'e' is: ${e}`)