/**
 * W zasadzie mamy w JavaScript do dyspozycji 3 rodzaje pętli.
 * TypeScript nie zmienia tego stanu rzeczy.
 *
 * 1. while
 * 2. do - while
 * 3. for
 *
 * dodatkowo pętla for ma kilka wariantów (for - of) (for - in)
 * zostaną one poruszone szerzej przy omawianiu tablic (Arrays) (for - of) oraz kolekcji iterowalnych.
 * pętla (for - in) stosowana jest tylko do obiektów! - nie powinna być używana do tablic.
 * */


// pętla while - obraca się dopóty, dopóki warunek logiczny, który sprawdza - będzie obliczał się do wartości: true
let myFlag = true;
while ( myFlag ) {
    console.log('Hello once')
    myFlag = false;
}

// pętla do-while działa bardzo podobnie, jednak mamy pewność, że zawarta w jej bloku logika - wykona się przynajmniej raz
// innymi słowy warunek "while" sprawdzany jest dopiero na końcu obrotu pętli
do {
    console.log('Hello once again')
} while ( myFlag )

// Pętla for, działa na bardzo podobnych zasadach jak w innych językach programowania
// Jest najbardziej elastyczna pod względem zastosowania
// posiada 3 części oddzielone znakiem średnika ;
//
// for([ustalenie wartości początkowych]; [warunek]; [wyrażenie wykonywane na koniec każdego obrotu pętli])
//

// najczęstsze wykorzystanie:
for(let x = 10; x <= 15; x++) {
    console.log('count up...', x);
}

for(let x = 3; x >= 0; x--) {
    console.log('count down...', x);
}

// pętla która nigdy się nie wykona:
for(;false;) {
    console.log('FOR NEVER !')
}

// dla odmiany zmieniając warunek na statyczny wpis true - dostaniemy pętlę nieskończoną
