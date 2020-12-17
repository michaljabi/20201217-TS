/**
 * Zadanie 5:
 *
 * Podobnie bez ingerencji w szczegóły implementacji,
 * przepraw zapisy z :any w odpowiednie typy - zgodne z założeniami programu.
 * ... tym razem mamy do czynienia z bardziej złożonymi typami
 *
 * po poprawieniu typów, zmień implementację, zastosuj funkcję `joiner`
 * - tam gdzie to możliwe (np - połączenie imie + nazwisko)
 * następnie:
 * - utwórz odpowiednie obiekty i przekaż do `giveFullName` tak aby potwierdzić poprawność działania kodu
 * */

interface User {
    name: string;
    lastName: string;
    sex: 'male' | 'female';
    vipStatus?: boolean;
}

// function joiner (strTuple: string[]): string  {}

function joiner (strTuple: [string, string]): string  {
    return strTuple[0] + ' ' + strTuple[1];
}

function giveFullName(myUser: User): string {
    const fullName: string = myUser.name + ' ' + myUser.lastName;
    let prefix = '';
    let suffix = '';
    if(myUser.sex === 'female') {
        prefix = 'Pani';
    } else if(myUser.sex === 'male') {
        prefix = 'Pan';
    }
    if(myUser.vipStatus) {
        suffix = ' - the VIP'
    }
    return joiner([prefix, fullName]) + suffix;
}

export {};

