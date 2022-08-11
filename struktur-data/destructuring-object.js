// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);


// Destructuring Assignment

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }

// let firstName = "Dimas";
// let age = 20;

// menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age } = profile);

// console.log(firstName);
// console.log(age);

// Default Values

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }


// const { firstName, age, isMale } = profile;

// console.log(firstName)
// console.log(age)
// console.log(isMale)

// Assigning to Different Local Variable Names

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
