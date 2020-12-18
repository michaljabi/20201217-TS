/**
 * Zadanie 4:
 *
 * Nie modyfikując funkcji getVatTaxRateFromServer, wywołaj ją i przekaż odpowiedni callback
 * tak aby odebrać wartość podatku i przeliczyć ceny po uwzględnieniu VAT
 * wymyśl te cenę - np. wartość koszyka = 300 zł
 * Przykładowo pokazanie wyniku:
 * console.log(300 + 300 * vatRate) // gdzie vatRate to odebrany argument z callback
 *
 * Napisz odpowiedni typ dla funkcji calculations i użyj go
 *
 *
 * 4.1 dodatkowe punkty:
 * - symuluj zwrot wartości podatku dopiero po 3 sekundach
 *
 * 4.2 dodatkowe punkty +:
 * - rzuć wyjątek jeśli calculations nie jest funkcją
 * - napisz taki właśnie przypadek i obsłuż go w try - catch
 * */

type VatAmountFn = (vat: number) => void;

function getVatTaxRateFromServer(calculations?: VatAmountFn): void | never {
    // console.log(calculations);

    // tutaj rzucamy !?
    // const isAFunction = calculations instanceof Function; // tak się nie uda.
    if(!(calculations instanceof Function)) {
        throw new Error('calculations is not a function!');
    }

    setTimeout(() => {
        //if(calculations instanceof Function) {
            calculations(0.23);
        //}
        //if(typeof calculations === 'function') {
            //calculations(0.23);
        //}
    }, 3000);
}

try {
    getVatTaxRateFromServer()
} catch (e: unknown) {
    if(e instanceof Error) {
        console.log(e.message)
    }
}

getVatTaxRateFromServer((vatRate: number) => {
    console.log(300 + 300 * vatRate)
})

export {};
