
function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Tutaj TypeScript będzie wymuszał na nas sprawdzenie, czy `word` jest zdefiniowane
// Wynika to z faktu konieczności podania `string` do `.includes`
//
function hasWord(sentence: string, word?: string): boolean {
    if(!word) {
        return false;
    }
    return sentence.includes(word);
}

function countVowels(word: string): number {
    return (word.match(/aeiouy/gi) || []).length
}

export const toolLib = {
    capitalize: capitalize,
    /**
        JS w wersji EcmaScript2015 -> ES6 dodaje tzw. _Property Shorthand_:
        Nie trzeba powtarzać po znaku ':' wartości property, jeśli jego nazwa
        jest taka sama jak nazwa zmiennej/stałej do której mamy dostęp.
        {@see http://es6-features.org/#PropertyShorthand}

        [===]
    */
    hasWord,
    countVowels
}
