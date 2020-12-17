/**
 * Zadanie 1:
 * Napisz implementację funkcji `moveBy2` - która posiadać ma następujące działanie:
 * wyświetlić na konsoli co 2 numery od - do w określonym kierunku
 *
 * przykładowo wywołanie:
 * moveBy2(10, 20, 'up');
 * powinno pokazać:
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 *
 * a wywołanie:
 * moveBy2(10, 20, 'down');
 * 20
 * 18
 * 16
 * .... itd aż do
 * 10
 *
 * funkcja powinna być wywołana poprawnie dla 2 przypadków tak jak poniżej.
 * natomiast jeśli podany zostanie argument który nie jest liczbą lub nie da się go rzutować na liczbę
 * - funkcja zakończy swoje działanie
 * - nie powinno być możliwości podania innych kierunków jak up lub down
 * */

// Przed rozpoczęciem zadania usuń komentarz poniżej (@ts-nocheck)
type StringOrNumber = number | string;
type Direction = 'up' | 'down';

// Tutaj dopisz implementację moveBy2 na podstawie wywołań poniżej
function moveBy2(from: number, to: StringOrNumber, direction: Direction): void | never {

    const start = from;
    const end = Number(to);
    if( isNaN(end) ) {
        throw new Error('param "to" is Not a Number')
        // return;
    }

    if(direction === 'up') {
        for (let x = start; x <= end; x += 2) {
            console.log(x);
        }
    } else if(direction === 'down') {
        for (let x = end; x >= start; x -= 2) {
            console.log(x);
        }
    }
}

// to powinny być prawidłowe wywołania:
moveBy2(10, 20, 'up');
moveBy2(10, '20', 'down');

// nieprawidłowe wywołania (nie powinny się pokazać dane na konsoli):
try {
    moveBy2(10, 'aqweoiuqwieu', 'down');
} catch (e) {
    console.log(e.message)
}
try {
    moveBy2(10, NaN, 'down');
} catch (e) {
    console.log(e.message)
}



// powinno podkreślić - [błąd Typescript]
// moveBy2(10, NaN, 'diagonal');

export {};
