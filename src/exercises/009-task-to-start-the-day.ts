/**

    Zadanie na start:

    #1
    Przygotuj model danych dla operacji bankowej spełniający następujące wymagania:
    > każda operacja posiada swój unikatowy identyfikator, tytuł oraz datę kiedy miała miejsce
    > są dwa typy operacji: uznania i obciążenia -> in / out

    #2
    Pokaż kilka danych/wpisów wykorzystujących model - wymyśl te wpisy.

    #3
    Czy potrafisz pokazać te dane jako lista operacji?

    #4*
    Nastąpiła zmiana wymagań, istnieje 3 rodzaj operacji: anulowane -> cancelled.
    Jednocześnie nie chcemy żeby poprzednie listy dotyczyła ta zmiana,
    tylko nowe operacje mogą być anulowane.
    Pokaż kolejną - nową listę (wymyśl wpisy) korzystającą z 3 rodzajów operacji,
    przy jednoczesnym zachowaniu starego działania poprzedniej listy
    (nieuwzględniającego tego 3 rodzaju)

 */
// type CashOperation = {
//     id: number;
//     title: string;
//     date: Date;
//     type: 'in' | 'out'
// }

type CashOperationType = 'in' | 'out';
type CancelableCashOperationType = CashOperationType | 'canceled';

// #1
interface CashOperation {
    id: number;
    title: string;
    date: Date;
    type: CashOperationType;
    value: number;
}

// #2
const firstOperation: CashOperation = { id: 1, date: new Date(), title: 'Wpłata',  value: 100, type: 'in' };
const secondOperation: CashOperation = { id: 2, date: new Date(), title: 'Wypłata',  value: -100, type: 'out' };

console.log(firstOperation)

const serialized = JSON.stringify(firstOperation);

console.log(serialized)
console.log(typeof serialized)

const myOperationBackFromBackend = JSON.parse(serialized);

console.log(myOperationBackFromBackend)
console.log(typeof myOperationBackFromBackend.date)

myOperationBackFromBackend.date = new Date(myOperationBackFromBackend.date);

console.log(myOperationBackFromBackend)

// #3
const operationList: CashOperation[] = [firstOperation, secondOperation];

// #4
// interface CancelableCashOperation extends CashOperation {
//     // type: CancelableCashOperationType;
// }
//
// type CashOper = {id: number};
// type TypedCashOper = CashOper & {type: string};
//
// const myNewTape: TypedCashOper = { id: 1, type: 'dowolny' }

interface CancelableCashOperation {
    id: number;
    title: string;
    date: Date;
    type: CancelableCashOperationType;
    value: number;
}

const futureOperationList: CancelableCashOperation[] = [
    { id: 2, date: new Date(), title: 'Wypłata',  value: -200, type: 'canceled' /*, newtype: 'canceled'*/ },
];
