/**
 * Typescript nie jest językiem nominalnie typowanym.
 * Zamiast tego rozpatruje on obiekty po ich strukturze, jednak zachowując pewne reguły.
 *
 * Jeśli chodzi o polimorfizm - mechanizmy w TypeScript są bardzo podobne do innych języków wysokopoziomowych.
 *
 * Dla przykładu jeśli 2 klasy implementują ten sam interfejs - to możemy określić parametr funkcji lub zmienną
 * posiadającą typ tego interfejsu i przypisać do niej instancje jednej lub drugiej klasy
 *
 * Podobnie jeśli 2 klasy dziedziczą po klasie bazowej, instancje obiektów każdej z klas można przypisać
 * do zmiennej - instancji klasy bazowej.
 *
 * */

class Hardware {
    batteryLevel(): string {
        return 'low';
    }
}

class Keyboard extends Hardware {
    keyClicked = 'F5'
}

class Mouse extends Hardware {
    buttonClicked = 'right';
}


function checkBatteryLevel(pieceOf: Hardware) {
    console.log('battery level is: ', pieceOf.batteryLevel());
}

// Poprawny kod dzięki istnieniu tzw. kowariancji
checkBatteryLevel(new Keyboard());
checkBatteryLevel(new Mouse());


function checkClicked(pieceOf: Hardware) {
    // Poniższy kod nie zadziała:
    // console.log('That wont work', pieceOf.keyClicked)

    // Type guards idostajemy również podpowiadanie składni (!)
    if(pieceOf instanceof Keyboard) {
        console.log('Clicked key:', pieceOf.keyClicked);
    }
    if(pieceOf instanceof Mouse) {
        console.log('Clicked button:', pieceOf.buttonClicked);
    }
}

checkClicked(new Keyboard())
checkClicked(new Mouse())

// Inny Przykład:
interface IClickable {
    click(): void;
}

class RemoteControl implements IClickable {
    click(): void {}
}

class LcdScreen implements IClickable {
    click(): void {}
}

function delegateClick(something: IClickable) {
    something.click();
}

// Poprawny kod
delegateClick(new RemoteControl())
delegateClick(new LcdScreen())
