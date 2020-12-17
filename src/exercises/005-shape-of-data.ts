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

function joiner (strTuple: any): any  {
    return strTuple[0] + ' ' + strTuple[1];
}

function giveFullName(myUser: any): any {
    const fullName: any = myUser.name + ' ' + myUser.lastName;
    let prefix: any;
    let suffix: any;
    if(myUser.sex === 'female') {
        prefix = 'Pani';
    } else if(myUser.sex === 'male') {
        prefix = 'Pan';
    }
    if(myUser.vipStatus) {
        suffix = ' - the VIP'
    }
    return prefix + ' ' + fullName + suffix;
}

export {};

