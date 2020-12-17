/**
 * Typy generyczne w TypeScript działają na bardzo podobnych zasadach jak w innych językach typowanych z OOP.
 * Jeśli znasz np. typy generyczne w Java / C# - zrozumienie poniższych zapisów - nie będzie więc problemem.
 *
 * Typy generyczne pozwalają poszerzyć re-używalność naszego kodu.
 *
 * Często jest tak, że np. wymyślony przez nas typ danych lub klasa - przechowują w sobie inne dane.
 * Dane te mogą być jednak dowolnego typu.
 * Na etapie projektowania metod w klasie czy parametrów przesyłanych do naszej funkcji - nie jesteśmy
 * w stanie określić jakiego typu dane będziemy obsługiwać.
 * Jednocześnie - typ :any czy :unknown nie są dla nas rozwiązaniem, ponieważ tworząc nową
 * instancje klasy - chcemy mieć dalej podpowiadanie składni związane z typem, który finalnie użyliśmy przy jej konstruowaniu.
 *
 * Z pomocą przychodzą nam: typy generyczne, które pozwalają na właśnie taką elastyczność.
 *
 * Zobaczmy przykłady....
 * */


// najprostszym typem generycznym są tablice (Arrays)
// Możemy z góry określić co będzie ona zawierała, na przykład:

let undefinedArray: Array<string>;
const mySampleArray: Array<string | number> = [];

mySampleArray.push(1120);
mySampleArray.push('23');
// błąd (Array zawiera albo string albo number):
// mySampleArray.push(true);

// Może nie być to oczywiste, ponieważ najczęściej - i najwygodniej zapisujemy typ tablicowy tak:
let undefinedArray2: string[];
const myOtherArray: (string | number)[] = [];


// w programowaniu istnieją konstrukcje które przechowują np. kolekcje elementów
// wszystkie one nie wiedzą w momencie deklarowania - jakiego typu będą to elementy
// dlatego też muszą być zadeklarowane jako klasy generyczne.
// Kolejne przykłady to oczywiście: Set i Mapa

let mySampleSet = new Set<number>();
let mySampleMap = new Map<number, string>();

// Z tego zapisu wynika, że Set będzie przechowywał wartości typu number
// A Map - wartości typu: numer jako klucz - string jako wartość

// A co gdyby te konstrukcje nie miały definicji generycznych ?

const freestyleSet = new Set<unknown>();

freestyleSet.add(1);
freestyleSet.add('hello');
freestyleSet.add('hello');
freestyleSet.add(true);

// Wtedy nie możemy zawęzić zakresu danych akceptowanych przez Set.
// pozbyliśmy sie podpowiadania typów
// Nasz `mySampleSet` na przykład - nie może przyjąć wartości innego typu niż `number`
// Poniższy zapis (odkomentuj) generuje błąd:
// mySampleSet.add('hello')


// Całe piękno typów generycznych, polega na możliwości tworzenia własnych.
// Możemy przykładowo - utworzyć funkcję, która nie wie jeszcze jaki dokładnie typ będzie logować na konsoli
function logItOut<ITER> (something: ITER) {
    console.log(something);
}

// Możemy to wykorzystać w prosty sposób z wnioskowaniem typów:
logItOut('Hello !');
// Lub ustalając dokładnie typ:
logItOut<string>('Hello !');
logItOut<number>(12012);

// Zapis ten nie ma zbyt dużo logiki i zasadności - przez co wygląda jakbyśmy mogli po prostu użyć `any`!

// Jednak zauważ (odkomentuj) iż taki zapis wygeneruje błąd
// logItOut<string>(123123);

// Tutaj właśnie zaczynamy dostrzegać przewagę typów generycznych nad any / unknown

// Wartości za równo any czy unknown - mogą być dowolne.
// Jednak w momencie użycia typu generycznego możemy zawęzić typ o jaki nam chodzi.


// Typy generyczne nie dotyczą tylko i wyłącznie klas, można je zastosować do funkcji i definicji typów (np. interfejsów)

// Zobaczmy funkcję, która "opakowuje" 2 dane w tablicę:
// [!] Zapis 'T' jest umowny, możemy typ generyczny nazwać dowolnie - to nasza decyzja.
function wrapInArray<T>(first: T, second: T): T[] {
    return [first, second];
}

// UWAGA: Typescript orientuje się że wrapInArray jest generyczne ponieważ jego zapis to: wrapInArray<>
//        to właśnie te ostre nawiasy z dowolnym tekstem w środku <STH> definiują że pod STH zostanie potem podstawiony typ.

// Jeśli posłużymy się wnioskowaniem typów, TypeScript będzie wiedział dokładnie jaki typ ma tablica
const myStrings = wrapInArray('a', 'b');
// zauważ, TS wie że to tablica stringów:
myStrings.push('Hello');
// nie możemy np. zrobić tego:
// myStrings.push(12123);

