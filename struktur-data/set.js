const numberSet = new Set([1, 4, 6, 4, 1,]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

// Pada kode di atas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4. Secara otomatis Set akan membuang angka yang sama
console.log(numberSet);