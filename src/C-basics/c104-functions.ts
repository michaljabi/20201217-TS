/**
 *  Funkcje - to jedne z podstawowych elementów bez których nie można mówić
 *  o zbudowaniu aplikacji.
 *
 *  Po 1 pozwalają zamknąć wykonywany kod w postaci procedur.
 *  Mówiąc prościej: unikami powtórzeń, ponieważ coś co napisaliśmy możemy wywołać kilka razy
 *  Dzięki użyciu funkcji
 *
 *  Po 2 są w stanie przeliczać dane w zdefiniowany przez nas sposób. Posiadając dane wejściowe
 *  Input - generują dane wyjściowe - Output.
 */

// funkcja która jest "procedurą" (nic nie zwraca):
// DEKLARACJA:
function printHello(): void {
   console.log('Hello')
}

// WYWOŁANIE:
printHello();

// NIE CHCEMY tego zapisywać tak:
// function printHello(): undefined {}
// ponieważ TS będzie spodziewał się słowa kluczowego `return` !


// JavaScript to język, w którym funkcje traktowane są jako:
// First Class Citizen
// Możliwy jest zapis wyrażenia funkcji (function expression):
const functionExpression = function(): void {};

functionExpression();

// Typescript będzie wnioskował typ funkcji i ilość jej parametrów.
// Dlatego nie pozwoli na np. takie wywołanie:
// functionExpression('HELLO');

// JS w wersji EcmaScript2015 -> ES6 dodaje tzw. arrow functions:
const arrowFunction = () => {};

arrowFunction();

// Zapis jest skrócony - ale funkcja dalej pozostaje anonimowa (jak przy wyrażeniu funkcji)
// Ten warunek jest zawsze spełniony =
// [!] każda funkcja arrow - jest anonimowa


// Funkcje mogą posiadać parametry oraz zwracać wartości:
function greetings(name: string): string {
    return 'Hello ' + name + '!';
    // [===]
    // return `Hello ${name} !`; // ES6 - TemplateString;
}

const greetResult = greetings('Michael');
console.log(greetResult);


// W klasycznym JS, możliwe jest wywołanie funkcji bez argumentów lub z większą niż przewidywana ilość argumentów:
// W JS, te zapisy byłby prawidłowe:
// (odkomentuj)

// greetings();
// greetings('hello', 'world');


// Funkcje / (metody i pola w klasach) w TypeScript mogą mieć parametry opcjonalne, tak wyglądać będzie zapis:
function isItTruthy(toCheck?: number): boolean {
    return Boolean(toCheck)
}

// teraz isItTruthy można wywołać na 2 sposoby:
// #1: bez argumentu
isItTruthy(); //?

// #2: z argumentem
isItTruthy(NaN); //?
isItTruthy(123123); //?
isItTruthy(0); //?


// Funkcje (...i metody) podobnie jak w JavaScript - mogą mieć również parametry domyślne:
function giveMeWeather(weather: string | null = 'widny'): string {
    return String(weather);
}
// [!] TS wie że weather może być tylko stringiem
// giveMeWeather(2323)

// wartość domyślna:
giveMeWeather(); //?
giveMeWeather(undefined); //?


giveMeWeather(null); //?


// wartość ustalona przez argument:
giveMeWeather('sunny'); //?
giveMeWeather('cloudy'); //?