// Ponieważ nasz Typ generyczny jest zdefiniowany taki sam dla obydwu parametrów funkcji,
// nie możemy wywołać tej funkcji z 2 różnymi typami argumentów!
// operacja niemożliwa:
// wrapInArray(123, true);

// Oczywiście możemy również zapisać to w pełnym wymiarze (bez polegania na wnioskowaniu)
const myFlags: boolean[] = wrapInArray<boolean>(true, false);
console.log(myFlags);


// Ostatni przykład z funkcją to motyw, w którym możemy zwrócić tablicę z 2 różnymi typami,
// To znaczy - co w sytuacji gdy chcemy mieć dane różnego typu w naszym zwracanym Array?
// Przykładowo Array<string | number> ??

function wrapInArrayDifferent<T1, T2>(first: T1, second: T2): (T1|T2)[] {
    return [first, second];
}

// pełny zapis:
const numbersOrStrings1: (number | string)[] = wrapInArrayDifferent<number, string>(3, 'words');
// wnioskowanie:
const numbersOrStrings = wrapInArrayDifferent(3, 'words');
console.log(numbersOrStrings);

numbersOrStrings.push(123);
numbersOrStrings.push('123');
// TS dalej pilnuje naszego typu:
// numbersOrStrings.push(true);


// TYPY GENERYCZNE w klasach:
// Możliwe jest wykorzystanie typów generycznych w klasach
// Przykładowo nie wiemy jakiego typu elementy będziemy podawać w konstruktorze klasy:

// nawina implementacja:
class AnythingToString<ANYTHING> {
    constructor(private value: ANYTHING) {}

    toString(): string {
        return String(this.value);
    }

    showType(): string {
        return typeof this.value;
    }

    getValue(): ANYTHING {
        return this.value;
    }
}

const numberString = new AnythingToString(1253);
console.log(numberString.toString());
console.log(numberString.showType());
console.log(numberString.getValue());

const nullString = new AnythingToString(null);
console.log(nullString.toString());
console.log(nullString.showType());
// Zauważ, że w tym układzie TypeScript podpowiada nam co dokładnie jest zwracane przez .getValue() !
console.log(numberString.getValue());



// Bardziej zaawansowany przykład:
// Typ generyczny możemy zawęzić, na przykład ograniczając go do obiektów które posiadają pewne własności:

class ArrayLogger<TO_LOG extends Array<string>> {
    constructor(private value: TO_LOG) {}
    log(): void {
        console.log(this.value);
    }
}

// W tym układzie do klasy Logger można przekazać value - ale tylko takie, które dziedziczy po Array of string
// Co w praktyce oznacza iż nie da się wywołać new Logger z innego typu obiektami:

const printToLog = new ArrayLogger(['a', 'b', 'c']);
printToLog.log();

// Zapisy nieprawidłowe:
// const printToLog2 = new Logger({});
// const printToLog3 = new Logger('123123');

// Finalnie!
// Możemy przygotować bardziej użyteczny przykład, gdzie logować można tablicę, tylko tablicę - ale dowolnego typu:

class AdvancedArrayLogger<ARRAY_TYPE, TO_LOG extends Array<ARRAY_TYPE>> {
    constructor(private value: TO_LOG) {}
    log(): void {
        console.log(this.value);
    }
}

// zdajemy się na wnioskowanie typów:
const arrayToLog = new AdvancedArrayLogger([1, 3, 4, 5]);
arrayToLog.log();

// lub piszemy bardziej konkretnie
const arrayToLog2 = new AdvancedArrayLogger<string, string[]>(['c', 'd', 'e']);
arrayToLog2.log();


// Zadziała również obiekt, który dziedziczy po natywnym Array!
class MyStringArray extends Array<string> {
    constructor(...names: string[]) {
        super();
        this.push(...names);
    }
}

const myArray = new MyStringArray('mike', 'helen', 'jon');
const myArrayLogger = new AdvancedArrayLogger(myArray);
myArrayLogger.log();


// Typy generyczne w definicjach typów:
// type + interface

type Complex<Z> = {
    complexField: Z
}

const myCObject: Complex<string> = { complexField: 'hello' };
// [!] błąd:
// const myCObject2: Complex<string> = { complexField: 2132 };

// Przykład pokazujący, że w typie generycznych wartości może być N - jedna lub więcej...
interface OtherComplex<STH, STH2> {
    something: STH;
    special: STH2;
}

const myOtherObject: OtherComplex<string, string[]> = {
    something: 'hello !',
    special: ['my', 'world']
}

// [!] Błąd:
// const myOtherObject2: OtherComplex<string, string[]> = {
//     something: 'hello !',
//     special: ['my', 1]
// }
