//for each
const letters = ["a", "b", "c", "d"];

// Con funciones por expresión
const f = function () {
    console.log("Un elemento.");
};
letters.forEach(f);

// Con funciones anónimas
letters.forEach(function () {
    console.log("Un elemento.");
});

// Con funciones flecha
letters.forEach(() => console.log("Un elemento."));

console.log("=======================")

const letters2 = ["a", "b", "c", "d"];

letters2.forEach((element) => console.log(element));
// Devuelve 'a' / 'b' / 'c' / 'd'

letters2.forEach((element, index) => console.log(element, index));
// Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3

letters2.forEach((element, index, array) => console.log(array[0]));
// Devuelve 'a' / 'a' / 'a' / 'a'

console.log("=======================")

const letters3 = ["a", "b", "c", "d"];
letters3.every((letter) => letter.length === 1); // true

console.log("=======================")

const letters4 = ["a", "b", "c", "d"];

// Esta función se ejecuta por cada elemento del array
const condition = function (letter) {
    // Si el tamaño del elemento (string) es igual a 1
    if (letters4.length == 1) {
        return true;
    }
    else {
        return false;
    }
};

// Si todos los elementos devuelven true, devuelve true
letters4.every(condition);   // true

console.log("=======================")

const letters5 = ["a", "bb", "c", "d"];
letters5.some((element) => element.length == 2);   // true

console.log("=======================")

const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nameSizes = names.map((name) => name.length);

nameSizes; // Devuelve [3, 5, 5, 9, 9]

console.log("=======================")

const names2 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const filteredNames = names2.filter((name2) => name2.startsWith("P"));

filteredNames; // Devuelve ['Pablo', 'Pedro', 'Pancracio']

console.log("=======================")

const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

values.flat(0);         // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
values.flat(1);         // [10, 15, 20, 25, 30, 35, 40, 45, [50, 55], 60];
values.flat(2);         // [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

// Idem al anterior, pero si hubieran más niveles los aplanaría todos
values.flat(Infinity);

console.log("=======================")

const values2 = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

values2.flatMap(element => Array.isArray(element) ? element.length : 1);
// [1, 1, 1, 2, 1, 4]

console.log("=======================")

const names3 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

names3.find((name3) => name3.length == 5);       // 'Pablo'
names3.findIndex((name3) => name3.length == 5);  // 1

/*

console.log("=======================")

const names4 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

names4.findLast((name4) => name4.length == 5);       // 'Pedro'
names4.findLastIndex((name4) => name4.length == 5);  // 2

console.log("=======================")

*/

const numbers = [95, 5, 25, 10, 25];
numbers.reduce((first, second) => {
    console.log(`F=${first} S=${second}`);
    return first + second;
});

// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

console.log("=======================")

const numbers2 = [95, 5, 25, 10, 25];

numbers2.reduce((first, second) => first - second);
// 95 - 5 - 25 - 10 - 25. Devuelve 30

numbers2.reduceRight((first, second) => first - second);
// 25 - 10 - 25 - 5 - 95. Devuelve -110

//parametro inicial

const numbers3 = [95, 5, 25, 10, 25];
numbers3.reduce((accumulator, nextElement) => {
    console.log(`F=${accumulator} S=${nextElement}`);
    return accumulator + nextElement;
}, 0);

// F=0   S=95   (iteración inicial): 0 + elemento 1: 95) = 95
// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

console.log("=======================")

