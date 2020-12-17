
// Komentarz powyżej wskazuje kompilerowi typescript - że ma nie analizować tego pliku...
/**
 * Zadanie 0:
 * Warm up.
 *
 * Odkomentuj // @ts-nocheck
 *
 * Popraw zapisy tak aby doprowadzić do prawidłowego wyświetlenia:
 *
 * 'You reached the end! - BRAVO'
 * na konsoli...
 *
 * oraz: pozbądź się wszystkich błędów z kompilatora TS
 *
 * // @ts-nocheck
 * // @ts-ignore
 * */

let myHello = 'Hello';
console.log(myHello, 'World');

myHello = 'Serious';
const help = 'HelpMe out!';

let doFlag = true;
const LARGE_NUMBER = 2048;

// tutaj miał być komentarz, że addNumbers musi zwracać number !
function addNumbers(a: number , b?: number | undefined): number | never {
    if(typeof b !== 'number') {
        throw new Error('B is not a number');
    }
    return a + b;
}

let result: string;
result = String(addNumbers(10, 0));

console.log('Result is:', result);

console.log(helloStranger())

// Function expession (wyrażenie funkcji)
// const helloStranger = (): string => 'Hello Stranger !';
const helloStranger2 = function(): string {
    return 'Hello Stranger !';
}


function helloStranger(): string {
    return 'Hello Stranger !';
}

// function definition:
function randomNumber(): number {
    return Math.random() * 100;
}

console.log('You reached the end! - BRAVO')

export {};
