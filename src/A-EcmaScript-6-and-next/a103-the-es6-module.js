/**
 * Od 2015 roku, możliwe jest wykorzystywanie tzw. ES6 Modules
 *
 * Modułowa budowa kodu, sprawia, że scope pliku jest hermetycznie zamknięty
 * Dostęp mamy tylko do tego co wyraźnie jest eksportowane
 *
 * za pomocą słowa kluczowego `export`
 *
 * Nadal w wersji Node 12. nie jest możliwe użycie tego zapisu "z pudełka"
 * Node, obsługuje zapis CommonJS
 * ( //przykład eksportu w CommonJS:
 *   module.exports = { greetings: 'Hello World' };
 * )
 * Najczęściej potrzebny jest transpiler (Babel, Typescript) który obsługuje syntaks:
 * "import / export" aby możliwe było jego wykorzystanie w Node.
 *
 * Podsumowując:
 * Kod, który nie będzie zawierał słowa kluczowego `export` nie będzie dostępny na zewnątrz tego pliku
* */


export const greetings = 'Hello World';
