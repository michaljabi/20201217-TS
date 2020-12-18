/**
 * Zadanie 7:
 *
 * Przygotuj klasę Joiner.
 * Powinna ona:
 *  - w momencie konstruowania przyjmować znak, którym będzie łączyć wyrazy.
 *  - posiadać metodę która po przyjęciu N wyrazów typu :string zwróci łańcuch wyrazów połączony znakiem użytym w konstruktorze
 *  - użyty znak - łącznik nie może być dostępny jako pole w instancji
 *  - posiadać metodę pozwalającą zmienić znak łącznika
 *
 * przykład użycia instancji:
     const joiner = new Joiner('-');

     console.log(joiner.joinWords('this', 'is')  === 'this-is');
     joiner.changeSign(' ');
     console.log(joiner.joinWords('what', 'is', 'it')  === 'what is it');
 * */

// let sign = '';

class Joiner {

    // private sign: string;
    //
    // constructor(sign: string) {
    //     this.sign = sign;
    // }

    constructor(private sign: string) {}

    joinWords(...words: string[]): string {
        return words.join(this.sign);
    }

    changeSign(sign: string) {
        this.sign = sign;
    }
}

const joiner = new Joiner('-');

// console.log(joiner.sign);
console.log(joiner.joinWords('this', 'is')  === 'this-is');
joiner.changeSign(' ');
console.log(joiner.joinWords('what', 'is', 'it')  === 'what is it');

export {};
