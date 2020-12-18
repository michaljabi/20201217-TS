/**
 *
 * Promise to konstrukcja asynchroniczna. W JavaScript wchodzi natywnie w 2015 roku, jako świetna odpowiedź na problem
 * tzw. Callback Hell. gdzie jeden callback czekając na odpowiedź innego - musiał być zagnieżdżony a dodając do tego
 * obsługę ewentualnych błędów - kod znacznie tracił na czytelności
 *
 * Promise z góry zakłada 2 stany, które NIE MOGĄ istnieć jednocześnie:
 *  - resolve
 *  - reject
 *
 * API do Promise pozwala nam uruchomić ją za pomocą konstruktora który przyjmuje jeden callback zwracający
 * te 2 funkcje (resolve i reject)
 * Dzięki zamknięciu naszej logiki w callbacku - korzystając z JS-owego mechanizmu "closure" mamy możliwość
 * uruchomienia niemalże dowolnej logiki w środku Promise, zwłaszcza wywołań asynchronicznych.
 *
 *
 * Po utworzeniu referencji do obiektu Promise - mamy możliwość jej odebrania za pomocą 2 metod:
 * .then - obsługa stanu resolve
 * .catch - obsługa stanu reject
 *
 * zaletą tego podejścia jest możliwość zwracania przez .then() dowolnej wartości - która i tak zostanie opakowana
 * w Promise - co daje nam możliwość tzw. chaining dla operacji:
 *
 * .then().then().then.......
 *
 * Przy jednoczesnej możliwości obsłużenia wszystkich błędów (synchronicznych lub asynchronicznych)
 * przy użyciu jednej metody .catch() - wow [!]
 *
 *
 * Definicja Promise w TypeScript - to oczywiście typ generyczny.
 * Ponieważ nie wiemy co zwróci nam obiekt Promise
 * */

function callAjax(cb: Function) {}

callAjax((err: Error, data: any) => {
      if(err) {
          return;
      }
      console.log('process', data);
        callAjax((err: Error, data: any) => {
            if(err) {
                return;
            }
            console.log('process', data);
            callAjax((err: Error, data: any) => {
                if(err) {
                    return;
                }
                console.log('process', data);
                callAjax((err: Error, data: any) => {
                    if(err) {
                        return;
                    }
                    console.log('process', data);
                    callAjax((err: Error, data: any) => {
                        if(err) {
                            return;
                        }
                        console.log('process', data);
                    })
                })
            })
        })
})

// Konstrukcja Promise, również jest generyczna:
const myPromise = new Promise<string>((resolve: (value: string) => void) => {
    resolve('Hello');
    // resolve(21332); // nie możemy robić resolve na innej wartości niż string !
});

// Można to zapisać prościej:
const myStringPromise = new Promise<string>((resolve) => {
    // resolve(23123); // również nie mamy pozwolenia na emisję number'a !!
    resolve('World');
});

// Typ generyczny jest zasadny ponieważ odbierając Promise - również warto wiedzieć
// Jakiego typu dane ona emituje:
myStringPromise
    .then(() => {})

// Słowa kluczowe: async / await - obsługa promises
// async function runLogic() {
//     const value = await myStringPromise;
//     console.log('Wygląda jak synchroniczny kod:', value);
//     return value + '!'
// }

// Całość realizacji logiki dla promise wyglądać może na przykład następująco:

// Przykład tworzenia generycznej promisy:
function makeMeAPromise<TYPE>(shouldBeBroken: boolean, data: TYPE): Promise<TYPE> {
   // PROVIDER:
   return new Promise<TYPE>((resolve, reject) => {
       if(shouldBeBroken) {
           reject(new Error('I am broken by design :('))
       } else {
           resolve(data)
       }
   })
}


// CONSUMER:

// Zaobserwuj co się stanie jeśli zmienisz true na false:
const myBrokenPromise = makeMeAPromise(true, 'value1');
myBrokenPromise
    .then((val: string) => {
        console.log('Never happened', val)
    })
    .catch((err: Error) => {
        console.log(err)
    })


// Możliwa jest obietnica -
// Promise które nigdy się nie zrealizuje:
const iWillNeverMakeADecision = new Promise<never>(() => {});

// iWillNeverMakeADecision.then(() => {})
// console.dir(iWillNeverMakeADecision)
