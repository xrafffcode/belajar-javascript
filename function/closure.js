// function init() {
//     var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init

//     function greet() {      // Inner function, merupakan contoh closure
//         console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
//     }

//     greet();
// }

// init();


// function init() {
//     var name = 'Obi Wan';

//     function greet() {
//         console.log(`Halo, ${name}`);
//     }

//     return greet;
// }

// let myFunction = init();
// myFunction();

// let counter = 0;

// let add = () => {
//     return ++counter;
// }

// console.log(add());
// console.log(add());
// counter = 23;
// console.log(add());

let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());