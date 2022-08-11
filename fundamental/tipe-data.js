// Macam-macam tipe data
// 1. String
// 2. Number
// 3. Boolean
// 4. Object
// 5. Array
// 6. Function
// 7. Undefined




// 1. Undefined

let x;
console.log(typeof (x));

/* output: undefined */

// 2. Numbers

let xy = 10;
console.log(typeof (xy))

/* output: number */

let y = 17.25;
console.log(typeof (y))

/* output: number */


let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/


/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// 3. BigInt

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

// 4. String
let greet = "Hello";
console.log(typeof (greet))

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question)

/* output: "What do you think of JavaScript?" I asked */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// 5. Boolean

let xb = true;
let yb = false;

console.log(typeof (xb))
console.log(typeof (yb))

/* output: 
boolean
boolean
*/

const ab = 10;
const bb = 12;

let isGreater = ab > bb;
let isLess = ab < bb;

console.log(isGreater);
console.log(isLess);

// 6. Null

let someLaterData = null;
console.log(someLaterData);

// 7. Symbol

const id = Symbol("id");
console.log(id);