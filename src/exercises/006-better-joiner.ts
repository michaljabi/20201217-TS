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

function joiner(joinString: any): any  {
    return (...strings: any): any => {
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

