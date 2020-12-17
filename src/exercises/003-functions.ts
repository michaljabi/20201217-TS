/**
 * Zadanie 3:
 *
 * Napisz logikę do funkcji userOnboarding()
 *
 * Dla wywołania:

 userOnboarding('Jacek', 20, 'Manager', 'Medical pack')
 * Ma pokazywać na konsoli:

     Witaj Jacek,
     mając 20 lat doświadczenia.
     Dostałeś stanowisko: Manager

     Przysługuje Ci: Medical pack

 * Dla wywołania:

 userOnboarding('Marek')
 * Ma pokazywać na konsoli:

     Witaj Marek,
     mając 5 lat doświadczenia.
     Dostałeś stanowisko: Senior Specialist

     Przysługuje Ci: Grand premium Sport Card

 *
 * Dodatkowe punkty:
 * a) brak użycia if
 * b) użycie template stringów (``) - i interpolacji
 *
 *
 * [!] Przed rozpoczęciem zadania, usuń komentarze:
 * // @ts-ignore
 */

const JOB_TITLE = 'Senior Specialist'
const SOCIAL_PACKET = 'Grand premium Sport Card'

// @ts-ignore
function userOnboarding(name, yearOfExperience, jobTitle, socialPacket) {
    console.log('awaiting logic...')
}

// @ts-ignore
userOnboarding('Marek')
userOnboarding('Jacek', 20, 'Manager', 'Medical pack')



export {};
