/**
 * Tablice są kolekcjami elementów o różnych typach.
 * W JavaScript - zawsze są one dynamiczne.
 *
 * Nawet określając wielkość tablicy - używając konstruktora
 * - można ją później zmienić - dodając elementy
 *
 *
 * W tablicy elementy mają określony porządek, i można się do nich odnieść po indeksach.
 * Tablica tworzona jest najczęściej za pomocą znaków: [] - to tzw. literał tablicowy
 * To wystarczy (nie używamy konstruktora).
 *
 * TypeScript pozwala nam na dokładnie określenie jakie typy elementów będą przechowywane w tablicy.
 * */
// type NumberOrString = number | string;

const myNumbers: Array<number> = [1, 2, 3, 1000];
// const myNumbers: Array<number | string> = ['A', 'D', 1000];
const myNumbers2: (number | string)[] = ['A', 'D', 1000];

// Poniższy zapis nie zadziała
// Generalnie TypeScript już nas do tego przyzwyczaił - wnioskowanie typów!
// myNumbers.push('234');

// Co jeśli chcemy zdefiniować sami jakie elementy przechowuje tablica:
const secretWords: string[] = [];

// Dodanie elementów do tablicy:
secretWords.push('lightning');
secretWords.push('thunder');
// tutaj również jesteśmy "pilnowani":
// secretWords.push(1233);

console.log(secretWords);

// Co jeśli chcemy mieć tablice z 2 (i więcej) typami:
const twoKindsOfTypes: (string | number)[] = [];

twoKindsOfTypes.push(1123);
twoKindsOfTypes.push('23.2223');
// twoKindsOfTypes.push(true);

console.log(twoKindsOfTypes);
// Wyjmowanie elementów z tablicy:
twoKindsOfTypes.pop(); //?

console.log(twoKindsOfTypes);

// Dodanie elementu na początek tablicy:
twoKindsOfTypes.unshift('!');
console.log(twoKindsOfTypes);

// Usunięcie elementu z początku tablicy
twoKindsOfTypes.shift(); //?
console.log(twoKindsOfTypes);

// odczytanie elementu pod indeksem: 0
console.log(twoKindsOfTypes[0]);

// podmiana numeru pod indeksem 0:
twoKindsOfTypes[0] = 211;

// Tablice dostarczają nam tzw. HigherOrder Functions
// Dzięki którym możemy wykonywać na nich operacje, które nie zmieniają ich struktury (nie mutują):

// iteracja po elementach:
twoKindsOfTypes.forEach((value: string | number) => {
    console.log(value);
})


// odfiltrowanie elementów spełniających dany warunek:
const filtered = myNumbers.filter((value: number) => value > 10);

console.log(filtered);
// potwierdzenie, że po filtrowaniu tablica `myNumbers` nie uległa zmianie:
console.log(myNumbers);


// mapowanie elementów:
const mappedArray = myNumbers.map<string>((value: number) => 'Hello ' + value);

console.log(mappedArray);
// potwierdzenie, że po filtrowaniu tablica `myNumbers` nie uległa zmianie:
console.log(myNumbers);


