/**
 *  Kolekcje iterowalne - to takie konstrukcje po których można "przeliczać"/"wyliczać" pętlami.
 *  Można dostać się do nich w określony sposób - np. po kolei, lub posługując się indeksami.
 *
 *  Przykładowo, najprostsza kolekcja iterowalna w JavaScript to po prostu string.
 * */

 // Najprostsza kolekcja iterowalna w JavaScript = string:

 const alphabetSlice = 'abcdefghijklmnop';

 for(let letter of alphabetSlice) {
     console.log(letter);
 }

 // podobnie pętla zachowa się dla Arrays:
 for(let num of [1,2,3,4,5]) {
     console.log(num)
 }

 // podobnie dla setów:
 for(let x of new Set([1,1,1,1,23,3,3,3,23])) {
     console.log(x)
 }

 // w przypadku Map, dostaniemy konstrukcję tzw. entries (tuples):
 const mapped = new Map();
 mapped.set(1, 'one');
 mapped.set(2, 'two');
 for(let entry of mapped) {
     console.log(entry);
 }

 // dla porównania - nie da się iterować po klasycznych obiektach:
 /*
 for(let key of {name: 'Kate'}) {

 }
  */
// Tutaj można ew. wykorzystać pętlę for...in aby iterować po kluczach obiektu.



// Dowolny obiekt posiadający Iterator można przerobić na tablicę na 2 sposoby
// Array.from /lub/ [...spread]

const stringArray = Array.from('hello world');
console.log(stringArray);
// lub używając tzw spread operatora:
const stringArray2 = [...'hello world'];
console.log(stringArray2);

const fromMapValues = [...mapped.values()]; // Array.from(mapped.values());
const fromMapKeys = [...mapped.keys()]; // Array.from(mapped.keys());
console.log(fromMapValues);
console.log(fromMapKeys);

const fromEmptySet = [...new Set()]; // Array.from(new Set());
console.log(fromEmptySet);
