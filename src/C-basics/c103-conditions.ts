/**
 *  Jeśli chodzi o instrukcje warunkowe, rozróżniamy:
 *
 *  if()
 *  else if()
 *  else
 *
 *  switch
 *
 *  ternary operator
 *
 *  możemy również wykorzystać operatory logiczne
 *
 * Ich zastosowanie pozwala nam na zmianę wyniku działania programu (jego części) - w zależności od
 * spełnienia danego warunku
 *
 * Uwaga:
 * W JavaScript musimy uważać na porównania.
 *
 * Prawie zawsze trzeba używać === znaku porównania
 * {@see https://dorey.github.io/JavaScript-Equality-Table/}
 * */

// console.log('HELLO'.charAt(0))

let numericCondition = 0;

console.log(numericCondition)

if(numericCondition === 1) {
    console.log('if !')
    console.log('if !')
} else if (numericCondition){
    console.log('else if !')
} else {
    console.log('else !?')
}


const x = 10;
const higherThen10 = x > 10;
// conditional (ternary) operator:
// [!] zawsze spodziewamy się jego ewaluacji do wartości
let hello = higherThen10 ? 'witaj' : 'żegnaj';

switch(hello) {
    case 'witaj':
        console.log('logika do witaj...');
        break;
    case 'żegnaj':
        console.log('logika do witaj...');
        break;
    default:
        console.log('Nieznana wartość')
}
// Zobacz jakie wartości przyjmuje hello - dlaczego tak się dzieje ?
// jest to kwestia użycia tzw. conditional lub ternary operatora ( warunek ? jeśli_prawda : jeśli_fałsz )



// Instrukcje warunkowe wyglądają dość specyficznie dla tzw. Falsy Values
// Nie trzeba ich z niczym porównywać - jest ich 8
// Jeśli je zapamiętamy, wiemy kiedy instrukcja warunkowa się nie wykona
// Jest to bardzo często wykorzystywane w świecie JS / TS
// Upraszcza zapis i jest stosunkowo bezpieczne. Wszelkie pozostałe wartości są "Truthy"

// {@see https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
if(false) {
    console.log('I am working !')
}
if(0) {
    console.log('I am working !')
}
if(-0) {
    console.log('I am working !')
}
if(0n) {
    console.log('I am working !')
}
if('') {
    console.log('I am working !')
}
if(null) {
    console.log('I am working !')
}
if(undefined) {
    console.log('I am working !')
}
if(NaN) {
    console.log('I am working !')
}

// Ponieważ JavaScript pod spodem posiada mechanizm
// niejawnego rzutowania typów, prawie zawsze chcemy stosować
// potrójny znak równości '==='
// w innym wypadku - JS rzutuje typy na ten sam aby je porównać
// Na szczęście dla nas - i w tym przypadku TypeScript może nam pomóc.
// (usuń: //@ts-ignore)
const one = '1';
// @ts-ignore
if(1 == one) {
    console.log('I am working !')
}


// Typescript używa instrukcji warunkowych w specjalny sposób
// Jako tzw. Type Guards
// {@see: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types}
// Pozwala to np. zawęzić używany typ w przypadku Union Types:
function test(isStringOrNumber: string | number | unknown): string {
    if(typeof isStringOrNumber === 'string') {
        return isStringOrNumber.toUpperCase();
    }
    if(typeof isStringOrNumber === 'number') {
       return isStringOrNumber.toString();
    }
    return 'unknown type'
}

// interface MyUser  {
//     name: string
// }

// Przykład powyżej zadziała dla typów prostych, co z bardziej złożonymi typami?
function complexType(isDateOrRegexp: Date | RegExp): void {

    if(isDateOrRegexp instanceof Date) {
        // logika w przypadku gdy obiekt to na pewno Data....
        isDateOrRegexp.getTime();
    }
    if(isDateOrRegexp instanceof RegExp) {
        // logika w przypadku gdy obiekt to na pewno RegExp....
        isDateOrRegexp.test('1212')
    }
    // if(isDateOrRegexp instanceof Object) {
    //     // logika w przypadku gdy obiekt to na pewno RegExp....
    // }
}


// Potrzebne żeby naprawić błąd z kolizją nazw zmiennych:
// Same zmiany w pliku tsconfig.json nie wystarczają!
export {};
