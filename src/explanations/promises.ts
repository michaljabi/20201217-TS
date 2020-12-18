const promise = new Promise<number>((resolve, reject) => {
    // logika...
    setTimeout(() => {
        resolve(123)
        // reject(new Error('oh no !'))
    }, 100)
})

// const promise2 = new Promise<number>((resolve, reject) => {
//     // logika...
//     setTimeout(() => {
//         // resolve(123)
//         reject(new Error('oh no  2!'))
//     }, 100)
// })

const promiseFactory = () => Promise.reject(new Error('Oh no rejected!'));


promise
    .then((num: number) => {
        console.log(num);
        return promiseFactory();
    })
    .then((num: number) => {
        console.log(num);
        throw new Error(' Jest error !')
    })
    .then((ok: void) => {
        console.log(ok);

    })
    .catch((err: Error) => {
        console.log(err);
    })

