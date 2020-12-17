/**
 *
 * W ES6 (rok 2015) do JavaScript dochodzą natywne konstrukcje: Set'u i Map'y
 * Ich zachowanie jest podobne do tego jakie znamy z innych języków programowania
 * Są to kolekcje iterowalne zawierające zazwyczaj więcej niż jeden element
 * Rodzaj elementów które zawiera Set lub Mapa nie jest z góry wiadomy - dlatego ich definicje są generyczne!
 *
 * Set jest kolekcją unikatowych danych, bez powtórek.
 * Dla typów prostych - nie może zawierać 2 takich samych wartości
 * Dla typów złożonych - nie może zawierać 2 jednakowych referencji
 * Jeśli próbujemy dodać 2 raz to samo - nie dostaniemy błędu, jednak dana nie zostanie ponownie wpisana do Set'u
 *
 * Mapa to kolekcja danych w układzie {klucz => wartość}
 * Kluczem może być dowolny typ danych nie koniecznie number czy string, mogą to być nawet obiekty
 * Podobnie z wartościami - mogą mieć dowolny typ.
 * Klucze nie mogą się powtarzać, jeśli wpiszemy coś pod ten sam klucz - zostanie to nadpisane.
 *
 *

 * */

// Zapis [key: string] jest odpowiedzią TypeScript na możliwość dynamicznego dodawania do obiektu nowych pól
// key - reprezentuje tutaj "properties" dla obiektu - które mogą mieć wartości JEDYNIE typu string
const oldFashionWay: {[key: string]: string} = {};
oldFashionWay[ 'key' ] = 'value';
oldFashionWay[ 'key' ] = 'other-value';
console.log( oldFashionWay[ 'key' ] );
console.log( oldFashionWay );

console.log(Object.keys(oldFashionWay));
console.log(Object.values(oldFashionWay));

//MAPS:
const myMap = new Map<number, string>();

myMap.set( 1, 'world' );
myMap.set( 1, 'world 2' );
myMap.set( 2, 'Andrew Walker' );

console.log(myMap);
console.log(...myMap.keys());
console.log(...myMap.values());

console.log('Długość mapy: ', myMap.size);
console.log('Wyciągnięcie wartości dla klucza: ', myMap.get(2));

// W tym układzie kluczami mapy mogą być nie tylko wartości typu prostego
// Sprawdźmy obiekty!

class ObjectKey {}

const myObjectDescriptionMap = new Map<ObjectKey, string>();

const key1 = new ObjectKey();
const key2 = new ObjectKey();

myObjectDescriptionMap.set(key1, 'Opis obiektu nr 1');
myObjectDescriptionMap.set(key2, 'Opis obiektu nr 2');

console.log(myObjectDescriptionMap);
console.log(myObjectDescriptionMap.get(key2));

// Usunięcie wartości spod klucza:
myObjectDescriptionMap.delete(key1);

console.log(myObjectDescriptionMap.size)
console.log(myObjectDescriptionMap.has(key1))
console.log(myObjectDescriptionMap)

myObjectDescriptionMap.forEach((value: string, key: ObjectKey) => {
    console.log(value)
    console.log(key)
})

// więcej:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// SETS:
const mySet = new Set();

mySet.add( 'value' );
mySet.add( 'value' );
mySet.add( 12313 ); // Jeśli nie zadeklarujemy jakiego typu to set, domyślnie będzie typu <any>
mySet.add( 'value' );

console.log( mySet );

const myNumericSet = new Set<number>([2,2,2,3]);
myNumericSet.add(100);
// Zakomentowany poniżej kod nie jest poprawny, ponieważ ustaliśmy, że: Set<number>
// myNumericSet.add('100');

console.log(myNumericSet.has(3));
myNumericSet.delete(3);
console.log(myNumericSet);

myNumericSet.forEach((value: number) => {
    console.log(value)
})

