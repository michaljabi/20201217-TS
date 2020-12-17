/**
 * Czasem korzystając z podejścia OOP nie mamy możliwości skorzystania
 * z podpowiadania typów na bazie znanego nam z JavaScript dynamicznego podejścia.
 * Chodzi tutaj o sytuację, w której na bazie dwóch lub więcej klas tworzymy (składamy) inna klasę
 * Dziedziczenie w TypeScript zachowuje się tak samo jak w JS - można dziedziczyć jedynie po jednej klasie bazowej.
 *
 * Jak więc osiągnąć zachowanie, w którym możemy połączyć funkcjonalności już istniejących klas,
 * jednak bez konieczności nadawania wszędzie typu :any i przez co posiadać podpowiadanie składni?
 *
 * Z pomocą przychodzi nam koncepcja mixins.
 * Pozwala na rozszerzanie klasy o możliwości już istniejących klas (więcej niż jednej).
 *
 *
 * DOC:
 * https://www.typescriptlang.org/docs/handbook/mixins.html#how-does-a-mixin-work
 * */

class Sprite {
    name = "";

    constructor(name: string) {
        this.name = name;
    }
}

// Pomocniczy typ generyczny dla konstruktora
type Constructor<T = {}> = new (...args: any[]) => T;

function Scalable<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
        private scale = 1;

        public setScale(num: number): void {
            this.scale = num;
        }
    };
}

function Printable<TBase extends Constructor>(Base: TBase) {
    return class Print extends Base {
        public print() {
            console.log('You printed:', this);
        }
    };
}

// Rozszerzenie klasy Sprite o dane z dwóch innych klas:
const ExtendedSprite = Printable(Scalable(Sprite));

const mySprite = new ExtendedSprite("Bird");
mySprite.setScale(0.8);
mySprite.print();

// Trzeba zwrócić uwagę na klika rzeczy:
// - Mixiny będą raczej wykorzystywane dla istniejącego kodu, którego nie da się rozwinąć w inny sposób
// - Zgodnie z intuicją: jeśli projektujemy nowy system - znajdziemy lepsze rozwiązanie
//   (np. powiązanie klas po przez interface lub klasę abstrakcyjną)
// - Tutaj dopisaliśmy klasy specjalnie - co w przypadku gdy chcemy połączyć jedynie istniejące już a
// zapisane wcześniej elementy ?
// -----> z pomocą przychodzi alternatywny "pattern":
// https://www.typescriptlang.org/docs/handbook/mixins.html#alternative-pattern
