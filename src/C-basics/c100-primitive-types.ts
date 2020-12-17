/**
 * W JS jest 7 typów prostych.
 * To na ich podstawie budujemy bardziej złożone obiekty etc.
 *
 * Klasyczne zachowanie JavaScript - pozwala na dynamiczną zmianę typu.
 * Coś co na początku jest przypisane jako string może po chwili przypisać wartość number
 *
 * W TypeScript - chcemy pozbyć się tej własności i mocno ją ograniczyć.
 * Upewniając się, że ustalony początkowo typ zmiennej - pozostanie niezmieniony.
 *
 * Typy proste przekazywane są przez wartości, dzięki czemu możliwe jest ich porównanie za pomocą
 * potrójnego znaku równości === z inną wartością tego samego typu.
 * (o czym przekonamy się dokładnie w c103-conditions.ts)
 *
 *
 * Słowa kluczowe wprowadzone przez TypeScript:
 * any, unknown, never, void
 * */

console.log('123')
console.log(typeof 78n)
console.log(typeof Number('123'))
console.log( Boolean('123'))
console.log(typeof Boolean('123'))

console.log((typeof []) === 'object')
console.log(typeof {})
console.log(typeof new Date())

// Lista wszystkich typów prostych w JS na rok 2020 (ES11):
// Jest ich 7
// const xamp = 123;
// xamp+=1;
// console.log(xamp)

const word: string = 'Hello';
const num: number = 1275612.82;
const int: bigint = 10n;
const flag: boolean = false;
const sym: symbol = Symbol();
const noWay: undefined = undefined;
const noValue: null = null;

const mySymbol = Symbol();
const compareSymbol = mySymbol;
console.log(Symbol() === Symbol())
console.log(compareSymbol === mySymbol)

// W przeciwieństwie do JS, nie da się dynamicznie zmienić typu:
let mySample: string;
mySample = 'I am a string... always';
// Operacja niedozwolona:
// mySample = 1234;

let myOtherSample = 'I am an inferred type of string';
// Operacja niedozwolona:
// myOtherSample = 12355;

// Type Inference (Wnioskowanie typów)
// https://www.typescriptlang.org/docs/handbook/type-inference.html
// Inferred type to tzw. typ wywnioskowany przez TS na podstawie tego,
// co zostało przypisane do stałej / zmiennej.

// Sprawdza się zwłaszcza przy użyciu typów prostych gdzie nie musimy pisać
// nadmiarowo:
let luckyNumber: number = 7;

// wystarczy tylko:
let otherLuckyNumber = 25;
console.log(typeof otherLuckyNumber);
// To poniżej, to dalej operacja niedozwolona! (sprawdź błąd)
// otherLuckyNumber = 'what?!';


// Typy prymitywne sprawdzamy operatorem `typeof`
console.log(typeof 'hello');
console.log(typeof flag);

// Wyjątkiem (po przez buga) - jest `null` - którego sprawdzenie przez `typeof` nic nam nie powie:
console.log(typeof null);
console.log(null === null);

// porównaj z obiektami:
console.log(typeof new Date());
console.log(typeof {});
console.log(typeof []);

// Wniosek: typeof - nie nadaje się do obiektów i do wartości null
// Chyba że zależy nam na ogólnej informacji czy coś jest obiektem.


// TYPESCRIPT:
// Dodaje kolejnych kilka dodatkowych i nieistniejących* w JS oznaczeń typów:
// *(poza void - jednak w JS void jest stosowany jako operator)
// any, unknown, never, void

let canBeAnything: any = '';
let typeIsUnknown: unknown = '';
// Zapisy poniżej nie są w praktyce stosowane:
let thisWillNeverHappen: never;
let voidIsNotUsefulLikeThat: void = undefined;
// Słowa kluczowe 'void' i `never` stosuje się w praktyce przy używaniu funkcji lub metod;

// Integracja z JavaScript.
// Typescript pozwala użyć typu tzw. :any
// Pozwala on nam uzyskać kompatybilność wsteczną i działanie rodem z JavaScript:
// To znaczy nasze zmienne dalej są "dynamicznie typowane"

let whyIWannaDoThat: any = 12323;
whyIWannaDoThat = 'Hello';

// [!] Przypisane any do string - jest możliwe.
// (zauważ że to niebezpieczne - np. zakomentowanie linii 88 nie powoduje że TS pokaże błąd)
const myString: string = whyIWannaDoThat;
console.log(myString);
// Powyższe zapisy nie generują błędu. Ponieważ SPECJALNIE kazaliśmy TypeScript zachowywać się w ten sposób.

// Po co chcielibyśmy dostając te wszystkie dobroci od TS - dalej używać takiego zapisu ?!
// Okazuje się on użyteczny przynajmniej w 3 przypadkach:
// 1) Jeśli migrujesz projekt z JavaScript do TypeScript
// 2) Jeśli nie masz pewności co do typu lub nie możesz go uzyskać ponieważ integrujesz bibliotekę JS do projektu z TS
// 3) Jeśli prototypujesz coś na szybko w kodziku i chcesz później dopisać szczegóły typu


// Bardzo podobnie zachowuje się wprowadzony stosunkowo niedawno (TS 3.0) typ: `unknown`;
let iReallyDoNotKnow: unknown = '12321';
iReallyDoNotKnow = 123123;
iReallyDoNotKnow = false;
iReallyDoNotKnow = 767216;

// [!] Przypisanie unknown do number - nie będzie możliwe.
// ZASADNICZA RÓŻNICA między any a unknown:
// (odkomentuj) Poniższa linia generuje błąd:
// const myNumber: number = iReallyDoNotKnow;

// Dlatego unknown jest nazywany "type-safe" - musimy upewnić się jakiego dokładnie typu jest `unknown`
// Dopiero wtedy TS pozwoli nam go przypisać do np. number:

if(typeof iReallyDoNotKnow === 'number') {
    // Teraz TS nie traktuje tego jako błąd:
    const myNumber: number = iReallyDoNotKnow;
}



// `void` oraz `never` stosowane są bardziej w przypadku funkcji czy metod, w następujący sposób:
function mySpecialProcedureThatReturnsNothing(): void {

}
// W ten sposób mamy funkcję która nic nie zwraca.
// Czy moglibyśmy użyć słowa `undefined`? - wiedząc że w JS, funkcja, która nic nie zwraca - zwróci undefined ?
console.log(mySpecialProcedureThatReturnsNothing());
// Nie, ponieważ TypeScript oczekuje wtedy słowa kluczowego `return` w ciele funkcji.

// Funkcja która nic nie zwraca - ponieważ w jej ciele znajduje się rzucany wyjątek, tak naprawdę da nam `never`:
function mySpecialThrow(): never {
    throw new Error('Ooooops !');
}
