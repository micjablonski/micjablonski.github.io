class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    } 
    opiszKsiazke() {
        return `Ksiazka ma tytul ${this.tytul}, autorem jest ${this.autor} i ${(this.przeczytana) ? '' : 'nie '}zostala przeczytana.`;
    }
}

let ksiazka1 = new Ksiazka("Wiedzmin", "Andrzej Sapkowski", true);
let ksiazka2 = new Ksiazka("Alchemik", "Paulo Coelho", false);
let ksiazka3 = new Ksiazka("Jedenascie minut", "Paulo Coelho", false);

let ksiazki = [];
ksiazki.push(ksiazka1, ksiazka2, ksiazka3);

function iloscPrzeczytanych(tablicaKsiazki) {

    let suma = 0;

    for (let ksiazka of tablicaKsiazki) {
        if (ksiazka.przeczytana) {
            suma += 1;
        }
        console.log(ksiazka.opiszKsiazke());
    }
    return suma;
}
let iloscKsiazekPrzeczytanych = iloscPrzeczytanych(ksiazki);
console.log(iloscKsiazekPrzeczytanych);