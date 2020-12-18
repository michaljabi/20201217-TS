type CashOperationType = 'in' | 'out';

interface CashOperation {
    id: number;
    title: string;
    date: Date;
    type: CashOperationType;
    value: number;
}


// Podejście nr1 które daje elastyczność:
class FrontCashOperation implements CashOperation {
    date = new Date();
    id = Math.random();
    // title: string;
    // title = '';
    // // @ts-ignore
    // title!: string; // to samo praktycznie co @ts-ignore - niebezpieczne bo title to tak naprawdę undefined.
    title = '';
    type: CashOperationType = 'in';
    // type = 'in' as CashOperationType; // Type assertion | powiedzenie TS: "zaufaj mi wiem co robię - nie sprawdzaj mnie"
    value = 0;
    // private sum = 100;

    constructor(date?: string | Date, value = 100) {
        if(typeof date === 'string') {
            this.date = new Date(date);
        } else if(date instanceof Date) {
            this.date = date;
        }
        this.value = value;
        // Tytuł może być zadeklarowany w konstruktorze
        // this.title = '';
    }

}

const firstOperator: CashOperation = new FrontCashOperation('2020-10-10T10:00:00Z')
console.log(firstOperator.title)
const secondOperator: CashOperation = new FrontCashOperation(new Date())

console.log(firstOperator)
console.log(secondOperator)

console.log(secondOperator instanceof FrontCashOperation)
console.log(secondOperator instanceof Object)

// Podejście nr 2:
function cashOperationFactory(date?: string | Date, value = 100): CashOperation {
    // const myDate = new Date(date);
    let myDate = new Date();
    if(typeof date === 'string') {
        myDate = new Date(date);
    } else if(date instanceof Date) {
        myDate = date;
    }
    return {
        id: Math.random(),
        date: myDate,
        title: '',
        value: value,
        type: 'in'
    }
}

const firstOperation: CashOperation = cashOperationFactory('2020-10-10T10:00:00Z');
const secondOperation: CashOperation = cashOperationFactory(new Date());

console.log(secondOperation instanceof FrontCashOperation)
console.log(secondOperation instanceof Object)

export {};
