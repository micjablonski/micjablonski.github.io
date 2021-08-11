console.log("To jest moje imię: Michał");

/* Komentarz blokowy - ALT + SHIFT + A */
// Komentarz liniowy - CTRL + / 

// Funkcja jest przenoszona na górę więc można ją wywołać wcześniej
function przedstawMnie () {
    console.log("Mam na imię Michał")
}
przedstawMnie();
przedstawMnie();

// Wyrażenie funkcji, nie można wywołać wcześniej funkcji przed jej zdefiniowaniem
const wypiszMojeImie = function () {
    console.log("Moje imię to Michał")
}
wypiszMojeImie();

function przedstaw(imie) {
    console.log(`Mam na imię ${imie}`);
}
przedstaw('Bartek');

function przedstawSie(imie="Monika") {
    console.log(`Mam na imię ${imie}`);
}
przedstawSie();

const dodajLiczby = function(liczba1= 0, liczba2=0) {
    let wynik = liczba1 + liczba2;
    console.log(wynik);
}
let liczbaMichala = 300;
let liczbaPierwsza = 10;

dodajLiczby();
dodajLiczby(100,3);
dodajLiczby(liczbaMichala,liczbaPierwsza);
dodajLiczby(liczbaMichala,7);

const mnozenieLiczb = function(liczba1 = 2, liczba2 = 2) {
    var wynik = liczba1 * liczba2;
    return wynik
}

console.log(mnozenieLiczb(0,3));

const mnozenie = function(liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 * liczba2;
    return wynik;
}
let wynikMnozenia = 0;
wynikMnozenia = mnozenie(4, 4);
console.log(wynikMnozenia);

//Zapis funkcji skrócony

//Postać funkcji standardowy
// const doKwadratu = function (x=0) {
//     return X * X;
// }
// let wynik = doKwadratu(3);
// console.log(wynik);

//Zapis funkcji strzałkowej
