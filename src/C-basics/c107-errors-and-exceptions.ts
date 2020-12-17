/**
 * JS pozwala nam na "rzucanie wyjątków" - w tym celu używamy słowa kluczowego `throw`
 * po rzuceniu wyjątku - kod pod nim nie jest dostępny (unreachable code)
 * JavaScript posiada również natywny konstruktor klasy Error.
 *
 * Wyjątki będzie można "łapać" w blok try {} catch () {} - wyżej w kodzie np. po wywołaniu funkcji
 *
 * W JavaScript jako "błąd" możemy rzucać (throw) - co tylko chcemy.
 * TypeScript nie neguje tego zachowania, jednak nie jest to dobra praktyka.
 *
 * Warto używać obiektu Error - lub utworzyć własną konstrukcję
 * */


function isLowerThan10(num: number | undefined): boolean {

    if(typeof num !== 'number') {
        throw new Error(`Podana wartość: ${num} nie jest numeryczna !`)
    }
    return num < 10;
}

isLowerThan10(20); //?
isLowerThan10(1); //?

try {
    let x: any = '10';
    isLowerThan10(x);
} catch (e) {
    console.log(e);
}

// Funkcja która zawsze zwraca błąd:
function iWillAlwaysThrow(): never {
    throw new Error('Always... error...')
}

// Dowód że można rzucić dowolny typ wartości jako błąd,
// [!] Jednak w praktyce - nie jest to dobry pomysł
function canThrowAnything(): never  {
    throw 123;
}

// Lepsze podejście:
class MyOwnError extends Error {
    constructor(message: string, public readonly myErrorCode = 0) {
        super(message);
    }
}

function throwSomethingPredictable(): never {
    throw new MyOwnError('Disaster has begun', 2200);
}

try {
    throwSomethingPredictable();
} catch (e: unknown) {
    // Zapis e: unknown lub e: any - jest konieczny.
    // Niestety, możliwość rzucenia czegokolwiek przez Runtime w którym nie ma już TS - sprawia iż TypeScript nie może nam pomóc
    // Jednak typ błędu możemy zawęzić używając operatora instanceof:
    // To daje nam pewność
    if(e instanceof MyOwnError) {
        console.log('I handle specific error', e.myErrorCode,  e.message)
    } else if (e instanceof Error) {
        console.log('I handle general error', e.message)
    } else {
        console.log('I can not handle this - ', e);
    }

    // Więcej w temacie (e: unknown) / (e: any)
    // https://github.com/microsoft/TypeScript/issues/8677#issuecomment-220385124
}
