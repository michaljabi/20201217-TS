/**
 * Zadanie 6:
 *
 * Cała implementacja tego kodu i jego działanie - są poprawne.
 * Jednak nie mam podpowiadania typów - znów poprzez zastosowanie :any
 *
 * Napisz odpowiednie typy:
 * - dla argumentów funkcji
 * - dla zwracanej funkcji i określ oddzielnie jej typ i nazwij
 *
 * */

type JoiningFn = (...strings: string[]) => string;

interface JoiningFn2 {
    (...strings: string[]): string;
}
// Interface JoiningFn2 może być obiektowy jako funkcja bo:
console.log(joiner)
console.log(typeof joiner)
console.log(joiner instanceof Function);
console.log(joiner instanceof Object);

// Natomiast inaczej nie da się tego poniżej zrobić (interface nie zadziała)
type MyString = string;

function joiner(joinString: string): JoiningFn  {
    return (...strings: string[]): string => {
        return strings.join(joinString);
    };
}




const hyphenJoiner = joiner('-');
const spaceJoiner = joiner(' ');
const snakeJoiner = joiner('_');

console.log(hyphenJoiner('this', 'is', 'sample'))
console.log(spaceJoiner('this', 'is', 'other', 'sample'))
console.log(snakeJoiner('how', 'does', 'snake', 'case', 'looks', 'like'))


export {};

