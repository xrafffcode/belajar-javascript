// 1. Assigment Operator
let x = 10;
let y = 5

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

console.log(x);

// 2. Comparison Operator

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda



// 3. Logical Operator
// Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

let ab = 10;
let ba = 12;

/* AND operator */
console.log(ab < 15 && ba > 10); // (true && true) -> true
console.log(ab > 15 && ba > 10); // (false && true) -> false

/* OR operator */
console.log(ab < 15 || ba > 10); // (true || true) -> true
console.log(ab > 15 || ba > 10); // (false || true) -> true