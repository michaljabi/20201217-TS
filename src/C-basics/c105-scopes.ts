/**
 * W JavaScript bardzo ważną rolę odgrywają tzw. zasięgi - SCOPE
 *
 * Chodzi o to że funkcja ma dostęp do tego co jest "na zewnątrz niej"
 * będziemy to nazywać "outer scope"
 *
 * Pozwala nam to na wykorzystanie wartości, które zdefiniowane są poza funkcją.
 *
 * Zasięg na "samym szczycie" nazywany jest tzw. Global Scope
 * Jednak w Node.js każdy plik ma własny zakres - więc nazywanie go "globalnym"
 * jest technicznie delikatnym nadużyciem. Można jednak mówić o "globalnym zakresie modułu".
 *
 * Faktyczny zasięg globalny w całym Node.js osiągamy odwołując się do obiektu:
 * global
 * */

const sampleScope = 'Hello !';

// słowa kluczowe `let` i `const` posiadają tzw. zasięg leksykalny
// powoduje to brak "wyciekania" informacji poza zakres określony przez nawiasy klamrowe
{
    const inLexicalScope = 'cannot access outside';
    let theSameForLet = 'Hello let';
}

// Odkomentuj, aby zobaczyć błąd:
// console.log(inLexicalScope);
// console.log(theSameForLet);


// Oczywiście zazwyczaj nie piszemy kodu w ten sposób, jednak posiada to przełożenie na pętle
// oraz instrukcje warunkowe, te zaś posiadają bloki:

const x = 100;
const condition = x > 10;

if(condition) {
    let insideIfScope = 'Hello';
}
// Odkomentuj, aby zobaczyć błąd:
// console.log(insideIfScope);

// Podobnie nie mamy dostępu do zmiennych i stałych zdefiniowanych w środku bloku pętli:
for(let n = 10; n < 100; n +=10) {
    console.log(n);
}
// Odkomentuj, aby zobaczyć błąd:
// console.log(n);

// Własności te są oczywiste - dla języków wysokopoziomowych np. takich jak C#, Java
// Jednak nie były osiągalne w starym JavaScript (przed 2015r.) po przez zachowanie słowa kluczowego `var`
// Nie nadawało ono zasięgu leksykalnego zmiennej.

// JavaScript pozwala jednak - a TypeScript tego zachowania absolutnie nie zmienia,
// Dostać się do wartości które są w tzw. Outer Scope - zasięgu zewnętrznym

// Zobaczmy to na przykładzie definicji i wywołania funkcji `sayHello`;

function sayHello(): void {
    console.log(sampleScope);
    console.log('Condition evaluates to:', condition);
}

// wywołanie
sayHello();



// Najbardziej użyteczne wykorzystanie tej własności widać w momencie wykorzystania funkcji,
// która mieszka w innej funkcji - lub zwraca funkcję

function printLetters() {

    const letters = 'ABCDEF';

    function printer() {
        // Tutaj mamy dostęp do outer scope dowodzi tego korzystanie z `letters`
        for(let l of letters) {
            console.log(l);
        }
        // [!] Mamy tutaj również dostęp do bardziej zewnętrznego scope:
        console.log(sampleScope);
    }
    printer();
}
printLetters();
