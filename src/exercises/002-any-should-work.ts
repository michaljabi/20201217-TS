/**
 * Zadanie 2:
 *
 * Początkujący programista TypeScript - musi okiełznać pokusę używania wszędzie typu :any
 *
 * Popraw zapisy programisty - tak by były używane właściwe typy danych i abyśmy mieli poprawne podpowiadanie składni
 * nie ingeruj w detale implementacji (kod powinien działać tak samo)
 * */

function addTwoNumbers(a: any, b: any ): any {
    return a + b;
}

const result: any = addTwoNumbers(10, 20);

console.log('Wynik to', result);


// info will accept only a string or number!
function info(something: any): any {
    console.log('Wartość', something, 'to', typeof something);
    return typeof something;
}

let myFigure: any = 1000;
info(myFigure);

myFigure = '100.8';
info(myFigure);



export {};
