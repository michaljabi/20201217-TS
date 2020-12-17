
// Ten plik posiada tylko named export'y
// Po zaimportowaniu po 2 stronie, musimy je nazywać tak jak tutaj nazwane zostały te konstrukcje
// tj, np: NUMBER_PI, nameShouter, Tool

export const NUMBER_PI = Math.PI;
export const LUCKY_NUMBER = 3;

export function nameShouter(name: string): void {
    console.log('Masz na imię:', name);
}

export class Tool {

    name: string;

    constructor(name: string) {
       this.name = name;
    }
}
