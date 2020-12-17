/**
 * W TypeScript używając słowa kluczowego `type`
 * mamy możliwość definiowania własnych typów.
 *
 * Możemy to robić na podstawie typów już istniejących.
 *
 * Nie tylko tworząc nowe typy - ale również alias'ując już istniejące.
 *
 * Jeśli dany typ - jest stosowany tylko jednorazowo, lub w obrębie jedynie
 * tzw. local scope i programista widzi że nie będzie mu nigdzie indziej potrzebny,
 * może określić typ w tzw. sposób "inline"
 * Nie musi wtedy go nazywać, wystarczy że go ustali pomiędzy słowem kluczowym a znakiem równości dla zmiennych/stałych
 * lub po : w miejscu parametrów funkcji / wracanych wartości.
 *
 * Słowa kluczowe wprowadzone przez TypeScript:
 * type, enum
 * */

type Numeric = number;

// type Money = number;
// type Money = {
//     value: number;
//     currency: string;
// };

// const seed: Money = { value: 100, currency: '$' };
const seed: Numeric = 900;
const inferred = 100;
const toCompare: number = 100;

console.log(toCompare === seed);
console.log(toCompare === inferred);
console.log(seed === inferred);

// Z powyższego przykładu wynika, że typ Numeric jest aliasem typu `number`.

// Numeric nie może być ponownie zadeklarowany jako typ:
// type Numeric = number;

// TypeScript pozwala nam zrobić Union type
// Coś może być np. albo number'em albo string'iem:
type StringOrNumber = number | string;

type StringOrNumberOrBoolean = StringOrNumber | boolean;

// Przykładowo, taki zapis - to błąd (przez istniejące wnioskowanie typów:
/*
let testMeOut = 123;
testMeOut = 'OneTwoTree'
 */
// Jednak jeśli wykorzystamy nasz zdefiniowany typ:
let testMeAgain: StringOrNumber = 100;
testMeAgain = 'one hundred';
// wszystko jest ok.

// Typy union - również mogą być definiowane w sposób tzw. inline:
let otherSample: string | number = '100';
otherSample = 100;

// Union type wydaje się być początkowo - dziwny:
// Skoro chcieliśmy uciąć dynamiczne zmiany typu - to po co na nie znów pozwalać?

// Jednak są min 3 rzeczy które czynią ten zapis bardzo użytecznymi:
// 1) Można zapisać w ten sposób że np. parametr funkcji - może być nieznany: string | undefined
//    W JS, nie istnieje (w TS też) przeładowywanie konstruktorów i metod w klasie, union type może nam się wtedy przydać
// 2) Możemy w ten sposób definiować typ złożony z kliku podtypów (przyda się to przy typach złożonych - obiektowych)
// 3) Zapis union można zrobić również z wartości - wtedy mamy funkcjonalność tzw. flagi.

// Przykład dla 3):
type Action = 'open' | 'collect' | 'pack' | 'ship' | 'close';

let performAction: Action = 'open';
performAction = 'collect';
performAction = 'pack';
performAction = 'ship';
//performAction = 'collect';

// ustawienie nieistniejącej wartości w union - skutkuje błędem:
// performAction = 'non-existent';

// nie można również "nie ustalić" wartości lub przyrównać jej do null
// ponieważ nie posiadamy unii z typami: undefined lub null!
// performAction = undefined;
// performAction = null;


// Typescript wprowadza również słowo kluczowe `enum`
enum Apartment {
    BIG = 100,
    MEDIUM = 90,
    SMALL = 10,
    LITTLE = 3
}
// Podobnie jak w innych językach - Enum bazuje na zapisie klucz - wartość

const myCondo: Apartment = Apartment.BIG;

console.log(myCondo);
console.log(myCondo === Apartment.BIG);
console.log(Apartment.BIG);

// tzw. reverse mapping w enum osiągniemy tak:
console.log(Apartment[100]);

// więcej o enum:
// https://www.typescriptlang.org/docs/handbook/enums.html
