/**
 * JavaScript posiada tzw. literały obiektowe.
 * Pozwalają one utworzyć dany obiekt - bez potrzeby definiowania jego struktury
 * Tak jak dzieje się to w językach zorientowanych obiektowo - które używają klas.
 *
 * Na początek prosty przykład....
 */


// Robiąc klasyczny obiekt w JS, wystarczy nam następujący zapis:
const myObject = {};

// Teraz, spodziewamy się - że można dynamicznie rozszerzać obiekt o nowe pola i wartości
// property: value

// W klasycznym JS, wystarczy dopisać nowe pole i przypisać mu wartość
// Okazuje się jednak że w TypeScript to niemożliwe:

// Odkomentuj aby sprawdzić:
// myObject.name = 'toolbox';

// Dzieje się tak po przez "wnioskowanie typów" = inferred types
// TypeScript określił już kształt obiektu na podstawie pierwszego przypisania.
// Nie miał on wtedy żadnych pól, dlatego nie da się go w ten sposób rozszerzyć.
// Wynika to z faktu iż nie określiliśmy że obiekt może posiadać pole `name` i jaką ono przyjmie wartość

// Zobaczmy jak to zrobić z polem wymaganym:
const namedObject: {name: string} = {name: 'Michael'};

// Lub z polem które jest opcjonalne:
let otherNamedObject: {name?: string, lastName?: string};

otherNamedObject = {};
otherNamedObject.name = 'scissors';
otherNamedObject.lastName = 'scissors';

// Każdy z typów obiektowych może być zdefiniowany:
type SuperUser = {
    name: string;
    isAdmin: boolean;
    age?: number;
    checkIsAdmin?(): string;
}

// interface SuperUser {
//     name: string;
//     isAdmin: boolean;
//     age?: number;
//     checkIsAdmin?(): string;
// }

// interface SuperUser {
//     sthElse: boolean;
// }

let myUser: SuperUser;

// Odkomentuj i przypisz nowego user'a:
myUser = {
   name: '',
   isAdmin: true,
    // po 2015:
    checkIsAdmin() {
       return '';
    }
};

// Typy obiektowe mogą zwierać sie w sobie:
type WebPortal = {
    title: string;
    loggedUser: SuperUser;
}

// typy nie pozostawiają po sobie śladu po procesie transpilacji
// są nam potrzebne jedynie podczas pisania aplikacji, później w czystym JavaScript - nie ma po nich śladu.

// przy zapisie istnieją podobne zasady jak przy typach prostych:
// przykład funkcji:
function introduceThePortal(thePortal: WebPortal) {
    const user: SuperUser = thePortal.loggedUser;
    console.log(thePortal.title);
    console.log(user.name);
    console.log(user.isAdmin);
}

// Typ to tylko definicja - nie powoduje utworzenia żadnych dodatkowych efektów, np. klasy
// [!] Nie można go używać do Tworzenia nowych instancji:
// const notPossibleToDoWithUser = new SuperUser();

// można jednak przypisać obiekt odpowiadający danemu typowi - klasycznie, stosując literał obiektowy
// do czego JavaScript nas przyzwyczaiło
// Przykładowo, to jest poprawny zapis (minimalna ilość danych do jego osiągnięcia):
const myValidPortal: WebPortal = {
    title: 'Online shop',
    loggedUser: {
        name: 'Ana',
        isAdmin: true
    }
}

console.log(myValidPortal);
// Typescript po podpięciu typu do myValidPortal pilnuje nas co do wymaganych pól obiektu;


// Zapis typu w zadeklarowanej postaci tj:
type HelloWorld = {hello: string};
// sprawia, że staje on się re-używalny po całej aplikacji.
// np. można teraz dodać słowo kluczowe `export`.

