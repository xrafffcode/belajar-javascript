const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

// Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya,
// selanjutnya kita akan memodifikasi sebuah object.Untuk mengubah nilai properti di dalam object kita gunakan assignment operator(=).

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// mengganti nilai properti 
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

// menambah objek
spaceship.class = "Light freighter";

// untuk menghapus object
delete spaceship.manufacturer;

console.log(spaceship);
