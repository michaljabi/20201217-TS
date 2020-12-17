console.log('Hello world');

// to jest prosty komentarz liniowy.

/*

To
jest
komentarz
blokowy.

*/

// Dowolny poprawny JavaScript — to z założenia poprawny kod w TypeScript:
let hello = 'World number ' + 2;
console.log(hello);


// To na co jednak TS nie pozwala - to dynamiczna zmiana typów:
let iMustBeAString = 'Hello';

// Odkomentuj aby zobaczyć błąd.
// iMustBeAString = 102;

// Zauważ jednak że kod dalej "wykonuje się". I mimo że mamy błąd z TS nie jest to przecież błąd w JavaScript!
// IDE informuje nas o błędzie
console.log(iMustBeAString)
