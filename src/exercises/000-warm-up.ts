// @ts-nocheck
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

const MyHello = 'Hello';
console.log(MyHello, 'World')

MyHello = 'Serious';
const help = "HelpMe out!"

let do = true;
const LARGE-number = 2048

tutaj miał być komentarz, że addNumbers musi zwracać number !
function addNumbers(a , b): number {
    return a + b
}

let result: string;
result = addNumbers(10, 20);

console.log('Result is:', result);

console.log(helloStranger())

const helloStranger = (): string => 'Hello Stranger !';

function randomNumber(): string {
    return Math.random() * 100;
}

console.log('You reached the end! - BRAVO')

export {};
